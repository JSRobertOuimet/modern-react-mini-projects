import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Friedly Dev" },
        { name: "description", content: "Portfolio of John Doe." },
    ];
}

export default function HomePage() {
    return (
        <section>
            <Hero name="JS" />
        </section>
    );
}
