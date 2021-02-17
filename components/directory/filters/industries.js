import React, { Component } from "react";

export default class Industries extends Component {
  constructor(props) {
    super(props);
    this.filterAgencies = this.filterAgencies.bind(this);
  }
  filterAgencies(e) {
    const originalArray = this.props.agencies;
    const term = e.target.getAttribute("id");
    console.log(term);
    const result = originalArray.filter(
      (agency) => agency.industries[0].slug === term
    );
    console.log(result);
  }
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
              id={industry.slug}
              className="industry"
            >
              {industry.name} <span>({industry.count})</span>
            </p>
          ))}
        </div>
        <style jsx>{`
          .industries-wrapper {
            display: flex;
            flex-wrap: wrap;
          }

          .industries-wrapper p {
            margin-right: 10px;
            padding: 10px;
            color: #222220;
            border: 1px solid rgba(0, 0, 0, 0.5);
          }

          .industries-wrapper p > span {
            opacity: 0.5;
          }
        `}</style>
      </>
    );
  }
}
