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
                  <p className="agency-region avant">
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

                  <a
                    className=" agency-link avant"
                    href={agency.acf.agency_website}
                  >
                    Visit website
                  </a>
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
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin: 5% auto;
              padding: 0 5% !important;
            }
            #agencies .agency-card {
              flex: 0 0 20em;
              border: 1px solid #222220;
              padding: 1%;
              margin: 20px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #agencies .agency-card .agency-image {
              max-width: 280px;
            }

            #agencies .agency-card .agency-region {
              color: #222220;
              opacity: 0.7;
              font-weight: bold;
            }

            #agencies .agency-card .agency-card-body {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            #agencies .agency-card .agency-card-body .agency-description {
              font-family: "Helvetica Neue", sans-serif;
              font-size: 16px;
              line-height: 19.09px;
              font-weight: 400;
              font-style: normal;
              color: #222220;
              opacity: 0.8;
            }

            #agencies .agency-card .agency-info {
              margin-top: auto;
              align-self: flex-start;
            }

            #agencies .agency-card .agency-info .agency-link {
              text-transform: uppercase;
              color: #cd4275;
              font-weight: bold;
            }

            @media (max-width: 4000px) {
              #agencies .agencies-container {
                max-width: 2800px;
              }
              #agencies .agency-card {
                flex: 0 0 28em;
              }

              #agencies .agency-card .agency-image {
                max-width: 450px;
              }
            }

            @media (max-width: 3000px) {
              #agencies .agencies-container {
                max-width: 2500px;
              }
              #agencies .agency-card {
                flex: 0 0 15em;
              }
            }

            @media (max-width: 2000px) {
              #agencies .agencies-container {
                max-width: 1800px;
              }
              #agencies .agency-card {
                width: 315px;
              }
              #agencies .agency-card .agency-image {
                max-width: 280px;
              }
            }

            @media (max-width: 1700px) {
              #agencies .agencies-container {
                max-width: 1500px;
              }

              #agencies .agency-card {
                width: 250px;
              }
              #agencies .agency-card .agency-image {
                max-width: 230px;
              }
            }
            @media (max-width: 1400px) {
              #agencies .agencies-container {
                max-width: 1400px;
              }
              #agencies .agency-card {
                width: 150px;
              }
              #agencies .agency-card .agency-image {
                max-width: 200px;
              }
            }

            @media (max-width: 1300px) {
              #agencies .agencies-container {
                max-width: 1300px;
              }

              #agencies .agency-card {
                width: 100px;
              }
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
