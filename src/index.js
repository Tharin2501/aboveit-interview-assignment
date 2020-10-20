import React from 'react';
import ReactDOM from 'react-dom';
import {CryptoCompare} from "./api/Cryptocompare";

function App() {
    return (
        <div className='container-fluid'>
            <CryptoCompare/>
        </div>

    );
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
