import React, { Component } from "react";
import axios from "axios";
import SearchIcon from "../../../public/images/directory/search.svg";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.showInput = this.showInput.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }
  showInput() {
    const showDiv = document.querySelector(".search");
    const showInput = document.querySelector(".searchInput");
    showDiv.classList.toggle("active-search");
    showInput.classList.toggle("active-search");
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
        <svg
          className="search-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.showInput}
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#222220"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.9999 20.9999L16.6499 16.6499"
            stroke="#222220"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </svg>

        <div className="search">
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
          svg.search-icon {
            position: absolute;
          }
          .search {
            display: flex;
            box-sizing: border-box;
            width: 0;
            padding: 5%;
            transition: all 0.6s cubic-bezier(0.85, 0, 0.15, 1);
          }

          .search .searchInput {
            outline: none;
            border: none;
            padding: 0 5%;
            width: 0;
            text-transform: uppercase;
            font-weight: bold;
            color: #cd4275;
            opacity: 0.7;
            transition: all 0.6s cubic-bezier(0.85, 0, 0.15, 1);
          }

          .search.active-search {
            background: #f4f4f4;
            width: 100%;
          }

          .searchInput.active-search {
            background: #f4f4f4;
            width: 100%;
          }
        `}</style>
      </>
    );
  }
}
