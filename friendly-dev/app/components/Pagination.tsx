type PaginationProps = {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    setCurrentPage,
}) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    className={`px-3 py-1 cursor-pointer rounded ${
                        currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-200"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
