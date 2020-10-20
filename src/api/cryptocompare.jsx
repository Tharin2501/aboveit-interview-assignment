import React, {useState, useEffect} from "react"
import axios from "axios";
import {Crypto} from "../components/crypto";

export const Cryptocompare = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setPostsPerPage] = useState(20);



    useEffect(() => {
        axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2")
            .then(res => {
                const response = res.data.Data.Data;
                setData(response)
            });
    }, []);

    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    const indexOfCurrentPage = data.slice(indexOfFirstPost,indexOfLastPost);

    return (
        <div>
            <Crypto crypto_props={indexOfCurrentPage}/>
        </div>
    )
};

