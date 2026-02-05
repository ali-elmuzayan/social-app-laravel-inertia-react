import { Toaster } from "@/components/ui/sonner";
import { Head } from "@inertiajs/react";
import { ReactNode } from "react";
import AppHeader from "@/layouts/app/app-header";

interface AppLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function AppLayout({ children, title }: AppLayoutProps) {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>{title}</title>
            </Head>
            <AppHeader/>
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadaw-sm p-6">
                    {children}
                </div>
            </main>
            <Toaster />
        </div>
    );
}
