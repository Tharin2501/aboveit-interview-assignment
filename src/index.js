import React from 'react';
import ReactDOM from 'react-dom';
import {CryptoCompare} from "./api/Cryptocompare";
import city2 from "./images/city2.png";

function App() {
    return (
        <div className="container-fluid" style={{background: `url(${city2})`,minWidth: "100wv",backgroundSize: "cover"}}>
            <CryptoCompare/>
        </div>

    );
}

ReactDOM.render(<><App/></>, document.getElementById('root'));
