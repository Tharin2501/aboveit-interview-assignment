import React, {useState, useEffect} from "react"
import axios from "axios";
import {High, Low} from "../components/HighAndLow";
import Pagination from "../pagination/Pagination";
import {Time} from "../components/Time";
import {Close, Open} from "../components/OpenAndClose";
import {VolumeFrom, VolumeTo} from "../components/Volume";
import logo from '../images/logo.png';

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
        <div>
            <div className="row ">
                <h1 className='Main-header col-sm'>Cryptocompare</h1>
                <div className="w-100"/>
                <div className="col-sm-7">
                    <h4 className="Second-header ml-2">Last 100 days of  <img src={logo} className="logo mb-2 " alt="Image not found" /> data</h4>
                </div>
                <div className="col-sm-5">
                    <Pagination
                        dataPerPage={dataPerPage}
                        totalData={data.length}
                        paginate={paginate}
                    />
                </div>
            </div>

            <div className="Main-table container mt-4">
                <table className="row">
                    {/* columns*/}
                    <thead>
                    <tr>
                        <td className="Table-header">Date</td>
                    </tr>
                    <tr>
                        <Time crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>
                    </thead>

                    <thead>
                    <tr>
                        <td className="Table-header">high</td>
                    </tr>
                    <tr>
                        <High crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>
                    </thead>

                    <thead>
                    <tr className="column-Container">
                        <td className="Table-header">low</td>
                    </tr>
                    <tr className="column-Container">
                        <Low crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>
                    </thead>

                    <thead>
                    <tr className="column-Container ">
                        <td className="Table-header">open</td>
                    </tr>
                    <tr className="column-Container">
                        <Open crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>
                    </thead>

                    <thead>
                    <tr className="column-Container ">
                        <td className="Table-header">close</td>
                    </tr>
                    <tr className="column-Container">
                        <Close crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>

                    </thead>
                    <thead>
                    <tr className="column-Container ">
                        <td className="Table-header">Volum from</td>
                    </tr>
                    <tr className="column-Container">
                        <VolumeFrom crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>
                    </thead>

                    <thead>
                    <tr className="column-Container">
                        <td className="Table-header">volum to</td>
                    </tr>
                    <tr className="column-Container">
                        <VolumeTo crypto_props={indexOfCurrentPage} loading={loading}/>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
};
