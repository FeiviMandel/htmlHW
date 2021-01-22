import React, { useEffect, useState } from 'react';

export default function StockDetails(props) {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api-v2.intrinio.com/companies/${props.stock}?api_key=OjE5YzQzZmRiZjk1ODQ1ZTA1ZTBhNzAwNGU1MjQ5ZjNj`);
                if (!response.ok) {
                    throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
                }
                const stocks = await response.json();
                setStocks(stocks);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [props.stock]);

    return (
        <>
            <div>{stocks.ticker}</div>
            <div>{stocks.legal_name}</div>
            <div>{stocks.short_description}</div>
        </>
    )
}
