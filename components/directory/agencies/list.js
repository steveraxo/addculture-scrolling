import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Plus from "../../../public/images/directory/plus.svg";
import Separator from "../../../public/images/directory/separator.svg";
import WebsiteIcon from "../../../public/images/directory/website-icon.svg";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 8,
      currentPage: 0,
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(e) {
    const toggler = document.querySelectorAll(".collapse-open");
    const collapse = document.querySelectorAll(".collapse");
    collapse.forEach((item) => {
      if (item.getAttribute("id") === e.target.getAttribute("data-toggler")) {
        item.classList.toggle("collapse-active");
      }
    });
  }

  formatData() {
    const data = this.props.agencies;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const agency = slice.map((agency, key) => (
      <React.Fragment key={key}>
        <div className="agency-list">
          <div className="agency-list-head">
            <img
              src={agency.acf.agency_image.url}
              alt={agency.acf.agency_name}
            />
          </div>
          <div className="agency-list-body">
            <div className="agency-list-title-location">
              <h1 className="agency-name">{agency.acf.agency_name}</h1>
              <p className="agency-list-location avant">
                {agency.regions[0].name}, {agency.regions[1].name}
              </p>
            </div>
            <div
              className="collapse-open"
              data-toggler={`collapse-${key}`}
              onClick={this.toggleCollapse}
            >
              <Plus style={{ pointerEvents: "none" }} />
            </div>
          </div>
        </div>
        <div className="collapse" id={`collapse-${key}`}>
          <div className="left">
            <Separator />
          </div>
          <div className="agency-list-details">
            <p className="agency-list-description">
              {agency.acf.agency_description}
            </p>
            <div className="clients-industry">
              <p>
                Clients <span>{agency.acf.clients}</span>
              </p>
              <p>
                Industry <span>{agency.industries[0].name}</span>
              </p>
            </div>

            <a
              className="agency-list-link avant"
              href={agency.acf.agency_website}
            >
              Visit website{" "}
              <span>
                <WebsiteIcon
                  style={{ position: "relative", top: "5px", left: "5px" }}
                />
              </span>
            </a>
          </div>
        </div>
      </React.Fragment>
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
        <div className="agencies-list container">
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
      </>
    );
  }
}
