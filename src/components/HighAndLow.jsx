import React from "react";

export const High = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-2 Singel-hover'>
                    {"$ "+ data.high }
                </li>
            )}
        </td>
    )
};


export const Low = ({crypto_props}) => {

    return (

        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-2 Singel-hover'>
                    {"$ "+ data.low }
                </li>
            )}
        </td>

    )
};
