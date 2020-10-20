import React from 'react';
import ReactDOM from 'react-dom';
import {Cryptocompare} from "./api/cryptocompare";

function App() {
    return (
        <div className='container mt-4 row'>
            <h1 className='text-info ml-3 mt-2'>Bitcoin</h1>
            <Cryptocompare/>
        </div>

    );
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
