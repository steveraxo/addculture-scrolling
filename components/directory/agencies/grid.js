import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export default class Grid extends Component {
  render() {
    return (
      <>
        <div className="agencies-container">
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
        <style jsx>{`
          .agencies-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 5% auto;
            padding: 0 4%;
          }
        `}</style>
      </>
    );
  }
}
