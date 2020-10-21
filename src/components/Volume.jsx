import React from "react";

export const VolumeFrom = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-color mx-4 XY'>
                    {data.volumefrom}
                </li>
            )}
        </td>
    )
};


export const VolumeTo = ({crypto_props}) => {

    return (
        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-color mx-4 XY'>
                    {data.volumeto}
                </li>
            )}
        </td>
    )
};

