import React from "react";
import moment from "moment";

export const Time = ({crypto_props}) => {

    return (

        <td>
            {crypto_props.map(data => <li key={data.time} className='list-group-item Table-Content mx-2 Singel-hover'>
                    {/* moment.js to parse unix timestamp to desired format */}
                    {moment.unix(data.time).format("DD/MM/YYYY")}
                </li>
            )}
        </td>
    )
};
