import React, {useState, useEffect} from "react"
import axios from "axios";
import {Crypto} from "../components/crypto";
import Pagination from "../pagination/pagination";
import {Time} from "../components/time";

export const Cryptocompare = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2")
            .then(res => {
                const response = res.data.Data.Data;
                setData(response)
            });
    }, []);

    // *** PAGINATION ***
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(20); // Tabellen skal kun vise 20 dager om gangen

    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    const indexOfCurrentPage = data.slice(indexOfFirstPost,indexOfLastPost);

    // bla gjennom alle dagene
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="container">
            <div className="row p-3">
            <Crypto crypto_props={indexOfCurrentPage}/>
            <Time crypto_props={indexOfCurrentPage}/>
            </div>
            <Pagination
                postsPerPage={dataPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </div>
    )
};

