import React from 'react';
import ReactDOM from 'react-dom';
import {Cryptocompare} from "./api/cryptocompare";

function App() {
    return (
        <div className="App">
            <Cryptocompare/>
        </div>
    );
}


ReactDOM.render(<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

