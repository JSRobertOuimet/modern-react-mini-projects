import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Friedly Dev" },
        { name: "description", content: "Portfolio of John Doe." },
    ];
}

export default function HomePage() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-2">Home</h1>
        </section>
    );
}
