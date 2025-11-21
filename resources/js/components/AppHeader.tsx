import { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
// import {create as loginPage} from "@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController";

export default function AppHeader() {
    const { user } = usePage<PageProps>().props;
    return (
        <header>
            <div className="max-w-4xl mx-auto py-4 px-6">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />
                    <div className="flex space-x-6 items-center">
                        <AppHeaderLink href="/dashboard">
                            Dashboard
                        </AppHeaderLink>
                        <div className="text-xl font-semibold">
                            {user?.name}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function AppHeaderLogo() {
    return <h1 className="text-xl font-bold">My Application</h1>;
}

function AppHeaderLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link href={href} className="text-lg font-medium  hover:underline">
            {children}
        </Link>
    );
}
