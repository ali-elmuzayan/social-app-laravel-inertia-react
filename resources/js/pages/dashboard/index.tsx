import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import { Form } from "@inertiajs/react";

export default function Index() {
    return (
        <AppLayout title="Dashboard">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-2">Dashboard</h1>
            <PostForm />
        </AppLayout>
    );
}

function PostForm() {
    return (
        <Form method="post" className="space-y-4">
            <div className="flex  space-x-2">
                <Label htmlFor="title" className="text-sm font-semibold text-gray-700">Title: </Label>
                <Input type="text" name="title" />
            </div>
            <div className="flex space-x-2">
                <Label htmlFor="body" className="text-sm font-semibold text-gray-700">Body: </Label>
                <Input type="text" name="body" />   
            </div>
            <Button type="submit" >Post</Button>
        </Form>
    )
}