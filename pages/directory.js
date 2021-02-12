import React, { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import DirectoryLayout from "../components/directory/layout";
import Hero from "../components/directory/hero";
import Grid from "../components/directory/agencies/grid";
import List from "../components/directory/agencies/list";

import Search from "../public/images/directory/search.svg";
import ChevronDown from "../public/images/directory/chevron-down.svg";
import GridSelector from "../public/images/directory/grid-selector.svg";
import ListSelector from "../public/images/directory/list-selector.svg";

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: this.props.agencies,
      layout: <Grid agencies={this.props.agencies} />,
    };

    this.removeActiveClass = this.removeActiveClass.bind(this);
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
        layout: <Grid agencies={this.state.agencies} />,
      });
    } else {
      this.setState({
        layout: <List agencies={this.state.agencies} />,
      });
    }
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
                <Search />
                <p>
                  INDUSTRY{" "}
                  <span>
                    <ChevronDown />
                  </span>
                </p>
                <p>
                  AGENCY SIZE{" "}
                  <span>
                    <ChevronDown />
                  </span>
                </p>
                <p>
                  REGION{" "}
                  <span>
                    <ChevronDown />
                  </span>
                </p>
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

        <div id="agencies">{this.state.layout}</div>
        <style jsx>
          {`
            #filter {
              border-top: 2px solid #222220;
              border-bottom: 2px solid #222220;
              padding: 1.5% 0;
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

            .layout__active svg path {
              stroke: #000;
            }
          `}
        </style>
      </DirectoryLayout>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch(
    "https://addculture.raxo.dev/wp-json/wp/v2/agencies_post"
  );
  const data = await res.json();

  return {
    props: {
      agencies: data,
    },
  };
}
