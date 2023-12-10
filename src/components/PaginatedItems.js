import React, { useEffect, useState } from "react";
import {ReactComponent as Arrow} from "../arrow.svg";
import ReactPaginate from 'react-paginate';

export const PaginatedItems = (props) => {
  const handlePageClick = (event) => {
    props.setPagination({...props.pagination, currentPage: event.selected + 1})
  };

  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={props.totalpages}
        previousLabel="< previous"
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
    </>
  );
}
