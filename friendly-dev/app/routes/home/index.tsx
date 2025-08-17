import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Friedly Dev" },
        { name: "description", content: "Portfolio of John Doe." },
    ];
}

export default function HomePage() {
    return <>Homepage</>;
}
