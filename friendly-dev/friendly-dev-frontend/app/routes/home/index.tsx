import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import type { PostMeta } from "~/types";
import LatestPosts from "~/components/LatestPosts";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Friedly Dev" },
        { name: "description", content: "Portfolio of John Doe." },
    ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{
    projects: Project[];
    posts: PostMeta[];
}> {
    const url = new URL(request.url);
    const [projectsResponse, postsResponse] = await Promise.all([
        fetch(
            `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
        ),
        fetch(new URL("/posts-meta.json", url)),
    ]);

    if (!projectsResponse.ok || !postsResponse.ok)
        throw new Error("Failed to fetch projects or posts.");

    const projectsJson: StrapiResponse<StrapiProject> =
        await projectsResponse.json();
    const postsJson = await postsResponse.json();

    const projects = projectsJson.data.map(item => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url
            ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
            : "/images/no-image.png",
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,
    }));

    return {
        projects,
        posts: postsJson,
    };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
    const { projects, posts } = loaderData;

    return (
        <>
            <FeaturedProjects projects={projects} count={2} />
            <AboutPreview />
            <LatestPosts posts={posts} />
        </>
    );
};

export default HomePage;
