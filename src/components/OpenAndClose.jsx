import React from "react";

export const Open = ({crypto_props, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const data = crypto_props;
    console.log(data);

    return (
        <div>
            <ul>
                <h4 className="Main-color mb-3">Open</h4>
                {data.map(data => <li key={data.time} className='list-group-item Table-color'>
                        {data.open}
                    </li>
                )}
            </ul>
        </div>
    )
};

export const Close = ({crypto_props, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const data = crypto_props;
    console.log(data);

    return (
        <div>
            <ul>
                <h4 className="Main-color mb-3">Close</h4>
                {data.map(data => <li key={data.time} className='list-group-item Table-color'>
                        {data.close}
                    </li>
                )}
            </ul>
        </div>
    )
};
