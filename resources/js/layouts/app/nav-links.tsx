import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import { create as loginPage } from "@/actions/App/Http/Controllers/Auth/AuthenticateSessionController";
import UserDropdown from "@/components/user-dropdown";
import AppHeaderLink from "@/layouts/app/app-header-link";
import { PageProps } from "@/types";

export default function NavLinks() {
    const { user } = usePage<PageProps>().props;
    return (
        <div className="flex space-x-6 items-center">
            <Button >
                <Link >Add Post</Link>
            </Button>
            <AppHeaderLink href="/dashboard">
                Dashboard
            </AppHeaderLink>
            {user ? (
                <UserDropdown />
            ) : (
                <Button asChild variant="outline">
                    <Link href={loginPage().url}>Login</Link>
                </Button>
            )}
        </div>
    );
}
