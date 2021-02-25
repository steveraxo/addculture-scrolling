import React, { Component } from "react";
import axios from "axios";

export default class Size extends Component {
  constructor(props) {
    super(props);
    this.filterAgencies = this.filterAgencies.bind(this);
    this.activeClassFilter = this.activeClassFilter.bind(this);
  }

  activeClassFilter(e) {
    const filter = e.target;
    filter.classList.toggle('active-filter');
    filter.children[1].classList.toggle('d-none');
  }

  filterAgencies(e) {
    const term = e.target.getAttribute("id");
    this.activeClassFilter(e);
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

  sendData = (props) => {
    this.props.parentCallback(props);
  };

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
              className="filter-term industry"
            >
              {item.name} <span>({item.count})</span><svg className="check d-none" width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6.5L9 17.5L4 12.5" stroke="#CD4275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
