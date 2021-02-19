import React, { Component } from "react";
import axios from "axios";
import SearchIcon from "../../../public/images/directory/search.svg";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.searchResults = this.searchResults.bind(this);
  }
  searchResults(e) {
    const term = e.target.value;
    if (term.length > 3) {
      axios
        .get(
          `https://addculture.raxo.dev/wp-json/wp/v2/agencies_post?search=${term}`
        )
        .then(({ data }) => {
          console.log({ data });
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
    return (
      <>
        <div className="search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            name="search"
            id="search"
            className="searchInput avant"
            onChange={this.searchResults}
          />
        </div>

        <style jsx>{`
          .search {
            display: flex;
            box-sizing: border-box;
            background: #f4f4f4;
            width: 100%;
            padding: 5%;
          }

          .search .searchInput {
            outline: none;
            border: none;
            background: #f4f4f4;
            padding: 0 5%;
            width: 100%;
            text-transform: uppercase;
            font-weight: bold;
            color: #cd4275;
            opacity: 0.7;
          }
        `}</style>
      </>
    );
  }
}
