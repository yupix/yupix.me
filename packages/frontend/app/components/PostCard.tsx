import { STRAPI_BASE_URL } from "~/utils/const";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface Props {
    post: BlogPost;
}

export function PostCard({post}: Props) {
    return (
        <>
        <Card className="h-full">
            <CardHeader>
                <img src={`${STRAPI_BASE_URL}${post.attributes.Hero.data.attributes.formats.small.url}`} className="max-h-64 h-64 rounded-md"/>
                <h1 className="text-xl">{post.attributes.title}</h1>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700">{post.attributes.excerpt}</p>
            </CardContent>
            <CardFooter>
                {(new Date(post.attributes.createdAt)).toDateString()}
            </CardFooter>
        </Card>
        </>
    );
}