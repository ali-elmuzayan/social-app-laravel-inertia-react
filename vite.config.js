import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

defineConfig({
    plugin: [
        laravel({
            input: ["resources/css/App.css", "resources/js/app.tsx"],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: "automatic",
    },
});
