import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { PostCard } from "~/components/PostCard";
import { Spacer } from "~/components/Spacer";
import { strapi } from "~/utils/strapi.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const p = url.searchParams.get("p");

  const res = await strapi.find<BlogPost[]>("blogs", {
    populate: ["Hero"],
    pagination: {
      limit: 10,
      start: p ? parseInt(p) * 10 : 0,
    },
  });

  const topPost = res.data.shift()!;

  return json({ topPost, blogs: res.data });
}

export default function PostsRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1></h1>
      <Link to={`/posts/${data.topPost.id}`} unstable_viewTransition>
        <PostCard post={data.topPost} aspectRatio="square" />
      </Link>
      <Spacer size="sm" />
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 justify-center">
        {data.blogs.map((blog) => (
          <Link key={blog.id} to={`/posts/${blog.id}`} unstable_viewTransition>
            <PostCard post={blog} aspectRatio="portrait" />
          </Link>
        ))}
      </div>
    </div>

    // TODO: 無限ロードにするかページネーション置く
  );
}
