import React, { Component } from "react";
import Plus from "../../../public/images/directory/plus.svg";
import Separator from "../../../public/images/directory/separator.svg";
import WebsiteIcon from "../../../public/images/directory/website-icon.svg";

export default class List extends Component {
  constructor(props) {
    super(props);
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
  render() {
    const { agencies } = this.props;

    return (
      <>
        <div className="agencies-list container">
          {agencies.map((agency, key) => (
            <React.Fragment key={key}>
              <div className="agency-card">
                <div className="agency-card-head">
                  <img
                    src={agency.acf.agency_image.url}
                    alt={agency.acf.agency_name}
                  />
                </div>
                <div className="agency-card-body">
                  <div className="agency-title-location">
                    <h1 className="agency-name">{agency.acf.agency_name}</h1>
                    <p className="agency-location avant">
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
                <div className="agency-details">
                  <p className="agency-description">
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
            </React.Fragment>
          ))}
        </div>

        <style jsx>{`
          .agency-card {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            height: 12vh;
            margin: 2.5% auto;
            border: 1px solid #222220;
          }
          .agency-card-head img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          .agency-card-body {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            padding-left: 30px;
            padding-right: 30px;
            width: 100%;
          }
          .agency-card-body .agency-name {
            font-family: "HelveticaNeue";
            font-weight: 700;
            color: #222220;
            font-size: 28px;
            line-height: 25px;
          }
          .agency-card-body .agency-location {
            font-weight: bold;
            color: #222220;
            opacity: 0.7;
          }

          .collapse {
            display: none;
            border-bottom: 1px solid #000;
            border-left: 1px solid #000;
            border-right: 1px solid #000;
            padding: 18px;
            margin-top: -2.5%;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.2s ease-out;
          }

          .collapse .left {
            max-width: 235px;
            width: 100%;
            text-align: right;
          }

          .collapse .agency-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 30px;
            width: 70%;
          }

          .collapse .agency-details .agency-description {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .collapse .agency-details .clients-industry {
            padding-top: 3%;
          }
          .collapse .agency-details .clients-industry p {
            font-weight: 700;
            color: #222220;
            opacity: 0.7;
            line-height: 10px;
            font-family: "HelveticaNeue", sans-serif;
          }

          .collapse .agency-details .clients-industry p > span {
            font-weight: 400;
            margin-left: 5%;
          }

          .collapse .agency-details .agency-link {
            margin-top: auto;
            text-transform: uppercase;
            text-decoration: underline;
            font-weight: bold;
            color: #cd4275;
          }

          @media (max-width: 4000px) {
            .agency-card {
              height: 5vh;
            }
          }
          @media (max-width: 3000px) {
            .agency-card {
              height: 8vh;
            }
          }

          @media (max-width: 2000px) {
            .agency-card {
              height: 10vh;
            }
          }

          @media (max-width: 1700px) {
            .agency-card {
              height: 12vh;
            }
          }
        `}</style>
      </>
    );
  }
}
