import React from 'react';
import '../../styles/pagination.css';

const Pagination = ({condition, pagination, onClick}) => {
    const pages = [];
    const lastPage = (pagination.curPage - 1) < 1 ? 1 : (pagination.curPage - 1);
    const nextPage = (pagination.curPage + 1) > pagination.totalPage ? pagination.totalPage : (pagination.curPage + 1);

    pages.push(<li key={0} onClick={() => onClick(condition.filter, lastPage, condition.sort)}>Last
        Page</li>);
    for (let i = 1; i <= pagination.totalPage; i++) {
        pages.push(<li key={i} onClick={() => onClick(condition.filter, i, condition.sort)}
                       className={pagination.curPage === i ? "page-active" : ""}>{i}</li>);
    }
    pages.push(<li key={pagination.totalPage + 1}
                   onClick={() => onClick(condition.filter, nextPage, condition.sort)}>Next Page</li>);

    return (
        <div className="pagination">
            <ul className="page">
                {pages}
            </ul>
        </div>
    )
};
export default Pagination;
