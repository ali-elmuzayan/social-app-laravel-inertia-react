import { Link } from "@inertiajs/react";

export default function AppHeaderLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link href={href} className="text-md font-medium  hover:underline">
            {children}
        </Link>
    );
}
