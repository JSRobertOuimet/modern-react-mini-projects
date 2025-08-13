import { useProducts } from "../context/ProductContext";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { products, loading, error } = useProducts(ProductContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading && <p>Loading...</p>}
            {error && <div>{error}</div>}

            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
