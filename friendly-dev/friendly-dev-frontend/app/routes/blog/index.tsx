import { useState } from "react";
import type { Route } from "./+types";
import type { PostMeta } from "~/types";
import PostFilter from "~/components/PostFilter";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";

export async function loader({
    request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
    const url = new URL("/posts-meta.json", request.url);
    const res = await fetch(url.href);

    if (!res.ok) throw new Error("Failed to fetch data.");

    const data = await res.json();

    data.sort((a: PostMeta, b: PostMeta) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return { posts: data };
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
    const postsPerPage = 3;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

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
