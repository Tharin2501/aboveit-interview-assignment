import React from 'react';

const Pagination = ({ dataPerPage, totalData, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-4 ml-2">
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='/#'  className='page-link'>
                            {number}
                        </a>
                    </li>

                ))}
                <li className='page-item'>
                    <a onClick={() => paginate(pageNumbers.length)} href='/#' className='page-link'>
                        ->
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;