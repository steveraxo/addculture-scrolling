import React, { Component } from "react";
import axios from "axios";

export default class Regions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parents: [],
      children: [],
    };

    this.filterAgencies = this.filterAgencies.bind(this);
    this.activeClassFilter = this.activeClassFilter.bind(this);
  }

  activeClassFilter(e) {
    const filter = e.target;
    filter.classList.toggle('active-filter');
    filter.children[1].classList.toggle('d-none');
  }

  filterRegions() {
    const regions = this.props.regions;
    const parents = [];
    const children = [];

    regions.forEach((region) => {
      if (region.parent === 0) {
        parents.push(region);
      } else {
        children.push(region);
      }
    });
    this.setState({
      parents,
      children,
    });
  }

  filterAgencies(e) {
    const term = e.target.getAttribute("id");
    this.activeClassFilter(e);
    axios
      .get(
        `https://addculture.raxo.dev/wp-json/wp/v2/agencies_post?regions=${term}`
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

  componentDidMount() {
    this.filterRegions();
  }
  render() {
    const { parents, children } = this.state;
    return (
      <>
        <h3 className="regions-terms">Filter by Region</h3>
        <div id="alphabet">
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
          <p>E</p>
          <p>F</p>
          <p>G</p>
          <p>H</p>
          <p>I</p>
          <p>J</p>
          <p>K</p>
          <p>L</p>
          <p>M</p>
          <p>N</p>
          <p>O</p>
          <p>P</p>
          <p>Q</p>
          <p>R</p>
          <p>S</p>
          <p>T</p>
          <p>U</p>
          <p>V</p>
          <p>W</p>
          <p>X</p>
          <p>Y</p>
          <p>Z</p>
        </div>
        <div className="regions-wrapper">
          {parents.map((parent) => (
            <div className="region-container">
              <h4 key={parent.id} id={parent.slug} className="parent">
                {parent.name}
              </h4>
              <div className="children">
                {children.map((child) =>
                  child.parent === parent.id ? (
                    <p
                      onClick={this.filterAgencies}
                      key={child.id}
                      id={child.id}
                      className="filter-term child"
                    >
                      {child.name} <span>({child.count})</span><svg className="check d-none" width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6.5L9 17.5L4 12.5" stroke="#CD4275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </p>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .regions-wrapper {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
          }

          #alphabet {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
          }

          #alphabet p {
            font-weight: bold;
            opacity: 0.7;
            margin-right: 20px;
            color: #222220;
            font-family: "HelveticaNeue", sans-serif;
          }
          .regions-wrapper p {
            margin-right: 10px;
            padding: 10px;
            color: #222220;
            border: 1px solid rgba(0, 0, 0, 0.5);
          }

          .regions-wrapper p > span {
            opacity: 0.5;
          }

          .regions-wrapper .region-container .children {
            display: flex;
            align-items: flex-start;
          }

          .regions-wrapper .region-container .children p {
            margin-top: 0;
          }
        `}</style>
      </>
    );
  }
}
