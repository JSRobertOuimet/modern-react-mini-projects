import type { Route } from "./+types/index";
import type {
    Project,
    Post,
    StrapiProject,
    StrapiResponse,
    StrapiPost,
} from "~/types";
import LatestPosts from "~/components/LatestPosts";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Friendly Dev" },
        { name: "description", content: "Portfolio of John Doe." },
    ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{
    projects: Project[];
    posts: Post[];
}> {
    const url = new URL(request.url);
    const [projectsResponse, postsResponse] = await Promise.all([
        fetch(
            `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`
        ),
        fetch(
            `${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`
        ),
    ]);

    if (!projectsResponse.ok || !postsResponse.ok)
        throw new Error("Failed to fetch projects or posts.");

    const projectsJson: StrapiResponse<StrapiProject> =
        await projectsResponse.json();
    const postsJson: StrapiResponse<StrapiPost> =
        await postsResponse.json();

    const projects = projectsJson.data.map(item => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.url
            ? `${item.image.url}`
            : "/images/no-image.png",
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,
    }));

    const posts = postsJson.data.map(item => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        date: item.date,
        body: item.body,
        image: item.image?.url
            ? `${item.image.url}`
            : "/images/no-image.png",
    }));

    return {
        projects,
        posts,
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
