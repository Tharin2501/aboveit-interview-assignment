import React from "react";

export const Crypto = ({crypto_props, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const data = crypto_props;
    console.log(data);

    return (
        <div>
            <ul className="">
                <h3>High</h3>
                {data.map(data => <li key={data.time} className='list-group-item'>
                        {data.high}
                    </li>
                )}
            </ul>
        </div>
    )
};

/*
TODO: Lag en nettside som presenterer informasjonen i en stylet tabell med minst 4 kolonner med informasjon om bitcoin.
 Tabellen skal kun vise 20 dager om gangen,
 men det skal være mulig å bla gjennom alle dagene API-kallet returnerer ved hjelp av paginering.
 */
