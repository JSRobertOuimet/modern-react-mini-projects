import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";

const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const App = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await fetch(API_URL);

                if (!res.ok) throw new Error("Failed to fetch data.");

                const data = await res.json();

                setCoins(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    return (
        <>
            <h1>Crypto Dash</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && (
                <main className="grid">
                    {coins.map(coin => (
                        <CoinCard key={coin.id} coin={coin} />
                    ))}
                </main>
            )}
        </>
    );
};

export default App;
