import React, { Component } from "react";
import WebsiteIcon from "../../../public/images/directory/website-icon.svg";

export default class Grid extends Component {
  render() {
    const { agencies } = this.props;
    return (
      <>
        <div className="container agencies-container">
          {agencies.map((agency, key) => (
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
                  Visit website{" "}
                  <span>
                    <WebsiteIcon />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .agencies-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 5% auto;
            padding: 0 5% !important;
          }
          .agency-card {
            flex: 0 0 20em;
            border: 1px solid #222220;
            padding: 1%;
            margin: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .agency-card .agency-image {
            max-width: 280px;
            position: relative;
            width: 100vw;
          }

          .agency-card .agency-region {
            color: #222220;
            opacity: 0.7;
            font-weight: bold;
          }

          .agency-card .agency-card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .agency-card .agency-card-body .agency-description {
            font-family: "Helvetica Neue", sans-serif;
            font-size: 16px;
            line-height: 19.09px;
            font-weight: 400;
            font-style: normal;
            color: #222220;
            opacity: 0.8;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .agency-card .agency-info {
            margin-top: auto;
            align-self: flex-start;
            width: 100%;
          }

          .agency-card .agency-info p {
            font-family: "HelveticaNeue", sans-serif;
            font-weight: bold;
            color: #222220;
            font-style: normal;
            font-size: 16px;
            line-height: 22px;
            opacity: 0.8;
          }

          .agency-card .agency-info p > span {
            font-weight: 400;
            margin-left: 15%;
          }

          .agency-card .agency-info .agency-link {
            text-transform: uppercase;
            color: #cd4275;
            font-weight: bold;
            text-decoration: underline;
          }

          @media (max-width: 4000px) {
            .agencies-container {
              max-width: 2800px;
            }
            .agency-card {
              flex: 0 0 28em;
            }

            .agency-card .agency-image {
              max-width: 450px;
            }
          }

          @media (max-width: 3000px) {
            .agencies-container {
              max-width: 2500px;
            }
            .agency-card {
              flex: 0 0 15em;
            }
          }

          @media (max-width: 2000px) {
            .agencies-container {
              max-width: 1800px;
            }
            .agency-card {
              width: 315px;
            }
            .agency-card .agency-image {
              max-width: 280px;
            }
          }

          @media (max-width: 1700px) {
            .agencies-container {
              max-width: 1500px;
            }

            .agency-card {
              width: 250px;
            }
            .agency-card .agency-image {
              max-width: 230px;
            }
          }
          @media (max-width: 1400px) {
            .agencies-container {
              max-width: 1400px;
            }
            .agency-card {
              width: 150px;
            }
            .agency-card .agency-image {
              max-width: 220px;
            }
          }

          @media (max-width: 1300px) {
            .agencies-container {
              max-width: 1300px;
            }

            .agency-card {
              width: 100px;
            }
          }
        `}</style>
      </>
    );
  }
}
