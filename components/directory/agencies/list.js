import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="agencies-list container">
          {this.props.agency}
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.props.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}
