import 'dotenv/config'
import { z } from "zod";

const schema  = z.object({
    NODE_ENV: z.enum(["development", "production", "test"] as const),
    STRAPI_API_TOKEN: z.string(),
})

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof schema> {}
    }
}

/**
 * 環境変数の初期化
 * 
 * これを呼び出さないと型の整合性が取れない
 */
export function init() {
    const parsed = schema.safeParse(process.env);

    if (parsed.success === false) {
        console.error('Invalid environment variables: ', parsed.error.flatten().fieldErrors);
        throw new Error('Invalid environment variables');
    }
}
