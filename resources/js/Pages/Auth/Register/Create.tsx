import ErrorMessage from "@/components/ErrorMessage";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { Form, Link } from "@inertiajs/react";

export default function Register() {
    return (
        <AuthLayout>
            <Card>
                <CardHeader className="border-b-gray-200">
                    <CardTitle className="text-xl">Register</CardTitle>
                    <CardDescription className="text-lg">
                        Create New Account to get started
                    </CardDescription>
                </CardHeader>
                <Form method="post" action="/register" resetOnSuccess>
                    {({ errors }) => (
                        <>
                            {" "}
                            <CardContent className="mb-5 space-y-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="name" className="text-lg">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        aria-invalid={!!errors?.name}
                                        required
                                    />
                                    {errors.name && (
                                        <ErrorMessage>
                                            {errors.name}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-lg">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        required
                                        aria-invalid={!!errors?.email}
                                    />
                                    {errors.email && (
                                        <ErrorMessage>
                                            {errors.email}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="password"
                                        className="text-lg"
                                    >
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        aria-invalid={!!errors?.password}
                                    />
                                    {errors.password && (
                                        <ErrorMessage>
                                            {errors.password}
                                        </ErrorMessage>
                                    )}
                                </div>
                                <div className="space-y-1.5">
                                    <Label
                                        htmlFor="password_confirmation"
                                        className="text-lg"
                                    >
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type="password"
                                        aria-invalid={
                                            !!errors?.password_confirmation
                                        }
                                        required
                                    />
                                    {errors.password_confirmation && (
                                        <ErrorMessage>
                                            {errors.password_confirmation}
                                        </ErrorMessage>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-between w-full items-center">
                                    <Link href="/login">
                                        Already Have account?
                                    </Link>
                                    <Button type="submit">Register</Button>
                                </div>
                            </CardFooter>
                        </>
                    )}
                </Form>
            </Card>
        </AuthLayout>
    );
}
