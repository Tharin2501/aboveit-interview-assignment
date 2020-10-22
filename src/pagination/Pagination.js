import React from 'react';

const Pagination = ({dataPerPage, totalData, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-1">
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <div onClick={() => paginate(number)}>
                            <a href="#" className="pagination-Btn button-1">{number}</a>
                        </div>
                    </li>

                ))}
                <li>
                    <div onClick={() => paginate(pageNumbers.length)}>
                        <a href="#" className="pagination-Btn button-1">=></a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
