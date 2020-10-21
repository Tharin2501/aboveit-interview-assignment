import React from "react";

export const High = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-color mx-4 XY'>
                    {data.high}
                </li>
            )}
        </td>
    )
};


export const Low = ({crypto_props}) => {

    return (

        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-color mx-4 XY'>
                    {data.low}
                </li>
            )}
        </td>

    )
};
