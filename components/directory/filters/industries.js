import React, { Component } from "react";

export default class Industries extends Component {
  render() {
    const industries = this.props.industries;
    return (
      <>
        <h3 className="industry-terms">Filter by Industry</h3>
        <div className="industries-wrapper">
          {industries.map((industry, key) => (
            <p key={key} id={industry.slug} className="industry">
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
