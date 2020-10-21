import React from "react";

export const Open = ({crypto_props}) => {

    return (

        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-3 Singel-hover'>
                    {"$ "+ data.open}
                </li>
            )}
        </td>
    )
};

export const Close = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-3 Singel-hover'>
                    {"$ "+data.close}
                </li>
            )}
        </td>
    )
};
