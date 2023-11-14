import { STRAPI_BASE_URL } from "~/utils/const";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { cn } from "~/utils/misc";

interface Props {
  post: BlogPost;
  aspectRatio?: "portrait" | "square";
}

export function PostCard({ post, aspectRatio }: Props) {
  return (
    <>
      <Card className="h-full border-none  transition-all hover:outline outline-blue-100  rounded-md hover:outline-offset-4">
        <CardHeader>
          <img
            src={`${STRAPI_BASE_URL}${post.attributes.Hero.data.attributes.formats.small.url}`}
            className={cn(
              "max-h-[650px] h-auto w-auto object-cover rounded-md",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
          <h1 className="text-xl">{post.attributes.title}</h1>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{post.attributes.excerpt}</p>
        </CardContent>
        <CardFooter>
          {new Date(post.attributes.createdAt).toDateString()}
        </CardFooter>
      </Card>
    </>
  );
}
