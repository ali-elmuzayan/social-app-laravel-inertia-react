import PostForm from "@/components/posts/post-form";
import PostList from "@/components/posts/post-list";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { Post } from "@/types";

export default function Index({ posts }: { posts: Post[] }) {
    return (
        <AppLayout title="Dashboard">
            <PostForm />
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-gray-900">Posts</h1>
                <Button variant="outline">filter</Button>
            </div>
            <PostList posts={posts} />
        </AppLayout>
    );
}
