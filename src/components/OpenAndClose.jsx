import React from "react";

export const Open = ({crypto_props}) => {

    return (

        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-color mx-4 XY'>
                    {data.open}
                </li>
            )}
        </td>
    )
};

export const Close = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-color mx-4 XY'>
                    {data.close}
                </li>
            )}
        </td>
    )
};
