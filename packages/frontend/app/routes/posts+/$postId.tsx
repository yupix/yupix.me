import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Link,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { strapi } from "~/utils/strapi.server";
import MarkDoc from "@markdoc/markdoc";
import React from "react";
import { Button } from "~/components/ui/button";
import { Spacer } from "~/components/Spacer";
import { STRAPI_BASE_URL } from "~/utils/const";
import { Prose } from "~/components/Prose";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.postId === undefined) throw new Error("Post ID is undefined");
  try {
    const res = await strapi.findOne<BlogPost>("blogs", params.postId, {
      populate: ["Hero"],
    });
    return json(res);
  } catch (res: any) {
    throw new Response(res, { status: 404 });
  }
}

export default function PostRoute() {
  const data = useLoaderData<typeof loader>();
  const ast = MarkDoc.parse(data.data.attributes.Content);
  const content = MarkDoc.transform(ast);

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-center">
            <div>
              <h1 className="text-4xl">{data.data.attributes.title}</h1>
              <p>{new Date(data.data.attributes.createdAt).toDateString()}</p>
            </div>
          </div>
          <Spacer size="sm" />
          <div className="flex justify-center">
            <img
              src={`${STRAPI_BASE_URL}${data.data.attributes.Hero.data.attributes.formats.small.url}`}
              className="mx-[10vw] w-full rounded-md max-h-[50vh] object-cover"
            />
          </div>
          <div className="bg-slate-50 rounded-md w-full -mt-16">
            <Spacer size="md" />
            <div className="p-5 flex justify-center">
              <div className="max-w-screen-sm ">
                <Prose>{MarkDoc.renderers.react(content, React)}</Prose>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="h-full w-full flex justify-center items-center">
          <div>
            <h1 className="font-bold text-4xl">404 Not Found</h1>
            <p className="text-gray-500">お探しの記事は見つかりませんでした</p>
            <Spacer size="4xs" />
            <Button variant="outline" asChild>
              <Link to="/">Go back Home</Link>
            </Button>
          </div>
        </div>
      );
    }
  }
}
