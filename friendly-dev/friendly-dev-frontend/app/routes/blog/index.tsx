import { useState } from "react";
import type { Route } from "./+types";
import type { Post, StrapiResponse, StrapiPost } from "~/types";
import PostFilter from "~/components/PostFilter";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";

export async function loader({
    request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`
    );

    if (!res.ok) throw new Error("Failed to fetch data.");

    const json: StrapiResponse<StrapiPost> = await res.json();
    const posts = json.data.map(item => ({
        id: item.id,
        image: item.image?.url
            ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
            : "/images/no-image.png",
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        date: item.date,
        body: item.body,
    }));

    return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
    const { posts } = loaderData;
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const filteredPosts = posts.filter(post => {
        const query = searchQuery.toLowerCase();

        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
        );
    });
    const postsPerPage = 2;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

    console.log(posts);

    return (
        <div className="max-w-3xl mx-auto px-6 py-6 bg-gray-900">
            <h1 className="text-3xl font-bold text-white mb-8">Blog</h1>
            <PostFilter
                searchQuery={searchQuery}
                onChange={query => {
                    setSearchQuery(query);
                    setCurrentPage(1);
                }}
            />

            <div className="space-y-8">
                {currentPosts.length === 0 ? (
                    <p className="text-gray-400 text-center">
                        No posts found.
                    </p>
                ) : (
                    currentPosts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))
                )}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={page => setCurrentPage(page)}
                />
            )}
        </div>
    );
};

export default BlogPage;
