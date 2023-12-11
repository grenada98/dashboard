import React, { useEffect, useState } from "react";
import {ReactComponent as Arrow} from "../arrow.svg";
import ReactPaginate from 'react-paginate';

export const PaginatedItems = (props) => {
  const handlePageClick = (event) => {
    props.setPagination({...props.pagination, currentPage: event.selected + 1})
  };

  return (
    <div className="pagination__wrapper">
      <ReactPaginate
        nextLabel={<div><Arrow/></div>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={props.pagination.totalPages}
        previousLabel={<Arrow/>}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
