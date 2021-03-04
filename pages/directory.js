import React, { Component } from "react";
import Head from "next/head";

import DirectoryLayout from "../components/directory/layout";
import Hero from "../components/directory/hero";
import AddCultureFooter from "../components/directory/footer";

import Grid from "../components/directory/agencies/grid";
import List from "../components/directory/agencies/list";

import Search from "../components/directory/search/search";
import Industries from "../components/directory/filters/industries";
import Size from "../components/directory/filters/size";
import Regions from "../components/directory/filters/regions";

import GridSelector from "../public/images/directory/grid-selector.svg";
import ListSelector from "../public/images/directory/list-selector.svg";
import WebsiteIcon from "../public/images/directory/website-icon.svg";
import Plus from "../public/images/directory/plus.svg";
import Separator from "../public/images/directory/separator.svg";

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: this.props.agencies,
      layoutState: "grid",
      clickCount: 0,
      offset: 0,
      perPage: 8,
      currentPage: 0,
      previousClicked: "",
      clicked: "",
    };

    this.removeActiveClass = this.removeActiveClass.bind(this);
    this.filterActiveClass = this.filterActiveClass.bind(this);
    this.selectorActiveClass = this.selectorActiveClass.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  clickCount() {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });

    if (this.state.clickCount === 2) {
      this.setState({
        clickCount: 1,
      });
    }
  }

  // chevrons behavior
  selectorActiveClass(e) {
    const selector = e.target;
    const selectors = document.querySelectorAll(".filter");

    // remove classes
    selectors.forEach((item) => {
      if (item.classList.contains("selected")) {
        item.classList.remove("selected");
        item.classList.remove("remove");
      }

      // remove classes if same item clicked
      if (selector.classList.contains("selected")) {
        console.log("yes");
        selector.classList.remove("selected");
        selector.classList.remove("remove");
      }
    });

    // add classes
    selector.classList.add("selected");
    selector.classList.add("remove");
  }

  // filter container behavior
  filterActiveClass(e) {
    this.clickCount();
    this.setState({
      clicked: e.target.getAttribute("id"),
    });

    this.selectorActiveClass(e);
    const filters = document.querySelectorAll(".term-container");
    const selectors = document.querySelectorAll(".filter");
    this.setState((prevState) => ({
      previousClicked: prevState.clicked,
    }));
    // remove active class previously
    filters.forEach((filter) => {
      if (!filter.classList.contains("d-none")) {
        filter.classList.add("d-none");
      }
    });
    //add active class to new menu

    if (e.target.getAttribute("id") === selectors[0].getAttribute("id")) {
      filters[0].classList.toggle("d-none");
    } else if (
      e.target.getAttribute("id") === selectors[1].getAttribute("id")
    ) {
      filters[1].classList.toggle("d-none");
    } else if (
      e.target.getAttribute("id") === selectors[2].getAttribute("id")
    ) {
      filters[2].classList.toggle("d-none");
    }

    if (
      this.state.previousClicked === e.target.getAttribute("id") &&
      this.state.clickCount === 1
    ) {
      filters.forEach((filter) => {
        filter.classList.add("d-none");
      });
    }
  }

  resetFilters(e) {
    e.preventDefault();
    document.querySelectorAll(".check").forEach((item) => {
      if (item.classList.contains("active-filter")) {
        item.classList.remove("active-filter");
      }
    });
    this.setState({
      agencies: this.props.agencies,
    });
    this.formatData();
  }

  // layout active class behavior
  removeActiveClass(e) {
    let link = document.querySelector(".layout__active");
    if (link) {
      link.classList.remove("layout__active");
      e.target.classList.add("layout__active");
      this.layoutModifier();
    } else {
      return;
    }
  }

  // layout behavior
  layoutModifier() {
    let link = document.querySelectorAll(".grid-selector");
    if (link[0].classList.contains("layout__active")) {
      this.setState({
        layoutState: "grid",
      });
    } else {
      this.setState({
        layoutState: "list",
      });
    }
  }

  // pagination
  formatData() {
    const data = this.state.agencies;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const agencyCard = slice.map((agency, key) => (
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

    const agencyList = slice.map((agency, key) => (
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
      agencyCard,
      agencyList,
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

  // list toggle collapse
  toggleCollapse(e) {
    const toggler = document.querySelectorAll(".collapse-open");
    const collapse = document.querySelectorAll(".collapse");
    collapse.forEach((item) => {
      if (item.getAttribute("id") === e.target.getAttribute("data-toggler")) {
        item.classList.toggle("collapse-active");
      }
    });
  }

  callbackFunction = (childData) => {
    this.setState({ agencies: childData }, () => {
      console.log(this.state.agencies);
    });
    this.formatData();
  };

  componentDidMount() {
    this.formatData();
  }

  render() {
    return (
      <DirectoryLayout>
        <Head>
          <title>AddCulture Directory - Find an Agency Near You</title>
        </Head>
        <Hero />

        <div id="filter">
          <div className="filter-container container">
            <div className="filter-options">
              <div className="filter-options-container avant">
                <Search parentCallback={this.callbackFunction} />
                <div id="filters">
                  <p
                    id="industry-filter"
                    className="filter"
                    onClick={this.filterActiveClass}
                  >
                    INDUSTRY{" "}
                    <span>
                      <svg
                        style={{
                          position: "relative",
                          top: "5px",
                          left: "5px",
                        }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </p>
                  <p
                    id="agency-filter"
                    className="filter"
                    onClick={this.filterActiveClass}
                  >
                    AGENCY SIZE{" "}
                    <span>
                      <svg
                        style={{
                          position: "relative",
                          top: "5px",
                          left: "5px",
                        }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </p>
                  <p
                    id="region-filter"
                    className="filter"
                    onClick={this.filterActiveClass}
                  >
                    REGION{" "}
                    <span>
                      <svg
                        style={{
                          position: "relative",
                          top: "5px",
                          left: "5px",
                        }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                  </p>

                  <button onClick={this.resetFilters} type="reset">
                    Clear All{" "}
                    <svg
                      style={{ position: "relative", top: "5px", left: "5px" }}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99854 4.72705V10.1812H7.45272"
                        stroke="#CD4275"
                        strokeWidth="1.81831"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.9991 19.273V13.8188H16.5449"
                        stroke="#CD4275"
                        strokeWidth="1.81831"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.718 9.27311C19.2569 7.97009 18.4733 6.80511 17.4402 5.88688C16.407 4.96864 15.1582 4.32708 13.81 4.02205C12.4619 3.71702 11.0585 3.75847 9.73075 4.14253C8.40298 4.52658 7.19414 5.24073 6.21703 6.21834L1.99854 10.1823M22 13.8189L17.7815 17.7828C16.8044 18.7604 15.5956 19.4746 14.2678 19.8586C12.94 20.2427 11.5366 20.2841 10.1885 19.9791C8.84037 19.6741 7.59149 19.0325 6.55838 18.1143C5.52528 17.196 4.74162 16.0311 4.28052 14.7281"
                        stroke="#CD4275"
                        strokeWidth="1.81831"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="layout-selector-container">
              <div
                onClick={this.removeActiveClass}
                className="grid-selector layout__active"
              >
                <GridSelector style={{ pointerEvents: "none" }} />
              </div>
              <div className="grid-selector" onClick={this.removeActiveClass}>
                <ListSelector style={{ pointerEvents: "none" }} />
              </div>
            </div>
          </div>
        </div>

        <div id="industries-terms" className="term-container d-none">
          <div className="container">
            <Industries
              parentCallback={this.callbackFunction}
              industries={this.props.industries}
              agencies={this.props.agencies}
            />
          </div>

          <div className="container">
            <button className="done" onClick={this.filterActiveClass}>
              DONE
            </button>
          </div>
        </div>

        <div id="size-terms" className="term-container d-none">
          <div className="container">
            <Size
              parentCallback={this.callbackFunction}
              agencySize={this.props.size}
              agencies={this.props.agencies}
            />
          </div>
          <div className="container">
            <button className="done" onClick={this.filterActiveClass}>
              DONE
            </button>
          </div>
        </div>

        <div id="regions-terms" className="term-container d-none">
          <div className="container">
            <Regions
              parentCallback={this.callbackFunction}
              regions={this.props.regions}
              agencies={this.props.agencies}
            />
          </div>
          <div className="container">
            <button className="done" onClick={this.filterActiveClass}>
              DONE
            </button>
          </div>
        </div>

        <div id="agencies">
          {this.state.layoutState === "grid" ? (
            <Grid
              pageCount={this.state.pageCount}
              agency={this.state.agencyCard}
              handlePageClick={this.handlePageClick}
            />
          ) : (
            <List
              pageCount={this.state.pageCount}
              agency={this.state.agencyList}
              handlePageClick={this.handlePageClick}
            />
          )}
        </div>

        <AddCultureFooter />
        <style jsx>
          {`
            #filter {
              border-top: 1px solid #222220;
              border-bottom: 1px solid #222220;

              width: 100%;
            }
            #filter .filter-container {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: flex-start;
              width: 100%;
            }
            #filter .filter-container .filter-options {
              width: 100%;
            }
            #filter .filter-container .filter-options-container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              width: 100%;
            }

            #filter .filter-container .filter-options-container #filters {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
            }
            #filter .filter-container .filter-options-container #filters p {
              font-family: "ITC Avant Garde Pro Md";
              margin: 0 15px;
              color: #222220;
            }

            #filter .filter-container .filter-options-container #filters p svg {
              transition: all 0.6s cubic-bezier(0.85, 0, 0.15, 1);
            }

            #filter
              .filter-container
              .filter-options-container
              #filters
              p.selected
              svg {
              transform: rotate(180deg);
            }

            #filter
              .filter-container
              .filter-options-container
              #filters
              button {
              border: none;
              outline: none;
              text-transform: uppercase;
              font-family: "ITC Avant Garde Pro Md";
              font-weight: bold;
              color: #cd4275;
            }
            #filter .filter-container .layout-selector-container {
              width: 20%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }
            #filter .filter-container .layout-selector-container div {
              margin-right: 5%;
            }
          `}
        </style>
      </DirectoryLayout>
    );
  }
}

export async function getStaticProps() {
  const agencies = await fetch(
    "https://addculture.raxo.dev/wp-json/wp/v2/agencies_post"
  );
  const data = await agencies.json();

  const industries = await fetch(
    "https://addculture.raxo.dev/wp-json/wp/v2/industries"
  );
  const dataTwo = await industries.json();

  const regions = await fetch(
    "https://addculture.raxo.dev/wp-json/wp/v2/regions"
  );
  const dataThree = await regions.json();

  const size = await fetch(
    "https://addculture.raxo.dev/wp-json/wp/v2/agency_size"
  );
  const dataFour = await size.json();
  return {
    props: {
      agencies: data,
      industries: dataTwo,
      regions: dataThree,
      size: dataFour,
    },
  };
}
