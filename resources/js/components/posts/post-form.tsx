import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@inertiajs/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Image, Newspaper, Youtube } from "lucide-react";
import { InputError } from "../input-error";

export default function PostForm() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="mb-4 w-full bg-white  border border-gray-200 rounded-lg p-4 space-y-4">
                    <div className="flex  items-center space-x-4">
                        <Avatar size="lg">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AA</AvatarFallback>
                        </Avatar>
                        <Button
                            variant="outline"
                            className="flex-1 text-start rounded-full text-base font-semibold text-gray-700 justify-start h-12"
                        >
                            Start a post
                        </Button>
                    </div>
                    <div className="flex items-center justify-between space-x-8 px-8">
                        <Button
                            variant="outline"
                            className="flex-1 border-0 shadow-none"
                        >
                            <Youtube className="w-4 h-4" />
                            Image
                        </Button>
                        <Button
                            variant="outline"
                            className="flex-1 border-0 shadow-none"
                        >
                            <Image />
                            Photo
                        </Button>
                        <Button
                            variant="outline"
                            className="flex-1 border-0 shadow-none"
                        >
                            <Newspaper className="w-12 h-12" />
                            NewsLetter
                        </Button>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>Create A New Post</DialogTitle>
                    <DialogDescription>
                        <Form method="post" className="space-y-4">
                            {({ errors }) => (
                                <>
                                    <div className="flex  space-x-2">
                                        <Label
                                            htmlFor="title"
                                            className="text-sm font-semibold text-gray-700"
                                        >
                                            Title:{" "}
                                        </Label>
                                        <Input
                                            type="text"
                                            name="title"
                                            aria-invalid={!!errors.title}
                                        />
                                        <InputError message={errors.title} />
                                    </div>
                                    <div className="flex space-x-2">
                                        <Label
                                            htmlFor="body"
                                            className="text-sm font-semibold text-gray-700"
                                        >
                                            Body:{" "}
                                        </Label>
                                        <Input
                                            type="text"
                                            name="body"
                                            aria-invalid={!!errors.body}
                                        />
                                        <InputError message={errors.body} />
                                    </div>
                                    <Button type="submit">Post</Button>
                                </>
                            )}
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
