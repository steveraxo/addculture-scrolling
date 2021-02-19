import React, { Component } from "react";
import axios from "axios";

export default class Size extends Component {
  constructor(props) {
    super(props);
    this.filterAgencies = this.filterAgencies.bind(this);
  }

  filterAgencies(e) {
    const term = e.target.getAttribute("id");

    axios
      .get(
        `https://addculture.raxo.dev/wp-json/wp/v2/agencies_post?agency_size=${term}`
      )
      .then(({ data }) => {
        this.sendData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { agencySize } = this.props;
    return (
      <>
        <h3 className="industry-terms">Filter by Agency Size</h3>
        <div className="industries-wrapper">
          {agencySize.map((item, key) => (
            <p
              onClick={this.filterAgencies}
              key={key}
              id={item.id}
              className="industry"
            >
              {item.name} <span>({item.count})</span>
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
