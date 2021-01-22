import React, { useEffect, useState } from 'react';

export default function StockInfo(props) {
    const [stockInfo, setStockInfo] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // setInterval(async () => {
                const response = await fetch(`https://api-v2.intrinio.com/securities/${props.info}/prices/realtime?api_key=OjE5YzQzZmRiZjk1ODQ1ZTA1ZTBhNzAwNGU1MjQ5ZjNj`);
                if (!response.ok) {
                    throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
                }
                const stockInfo = await response.json();
                setStockInfo(stockInfo);
                // }, 5000);
            }
            catch (err) {
                console.error(err);
            }
        })();
    }, [props.info]);
    const date = new Date(`${stockInfo.updated_on}`);
    let time = date.toLocaleString();
    time=time.replace(',', '');
    
    return (
        <>
            <div>{stockInfo.last_price}</div>
            <div>{time}</div>

        </>
    )
}
