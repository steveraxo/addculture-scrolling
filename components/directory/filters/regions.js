import React, { Component } from "react";
import axios from "axios";

export default class Regions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: this.props.regions,
      parents: [],
      children: [],
      alpha: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };

    this.filterAgencies = this.filterAgencies.bind(this);
    this.activeClassFilter = this.activeClassFilter.bind(this);
    this.alphaFilter = this.alphaFilter.bind(this);
  }

  activeClassFilter(e) {
    const filter = e.target;
    filter.classList.toggle("active-filter");
    filter.children[1].classList.toggle("d-none");
  }

  filterRegions() {
    const regions = this.state.regions;
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

  alphaFilter(e) {
    const letters = document.querySelectorAll("#alphabet p");
    const regions = this.props.regions;
    const term = e.target;
    let filtered = [];

    // toggle active class for letter
    letters.forEach((letter) => {
      if (letter.getAttribute("id") === term.getAttribute("id")) {
        letter.classList.toggle("letter-active");
      }
      // filter based on clicked letter
      if (letter.classList.contains("letter-active")) {
        regions.forEach((region) => {
          if (region.parent === 0 && region.name[0] === term.textContent) {
            this.setState({ regions: filtered });
            // filter regions again
            this.filterRegions();
          }
        });
      } else {
        this.setState({
          regions: this.props.regions,
        });
        // filter regions again
        this.filterRegions();
      }
    });
  }

  filterAgencies(e) {
    const filter = e.target;
    const term = e.target.getAttribute("id");
    this.activeClassFilter(e);
    if (filter.classList.contains("active-filter")) {
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

  componentDidMount() {
    this.filterRegions();
  }
  render() {
    const { parents, children } = this.state;
    return (
      <>
        <h3 className="regions-terms">Filter by Region</h3>
        <div id="alphabet">
          {this.state.alpha.map((letter, key) => (
            <p id={`letter-${key}`} onClick={this.alphaFilter} key={key}>
              {letter}
            </p>
          ))}
        </div>
        <div className="regions-wrapper">
          {parents.map((parent) => (
            <div className="region-container">
              <h4 key={parent.id} id={parent.slug} className="parent">
                {parent.name}
              </h4>
              <div className="children">
                {children.map((child) =>
                  child.parent === parent.id && child.count !== 0 ? (
                    <p
                      onClick={this.filterAgencies}
                      key={child.id}
                      id={child.id}
                      className="filter-term child"
                    >
                      {child.name}{" "}
                      <span style={{ pointerEvents: "none" }}>
                        ({child.count})
                      </span>
                      <svg
                        className="check d-none"
                        style={{
                          position: "relative",
                          top: "5px",
                          left: "5px",
                        }}
                        width="20"
                        height="17"
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
            position: relative;
            padding: 10px;
            color: #222220;
            border: 1px solid rgba(0, 0, 0, 0.5);
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Standard */
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
