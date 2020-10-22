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

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="">
            <div className="row">
                <div className="col-sm-8">
                    <div className="Main-table container ">

                        <table className="row">
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
                            <tr>
                                <td className="Table-header">close</td>
                            </tr>
                            <tr>
                                <Close crypto_props={indexOfCurrentPage} loading={loading}/>
                            </tr>

                            </thead>
                            <thead>
                            <tr>
                                <td className="Table-header">Volum from</td>
                            </tr>
                            <tr>
                                <VolumeFrom crypto_props={indexOfCurrentPage} loading={loading}/>
                            </tr>
                            </thead>

                            <thead>
                            <tr>
                                <td className="Table-header">volum to</td>
                            </tr>
                            <tr>
                                <VolumeTo crypto_props={indexOfCurrentPage} loading={loading}/>
                            </tr>
                            </thead>

                        </table>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h1 className='Main-header'>Cryptocompare</h1>
                    <div>
                        <h4 className="Second-header ">Last 100 days of <img src={logo} className="logo"
                                                                             alt=""/> data</h4>
                    </div>
                    <div className="pagination-Container">
                        <Pagination
                            dataPerPage={dataPerPage}
                            totalData={data.length}
                            paginate={paginate}
                        />
                    </div>
                </div>

            </div>


        </div>
    )
};
