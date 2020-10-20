import React from "react";

export const Crypto = ({crypto_props}) => {

    const data = crypto_props;
    console.log(data);

    return (

        <div>
            {data.map(data => <div key={data.time}>
                    {data.high}
                </div>
            )}
        </div>
    )
};

/*
TODO: Lag en nettside som presenterer informasjonen i en stylet tabell med minst 4 kolonner med informasjon om bitcoin.
 Tabellen skal kun vise 20 dager om gangen,
 men det skal være mulig å bla gjennom alle dagene API-kallet returnerer ved hjelp av paginering.
 */
