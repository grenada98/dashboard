import React, { useEffect, useState } from "react";
import {ReactComponent as Arrow} from "../arrow.svg";
import ReactPaginate from 'react-paginate';

export const PaginatedItems = (props) => {

  const [itemOffset, setItemOffset] = useState(0);
  useEffect(()=>{
    props.paginationSettings.currentData.map((elem)=>{
      console.log(elem)
    })
  }, [props.paginationSettings.data])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + props.paginationSettings.elemSizePerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = props.paginationSettings.data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.paginationSettings.data.length / props.paginationSettings.elemSizePerPage);
    props.setPaginationSettings({...props.paginationSettings, 
                                currentData: [...currentItems], 
                                maxCountPages: pageCount})
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * props.paginationSettings.elemSizePerPage) % props.paginationSettings.data.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={props.paginationSettings.maxCountPages}
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
