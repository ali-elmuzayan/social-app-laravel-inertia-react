import { Post } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

function PostList({ posts }: { posts: Post[] }) {
    return (
        <ul>
            {posts.map((post) => (
                <Card key={post.id} className="rounded-none">
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>
                            {"By "} {post?.user?.name}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{post.body}</p>
                    </CardContent>
                </Card>
            ))}
        </ul>
    );
}

export default PostList;
