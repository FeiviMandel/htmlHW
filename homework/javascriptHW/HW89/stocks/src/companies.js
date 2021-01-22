import React, { useEffect, useState } from 'react';

export default function StockDetails(props) {
    const [company, setCompany] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OjE5YzQzZmRiZjk1ODQ1ZTA1ZTBhNzAwNGU1MjQ5ZjNj`);
                if (!response.ok) {
                    throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
                }
                const company = await response.json();
                setCompany(company);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [props.company]);

    return (
        <ul>
            {company.map(c => (
                <li key= {c.id}>
                    <div>{c.ticker}</div>
                    <div>{c.name}</div>
                </li>
            ))}
        </ul>
    )
}
