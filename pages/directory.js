import React, { Component } from "react";

import Head from "next/head";

import DirectoryLayout from "../components/directory/layout";
import Hero from "../components/directory/hero";
import Grid from "../components/directory/agencies/grid";
import List from "../components/directory/agencies/list";
import Industries from "../components/directory/filters/industries";
import Regions from "../components/directory/filters/regions";

import Search from "../public/images/directory/search.svg";
import ChevronDown from "../public/images/directory/chevron-down.svg";
import GridSelector from "../public/images/directory/grid-selector.svg";
import ListSelector from "../public/images/directory/list-selector.svg";

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: this.props.agencies,
      filteredAgencies: this.props.agencies,
      layoutState: "grid",
      layout: <Grid agencies={this.props.agencies} />,
      filter: (
        <Industries
          parentCallback={this.callbackFunction}
          industries={this.props.industries}
        />
      ),
      childData: [],
    };

    this.removeActiveClass = this.removeActiveClass.bind(this);
    this.filterActiveClass = this.filterActiveClass.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  filterActiveClass(e) {
    const filter = document.getElementById("filter-terms");
    filter.classList.toggle("filter-active");
    this.filterModifier(e);
  }

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

  filterModifier(e) {
    const industry = document
      .getElementById("industry-filter")
      .getAttribute("id");
    const region = document.getElementById("region-filter").getAttribute("id");
    const agency = document.getElementById("agency-filter").getAttribute("id");
    const click = e.target.getAttribute("id");
    if (click === industry) {
      this.setState({
        filter: (
          <Industries
            parentCallback={this.callbackFunction}
            agencies={this.props.agencies}
            industries={this.props.industries}
          />
        ),
      });
    } else if (click === region) {
      this.setState({
        filter: (
          <Regions
            parentCallback={this.callbackFunction}
            agencies={this.props.agencies}
            regions={this.props.regions}
          />
        ),
      });
    }
  }

  resetFilters(e) {
    e.preventDefault();

    this.setState({
      layout: <Grid agencies={this.props.agencies} />,
    });
  }

  callbackFunction = (childData) => {
    this.setState({ agencies: childData }, () => {
      console.log(this.state.agencies);
    });
  };

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
                <div className="search">
                  <input type="text" name="search" id="" />
                  <Search />
                </div>

                <p
                  id="industry-filter"
                  className="filter"
                  onClick={this.filterActiveClass}
                >
                  INDUSTRY{" "}
                  <span>
                    <ChevronDown />
                  </span>
                </p>
                <p
                  id="agency-filter"
                  className="filter"
                  onClick={this.filterActiveClass}
                >
                  AGENCY SIZE{" "}
                  <span>
                    <ChevronDown />
                  </span>
                </p>
                <p
                  id="region-filter"
                  className="filter"
                  onClick={this.filterActiveClass}
                >
                  REGION{" "}
                  <span>
                    <ChevronDown />
                  </span>
                </p>

                <button onClick={this.resetFilters} type="reset">
                  Reset
                </button>
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
        <div id="filter-terms">
          <div className="container">{this.state.filter}</div>

          <div className="container">
            <button className="done">DONE</button>
          </div>
        </div>

        <div id="agencies">
          {this.state.layoutState === "grid" ? (
            <Grid agencies={this.state.agencies} />
          ) : (
            <List agencies={this.state.agencies} />
          )}
        </div>
        <style jsx>
          {`
            #filter {
              border-top: 1px solid #222220;
              border-bottom: 1px solid #222220;
              padding: 0.5% 0;
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
            #filter .filter-container .filter-options-container p {
              font-weight: 300;
            }
            #filter .filter-container .layout-selector-container {
              width: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }
            #filter .filter-container .layout-selector-container div {
              margin-right: 5%;
            }

            #filter-terms {
              position: absolute;
              width: 100%;
              z-index: 10;
              background-color: #f4f4f4;
              padding: 30px 25px;
              display: none;
              flex-direction: column;
              justify-content: space-between;
            }

            #filter-terms .done {
              padding: 15px 80px;
              background: #cd4275;
              border: none;
              outline: none;
              color: white;
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

  return {
    props: {
      agencies: data,
      industries: dataTwo,
      regions: dataThree,
    },
  };
}
