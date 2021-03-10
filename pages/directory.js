import React, { Component } from "react";
import Head from "next/head";

import DirectoryLayout from "../components/directory/layout";
import Hero from "../components/directory/hero";
import AddCultureFooter from "../components/directory/footer";

import Loading from "../components/directory/loader";

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
      loading: false,
      menu: "",
      previousMenu: "",
    };

    this.removeActiveClass = this.removeActiveClass.bind(this);
    this.filterActiveClass = this.filterActiveClass.bind(this);
    this.selectorActiveClass = this.selectorActiveClass.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText(e) {
    const description = document.querySelectorAll(".agency-description");
    description.forEach((text) => {
      if (e.target.getAttribute("class") === text.getAttribute("id")) {
        text.classList.toggle("description-active");
      }
    });
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

    this.setState({
      menu: selector.getAttribute("id"),
    });

    selectors.forEach((item) => {
      item.classList.remove("selected");
    });

    selector.classList.add("selected");

    this.setState((prevState) => ({
      previousMenu: prevState.menu,
    }));

    if (
      selector.getAttribute("id") === this.state.previousMenu &&
      this.state.clickCount === 1
    ) {
      selector.classList.remove("selected");
    }
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
    this.setState({
      loading: true,
    });
    e.preventDefault();
    document.querySelectorAll(".filter-term").forEach((item) => {
      if (item.classList.contains("active-filter")) {
        item.classList.remove("active-filter");
        item.children[1].classList.add("d-none");
        item.style.width = "initial";
      }
    });

    document.querySelectorAll("#alphabet p").forEach((letter) => {
      letter.classList.remove("letter-active");
    });
    this.setState(
      {
        agencies: this.props.agencies,
        regions: this.props.regions,
      },
      () => {
        this.formatData();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      }
    );
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
    let agencyCard = "";
    let agencyList = "";

    if (data.length === 0) {
      agencyCard = (
        <h1 className="text-center">We couldn't find any results</h1>
      );
      agencyList = (
        <h1 className="text-center">We couldn't find any results</h1>
      );
    } else {
      agencyCard = slice.map((agency, key) => (
        <div key={key} className="agency-card">
          <div className="agency-card-head">
            <img
              className="agency-image"
              src={agency.acf.agency_image.url}
              alt={agency.acf.agency_name}
            />
          </div>
          <div className="agency-card-body">
            <div className="name-region">
              <h2 className="agency-name">{agency.acf.agency_name}</h2>
              <p className="agency-region avant">
                {agency.regions[0].name}, {agency.regions[1].name}
              </p>
            </div>
            <p className="agency-description" id={`description-${key}`}>
              {agency.acf.agency_description}
            </p>
            <span className={`description-${key}`} onClick={this.toggleText}>
              See More
            </span>
          </div>

          <div className="agency-info">
            <p>
              Industry <span>{agency.industries[0].name}</span>
            </p>
            <a
              className=" agency-link avant"
              target="_blank"
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
      ));

      agencyList = slice.map((agency, key) => (
        <React.Fragment key={key}>
          <div
            className="agency-list"
            onClick={this.toggleCollapse}
            data-toggler={`collapse-${key}`}
          >
            <div className="agency-list-head" style={{ pointerEvents: "none" }}>
              <img
                src={agency.acf.agency_image.url}
                alt={agency.acf.agency_name}
              />
            </div>
            <div className="agency-list-body" style={{ pointerEvents: "none" }}>
              <div className="agency-list-title-location">
                <h1 className="agency-name">{agency.acf.agency_name}</h1>
                <p className="agency-list-location avant">
                  {agency.regions[0].name}, {agency.regions[1].name}
                </p>
              </div>
              <div className="collapse-open" style={{ pointerEvents: "none" }}>
                <Plus style={{ pointerEvents: "none" }} />
              </div>
            </div>
          </div>
          <div className="collapse" id={`collapse-${key}`}>
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
                target="_blank"
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
    }

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

  loadingFunction = (loadingData) => {
    this.setState({ loading: loadingData });
  };

  callbackFunction = (childData) => {
    this.loadingFunction();
    // update agencies
    this.setState({ agencies: childData });
    this.formatData();
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
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
          <div className="filter-container">
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
                          zIndex: "10",
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
                          zIndex: "10",
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
                          zIndex: "10",
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

                  <button onClick={this.resetFilters} type="reset" id="reset">
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
          <div className="filters-container">
            <Industries
              loadingCallback={this.loadingFunction}
              parentCallback={this.callbackFunction}
              industries={this.props.industries}
              agencies={this.props.agencies}
              loading={this.state.loading}
            />

            <button className="done" onClick={this.filterActiveClass}>
              DONE
            </button>
          </div>
        </div>

        <div id="size-terms" className="term-container d-none">
          <div className="filters-container">
            <Size
              loadingCallback={this.loadingFunction}
              parentCallback={this.callbackFunction}
              agencySize={this.props.size}
              agencies={this.props.agencies}
              loading={this.state.loading}
            />
            <button className="done" onClick={this.filterActiveClass}>
              DONE
            </button>
          </div>
        </div>

        <div id="regions-terms" className="term-container d-none">
          <div className="filters-container">
            <Regions
              loadingCallback={this.loadingFunction}
              parentCallback={this.callbackFunction}
              regions={this.props.regions}
              agencies={this.props.agencies}
              loading={this.state.loading}
            />

            <button className="done" onClick={this.filterActiveClass}>
              DONE
            </button>
          </div>
        </div>

        <div id="agencies">
          {this.state.loading === false ? (
            this.state.layoutState === "grid" ? (
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
            )
          ) : (
            <Loading />
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
              padding-left: 10%;
              padding-right: 10%;
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

            #filter
              .filter-container
              .filter-options-container
              #filters
              p
              > span {
              pointer-events: none;
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

            #filter
              .filter-container
              .filter-options-container
              #filters
              button
              svg {
              pointer-events: none;
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

            @media (max-width: 4000px) {
              #filter .filter-container {
                padding: 0 28%;
              }
            }

            @media (max-width: 3000px) {
              #filter .filter-container {
                padding: 0 25%;
              }
            }

            @media (max-width: 2600px) {
              #filter .filter-container {
                padding: 0 20%;
              }
            }

            @media (max-width: 2000px) {
              #filter .filter-container {
                padding: 0 16.5%;
              }
            }

            @media (max-width: 1700px) {
              #filter .filter-container {
                padding: 0 13%;
              }

              #filter .filter-container .layout-selector-container {
                width: 10%;
              }

              .search.active-search {
                width: 80%;
              }
            }

            @media (max-width: 1500px) {
              #filter .filter-container {
                padding: 0 13.5%;
              }
            }

            @media (max-width: 1400px) {
              #filter .filter-container {
                padding: 0 15%;
              }

              #filter .filter-container .filter-options-container #filters p {
                margin: 0 10px;
                font-size: 14px;
              }
            }

            @media (max-width: 1300px) {
              #filter .filter-container {
                padding: 0 13.5%;
              }
            }

            @media (max-width: 1024px) {
              #filter .filter-container {
                padding: 0 9%;
              }
            }

            @media (max-width: 600px) {
              #filter {
                padding: 5% 0;
              }
              #filter .filter-container {
                flex-direction: column;
              }

              #filter .filter-container .filter-options-container {
                flex-direction: column;
              }

              #filter .filter-container .filter-options-container #filters p {
                font-size: 12px;
              }

              #filter .filter-container .layout-selector-container {
                width: 100%;
                margin: 5% auto;
                justify-content: space-evenly;
              }

              #filter .filter-container .layout-selector-container div {
                margin-right: initial;
              }
            }

            @media (max-width: 480px) {
              #filter .filter-container {
                padding: 0 2%;
              }

              #filter .filter-container .filter-options-container #filters {
                justify-content: center;
              }
              #filter .filter-container .filter-options-container #filters p {
                font-size: 9px;
              }

              #filter
                .filter-container
                .filter-options-container
                #filters
                p
                svg {
                width: 16px;
                height: 16px;
              }

              #filter
                .filter-container
                .filter-options-container
                #filters
                button {
                font-size: 9px;
              }
              #filter
                .filter-container
                .filter-options-container
                #filters
                button
                svg {
                width: 16px;
                height: 16px;
              }
            }

            @media (max-width: 400px) {
              #filter .filter-container {
                padding: 0 3%;
              }
              #filter .filter-container .filter-options-container #filters {
                flex-direction: column;
                align-items: flex-start;
              }

              #filter .filter-container .filter-options-container #filters p {
                font-size: 15px;
                margin-bottom: 10px;
                margin-top: 10px;
                width: 100%;
                position: relative;
              }

              #filter
                .filter-container
                .filter-options-container
                #filters
                p
                > span {
                position: absolute;
                top: -10px;
                bottom: 0;
                right: 25px;
                margin: 0 auto;
              }

              #filter
                .filter-container
                .filter-options-container
                #filters
                p
                svg {
                width: 22px;
                height: 22px;
              }

              #filter
                .filter-container
                .filter-options-container
                #filters
                button {
                font-size: 15px;
                margin-left: 2px;
                margin-top: 15px;
                margin-bottom: 10px;
              }
              #filter
                .filter-container
                .filter-options-container
                #filters
                button
                svg {
                width: 18px;
                height: 18px;
              }
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
