import Header from "./components/Header";
import ProductList from "./components/ProductList";

const App = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 p-6">
                <h2 className="text-3xl font-bold mb-6">
                    Product Catalog
                </h2>
                <ProductList />
            </div>
        </>
    );
};

export default App;
