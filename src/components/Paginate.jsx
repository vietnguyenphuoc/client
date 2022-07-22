import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
const Paginate = ({ totalPage, currentPage, onChangePage }) => {
  const items = [];
  const roundingPaginate = Math.ceil(totalPage / 9);
  for (let page = 1; page <= roundingPaginate; page++) {
    items.push(
      <Pagination.Item key={page} active={page === (Number(currentPage)+1)} onClick={() => onChangePage(page)}>
        {page}
      </Pagination.Item>
    );
  }

  return (
    <>
      {/* {console.log(roundingPaginate+ 'aaaaaaa')} */}
      <Pagination className="offset-4 mt-4">
        {/* <Pagination.First />     */}
        { currentPage > 0 && <Pagination.Prev onClick={() => onChangePage(Number(currentPage))}/>}
        
        {/* <Pagination.Item key={1} onClick={() => onChangePage(page)}></Pagination.Item>
      <Pagination.Item><Link to="?page=2">{2}</Link></Pagination.Item>
      <Pagination.Item><Link to="?page=3">{3}</Link></Pagination.Item> */}
        {/* {items}
      {console. (items)} */}
      {/* {console.log(currentPage)} */}
        {items}
        {/* <Pagination.Ellipsis /> */}
        { currentPage < (roundingPaginate-1) && <Pagination.Next onClick={() => onChangePage( Number(currentPage) + 2)}/>}
        {/* [][][][][][] */}
        {/* <Pagination.Last /> */}
      </Pagination>
    </>
  );
};

export default Paginate;
