import React, {useState, useEffect} from "react"
import axios from "axios";
import logo from "../images/logo.png"
import {High, Low} from "../components/HighAndLow";
import Pagination from "../pagination/Pagination";
import {Time} from "../components/Time";
import {Close, Open} from "../components/OpenAndClose";

export const CryptoCompare = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2")
            .then(res => {
                setLoading(true);
                const response = res.data.Data.Data;
                setData(response);
                setLoading(false);
            });
    }, []);

    // *** PAGINATION ***
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(20); // Tabellen skal kun vise 20 dager om gangen

    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    const indexOfCurrentPage = data.slice(indexOfFirstPost, indexOfLastPost);

    // bla gjennom alle dagene
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="container-fluid">
            <div className="row">
                    <img src={logo} className="Image-logo float-left mt-2 mr-2" alt="image not found"/>
                <h1 className='Main-header mt-2 mr-5'>100 days of Bitcoin</h1>
            <Pagination className=""
                dataPerPage={dataPerPage}
                totalData={data.length}
                paginate={paginate}
            />
            </div>
            <div className="row p-4">
                <Time crypto_props={indexOfCurrentPage} loading={loading}/>
                <High crypto_props={indexOfCurrentPage} loading={loading}/>
                <Low crypto_props={indexOfCurrentPage} loading={loading}/>
                <Open crypto_props={indexOfCurrentPage} loading={loading}/>
                <Close crypto_props={indexOfCurrentPage} loading={loading}/>
            </div>
        </div>
    )
};

