type PostFilterProps = {
    searchQuery: string;
    onChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onChange }: PostFilterProps) => {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search posts"
                value={searchQuery}
                onChange={e => onChange(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default PostFilter;
