import type { Post } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <article className="bg-gray-800 mb-4 p-6 rounded-lg shadow">
            {post.image && (
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded mb-4"
                />
            )}
            <h2 className="text-2xl-font-semibold text-blue-400">
                {post.title}
            </h2>
            <p className="text-sm text-gray-400 mb-2">
                {new Date(post.date).toDateString()}
            </p>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <Link
                to={`/blog/${post.slug}`}
                className="text-blue-400 text-sm hover:underline">
                Read More
            </Link>
        </article>
    );
};

export default PostCard;
