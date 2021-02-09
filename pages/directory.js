import React, { Component } from "react";
import Head from "next/head";
import DirectoryLayout from "../components/directory/layout";
import Hero from "../components/directory/hero";
import Search from "../public/images/directory/search.svg";
import ChevronDown from "../public/images/directory/chevron-down.svg";
import GridSelector from "../public/images/directory/grid-selector.svg";
import ListSelector from "../public/images/directory/list-selector.svg";

export default class Directory extends Component {
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
              <div>
                <GridSelector />
              </div>
              <div>
                <ListSelector />
              </div>
            </div>
          </div>
        </div>

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

            #filter .filter-container .layout-selector-container {
              width: 100%;
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
