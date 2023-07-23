import React from "react";
import './Pagination.scss';
import { NavLink } from "react-router-dom";

type TypePropsPagination = {
    pages: number;
    currentPage: number;
}

export default function Pagination({ pages, currentPage }: TypePropsPagination) {
    return (
        <div className="pagination">
            <NavLink to={`/${(currentPage - 1)}`} className={`pagination__prev ${(currentPage - 1) < 1 ? 'pagination_disable' : ''} `}>
                Назад
            </NavLink>
            <div className="pagination__numbers">
                {pages && Array(pages).fill(null).map((_item, key) =>
                    <NavLink key={`page-${key + 1}`}
                        className={`pagination__numbers-item ${key + 1 === currentPage ? 'pagination__numbers-item_current pagination_disable' : ''}`}
                        to={`/${key + 1}`}                        >
                        {key + 1}
                    </NavLink>
                )}
            </div>
            <NavLink to={`/${currentPage + 1}`} className={`pagination__prev ${(currentPage + 1) > pages ? 'pagination_disable' : ''} `}>
                Далее
            </NavLink>
        </div >
    );
}

