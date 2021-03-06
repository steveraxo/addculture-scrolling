import React, { Component } from "react";
import axios from "axios";

export default class Industries extends Component {
  constructor(props) {
    super(props);
    this.filterAgencies = this.filterAgencies.bind(this);
    this.activeClassFilter = this.activeClassFilter.bind(this);
  }

  activeClassFilter(e) {
    const filter = e.target;
    filter.classList.toggle("active-filter");
    filter.children[1].classList.toggle("d-none");
    const newWidth = filter.offsetWidth + 20 + "px";
    filter.style.width = newWidth;
  }

  filterAgencies(e) {
    const filter = e.target;
    const term = e.target.getAttribute("id");
    this.activeClassFilter(e);
    if (filter.classList.contains("active-filter")) {
      axios
        .get(
          `https://addculture.raxo.dev/wp-json/wp/v2/agencies_post?industries=${term}`
        )
        .then(({ data }) => {
          this.sendData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://addculture.raxo.dev/wp-json/wp/v2/agencies_post`)
        .then(({ data }) => {
          this.sendData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  sendData = (props) => {
    this.props.parentCallback(props);
  };

  render() {
    const { industries } = this.props;
    return (
      <>
        <h3 className="industry-terms">Filter by Industry</h3>
        <div className="industries-wrapper">
          {industries.map((industry, key) => (
            <p
              onClick={this.filterAgencies}
              key={key}
              id={industry.id}
              className="filter-term industry"
            >
              {industry.name}{" "}
              <span style={{ pointerEvents: "none" }}>({industry.count})</span>
              <svg
                style={{ position: "absolute" }}
                className="check d-none"
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6.5L9 17.5L4 12.5"
                  stroke="#CD4275"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          ))}
        </div>
        <style jsx>{`
          .industries-wrapper {
            display: flex;
            flex-wrap: wrap;
          }

          .industries-wrapper p {
            position: relative;
            margin-right: 10px;
            padding: 10px;
            color: #222220;
            border: 1px solid rgba(0, 0, 0, 0.5);
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
          }

          .industries-wrapper p > span {
            opacity: 0.5;
          }
        `}</style>
      </>
    );
  }
}
