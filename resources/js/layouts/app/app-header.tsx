import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import AppLogo from "@/components/app-logo";
import NavLinks from "./nav-links";

export default function AppHeader() {
    const { user } = usePage<PageProps>().props;
    return (
        <header>
            <div className="max-w-4xl mx-auto py-4 px-6 ">
                <nav className="flex items-center justify-between">
                    <AppLogo />
                    <NavLinks /> 
                </nav>
            </div>
        </header>
    );
}
