import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { PostCard } from "~/components/PostCard";
import { Spacer } from "~/components/Spacer";
import { strapi } from "~/utils/strapi.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({}) {
  const res = await strapi.find<BlogPost[]>("blogs", {
    populate: ["Hero"],
  });
  return json({ blogs: res });
}

export default function Index() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="h-full"
    >
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 h-96 flex justify-center items-center text-3xl text-white rounded-r-md">
        <p>
          Hello There! My name is <span className="font-bold">yupix</span>
        </p>
      </section>
      <Spacer size="xl" />
      <section>
        <div className="flex justify-between">
          <h2 className="text-4xl">Latest Posts</h2>
          <Link to="/posts">
            <div className="flex items-center group cursor-pointer">
              <p className="text-2xl">See all posts</p>
              <div className="ml-4 border rounded-full border-gray-800 p-2">
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </div>
            </div>
          </Link>
        </div>
        <Spacer size="4xs" />
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {blogs.data.map((blog) => (
            <Link
              key={blog.id}
              to={`/posts/${blog.id}`}
              unstable_viewTransition
            >
              <PostCard aspectRatio={"square"} post={blog} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
