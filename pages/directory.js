import React, { Component } from "react";
import Head from "next/head";
import DirectoryLayout from "../components/directory/layout";
import Hero from "../components/directory/hero";
import Search from "../public/images/directory/search.svg";
import ChevronDown from "../public/images/directory/chevron-down.svg";
import GridSelector from "../public/images/directory/grid-selector.svg";
import ListSelector from "../public/images/directory/list-selector.svg";

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencies: this.props.agencies,
    };
  }

  componentDidMount() {
    console.log(this.state.agencies);
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
              <div>
                <GridSelector />
              </div>
              <div>
                <ListSelector />
              </div>
            </div>
          </div>
        </div>

        <div id="agencies">
          <div className="container agencies-container">
            {this.state.agencies.map((agency, key) => (
              <div key={key} className="agency-card">
                <div className="agency-card-head">
                  <img
                    className="agency-image"
                    src={agency.acf.agency_image.url}
                    alt={agency.acf.agency_name}
                  />
                  <h2 className="agency-name">{agency.acf.agency_name}</h2>
                  <p className="agency-region">
                    {agency.regions[0].name}, {agency.regions[1].name}
                  </p>
                </div>
                <div className="agency-card-body">
                  <p className="agency-description">
                    {agency.acf.agency_description}
                  </p>
                </div>

                <div className="agency-info">
                  <p>
                    Clients <span>{agency.acf.clients}</span>
                  </p>
                  <p>
                    Industry <span>{agency.industries[0].name}</span>
                  </p>

                  <a href={agency.acf.agency_website}>Visit website</a>
                </div>
              </div>
            ))}
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
            #agencies .agencies-container {
              margin: 5% auto;
              display: flex;
              flex-wrap: wrap;
            }
            #agencies .agency-card {
              flex: 0 0 20em;
              border: 1px solid #222220;
              padding: 2%;
              margin: 20px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #agencies .agency-card .agency-image {
              max-width: 280px;
            }

            #agencies .agency-card .agency-card-body {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            #agencies .agency-card .agency-info {
              margin-top: auto;
              align-self: flex-start;
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
