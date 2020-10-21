import React from "react";

export const VolumeFrom = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-3 Singel-hover'>
                    {"$ " + data.volumefrom}
                </li>
            )}
        </td>
    )
};


export const VolumeTo = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-3 Singel-hover'>
                    {"$ " + data.volumeto + " B"}
                </li>
            )}
        </td>
    )
};

