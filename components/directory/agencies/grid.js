import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import WebsiteIcon from "../../../public/images/directory/website-icon.svg";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 8,
      currentPage: 0,
    };
  }

  formatData() {
    const data = this.props.agencies;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const agency = slice.map((agency, key) => (
      <div key={key} className="agency-card">
        <div className="agency-card-head">
          <img
            className="agency-image"
            src={agency.acf.agency_image.url}
            alt={agency.acf.agency_name}
          />
          <h2 className="agency-name">{agency.acf.agency_name}</h2>
          <p className="agency-region avant">
            {agency.regions[0].name}, {agency.regions[1].name}
          </p>
        </div>
        <div className="agency-card-body">
          <p className="agency-description">{agency.acf.agency_description}</p>
        </div>

        <div className="agency-info">
          <p>
            Clients <span>{agency.acf.clients}</span>
          </p>
          <p>
            Industry <span>{agency.industries[0].name}</span>
          </p>
          <a className=" agency-link avant" href={agency.acf.agency_website}>
            Visit website{" "}
            <span>
              <WebsiteIcon
                style={{ position: "relative", top: "5px", left: "5px" }}
              />
            </span>
          </a>
        </div>
      </div>
    ));

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      agency,
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.formatData();
      }
    );
  };

  componentDidMount() {
    this.formatData();
  }
  render() {
    return (
      <>
        <div className="container agencies-container">
          {this.state.agency}
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
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
            padding: 0 5% !important;
          }
        `}</style>
      </>
    );
  }
}
