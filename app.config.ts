import {defineConfig} from "@solidjs/start/config";
import suidPlugin from "@suid/vite-plugin";
import devtools from "solid-devtools/vite";

export default defineConfig({
    vite: {
        plugins: [
            suidPlugin(),
            devtools({
                autoname: true,
            }),
        ]
    },
    server: {
        prerender: {
            crawlLinks: true,
            routes: [
                "/",
                "/advent-of-code",
                "/education",
                "/employments",
                "/projects"
            ],
        },
    }
});
