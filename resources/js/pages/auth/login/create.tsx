import ErrorMessage from "@/components/error-message";
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
import AuthLayout from "@/layouts/auth-layout";
import { Form, Link } from "@inertiajs/react";

export default function Login() {
    return (
        <AuthLayout>
            <div className="max-w-xl xl:max-w-2xl mx-auto pt-30">
                <Card>
                    <CardHeader className="border-b-gray-200">
                        <CardTitle className="text-xl">Login</CardTitle>
                        <CardDescription className="text-lg">
                            Login to your account to get started
                        </CardDescription>
                    </CardHeader>
                    <Form method="post" action="/login" resetOnSuccess>
                        {({ errors }) => (
                            <>
                                {" "}
                                <CardContent className="mb-5 space-y-4">
                                    <div className="space-y-1.5">
                                        <Label
                                            htmlFor="email"
                                            className="text-lg"
                                        >
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
                                            type="password"
                                            id="password"
                                            name="password"
                                            aria-invalid={!!errors?.password}
                                        />
                                        {errors.password && (
                                            <ErrorMessage>
                                                {errors.password}
                                            </ErrorMessage>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex justify-between w-full items-center">
                                        <Link href="/register">
                                            Don't have an account?
                                        </Link>
                                        <Button type="submit">Login</Button>
                                    </div>
                                </CardFooter>
                            </>
                        )}
                    </Form>
                </Card>
            </div>
        </AuthLayout>
    );
}
