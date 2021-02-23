import React, { Component } from "react";
import loadable from "@loadable/component";
const MouseTooltip = loadable(() => import("react-sticky-mouse-tooltip"));
import Link from "next/link";
import LogoSvg from "../../../public/images/logo/logo.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuMouseTooltipVisible: false,
    };
    this.showTooltipMenu = this.showTooltipMenu.bind(this);
    this.hideTooltipMenu = this.hideTooltipMenu.bind(this);
  }

  showTooltipMenu(event) {
    const tooltip = document.getElementById(
      `${event.target.id}-menu-container`
    );
    tooltip.classList.add("show");
    this.setState((prevState) => ({
      isMenuMouseTooltipVisible: !prevState.isMenuMouseTooltipVisible,
    }));
  }

  hideTooltipMenu(event) {
    const tooltip = document.getElementById(
      `${event.target.id}-menu-container`
    );
    tooltip.classList.remove("show");
    this.setState((prevState) => ({
      isMenuMouseTooltipVisible: !prevState.isMenuMouseTooltipVisible,
    }));
  }

  toggleMenu(event) {
    if (event.target.classList.contains("show")) {
      document.querySelector(".categoriesNavMenu").style.display = "none";
      document.getElementById("categoriesMenu").classList.remove("show");
      document.getElementById("toggleClose").classList.remove("show");
    } else {
      document.querySelector(".categoriesNavMenu").style.display = "flex";
      document.getElementById("categoriesMenu").classList.add("show");
      document.querySelector(".categoriesNavMenu").classList.add("show");
      document.getElementById("toggleClose").classList.add("show");
    }
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navContent container-fluid">
            <div className="navbarMenuBurger" onClick={this.toggleMenu}>
              <div className="menuBurger">
                <div
                  data-aos="fade-right"
                  data-duration="4000"
                  className="menuBurgerLineOne"
                  style={{ width: "38px" }}
                ></div>
                <div
                  data-aos="fade-right"
                  data-duration="4300"
                  className="menuBurgerLineTwo"
                  style={{ width: "29px" }}
                ></div>
              </div>
            </div>
            <a className="brand__logo" href="/">
              <LogoSvg className="brand__logo" />
            </a>
          </div>
        </nav>

        <div className="col-lg-12 categoriesMenu" id="categoriesMenu">
          <svg
            onClick={this.toggleMenu}
            id="toggleClose"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 18L38 38" stroke="#FFC6C6" stroke-width="2" />
            <path d="M38 18L18 38" stroke="#FFC6C6" stroke-width="2" />
          </svg>
          <div id="categories" className="blogCategories">
            <div className="row">
              <div className="col-lg-12 col-sm-12 ml-auto">
                <div className="categoriesNavMenu">
                  <a
                    href="https://stories.addculture.com/minority-owned-agencies"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryOne"
                  >
                    <p className="categoryNumber">01</p>
                    <h2 className="categoryName">
                      MINORITY <br /> OWNED <br /> AGENCIES
                    </h2>
                  </a>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category minorityImg"
                      id="categoryOne-menu-container"
                    ></div>
                  </MouseTooltip>
                  <a
                    href="https://stories.addculture.com/why-add-culture"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryThree"
                  >
                    <p className="categoryNumber">02</p>
                    <h2 className="categoryName">
                      WHY <br /> AD+D <br /> CULTURE
                    </h2>
                  </a>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category whyImg"
                      id="categoryThree-menu-container"
                    ></div>
                  </MouseTooltip>
                  <a
                    href="https://stories.addculture.com/add-culture-stories"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryFour"
                  >
                    <p className="categoryNumber">03</p>
                    <h2 className="categoryName">
                      AD+D <br /> CULTURE <br /> STORIES
                    </h2>
                  </a>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category storiesImg"
                      id="categoryFour-menu-container"
                    ></div>
                  </MouseTooltip>
                  <a
                    href="https://stories.addculture.com/representation-done-right"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryFive"
                  >
                    <p className="categoryNumber">04</p>
                    <h2 className="categoryName">
                      REP. <br /> DONE RIGHT
                    </h2>
                  </a>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category representationImg"
                      id="categoryFive-menu-container"
                    ></div>
                  </MouseTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .navbar {
            padding: 20px;
            position: fixed;
            width: 100%;
            max-width: 100vw;
            background: #eee;
            z-index: 99;
            transition: all 1s ease-in;
          }

          .navContent {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-left: 15px;
            padding-right: 15px;
          }

          .navbarMenuBurger {
            width: 18%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
          }

          .navbarMenuBurger .menuBurgerLineOne,
          .navbarMenuBurger .menuBurgerLineTwo {
            height: 2px;
            background: #222220;
            margin: 5px 5px 5px 0px;
          }

          .brand__logo {
            width: 100%;
            color: #222220;
            text-decoration: none;
          }

          .brand__logo:hover {
            text-decoration: none !important;
          }

          .brand__logo .logo path {
            margin: 0;
            transition: all 1s ease-in;
          }

          /* mobile menu */

          #toggleClose {
            display: none;
          }

          #toggleClose.show {
            display: initial;
            margin-top: 15px;
          }
          .categoriesMenu {
            position: fixed;
            clip-path: circle(0% at 5% 8%);
            transition: all 0.5s ease-in-out;
            width: 100%;
            height: 100%;
            max-width: 100vw;
            background: #222220;
            z-index: 9999;
          }
          .categoriesNavMenu {
            display: none;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            position: relative;
            padding: 10% 5%;
            font-family: "ITC Avant Garde Pro Md", sans-serif;
          }

          .categoriesNavMenu .categorySelector {
            margin-left: 7%;
            margin-top: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #f4f4f4;
            opacity: 0.5;
            height: 20vh;
            transition: all 0.5s ease-in-out;
            position: relative;
            z-index: 9999;
            text-decoration: none;
          }

          .categoriesNavMenu .categorySelector:hover {
            opacity: 1;
          }

          .categoriesNavMenu .categorySelector h2 {
            padding-top: 10%;
          }

          .explore {
            font-family: "HelveticaNeue", sans-serif;
            font-weight: 300;
            font-size: 15px;
            line-height: 18.32px;
            font-style: normal;
          }

          .navbar {
            padding: 20px;
            position: fixed;
            width: 100%;
            max-width: 100vw;
            background: #e5e5e5;
            z-index: 99;
            transition: all 1s ease-in;
          }

          .navContent {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .navbarMenuBurger {
            width: 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
          }

          .navbarMenuBurger .menuBurgerLineOne,
          .navbarMenuBurger .menuBurgerLineTwo {
            height: 2px;
            background: #222220;
            margin: 5px 5px 5px 0px;
          }

          .brand__logo {
            width: 90%;
            color: #222220;
            text-decoration: none;
          }

          .brand__logo:hover {
            text-decoration: none !important;
          }

          .brand__logo .logo path {
            margin: 0;
            transition: all 1s ease-in;
          }

          /* mobile menu */

          #toggleClose {
            display: none;
          }

          #toggleClose.show {
            display: initial;
            margin-top: 15px;
          }
          .categoriesMenu {
            position: fixed;
            clip-path: circle(0% at 5% 8%);
            transition: all 0.5s ease-in-out;
            width: 100%;
            height: 100%;
            max-width: 100vw;
            background: #222220;
            z-index: 9999;
          }
          .show {
            clip-path: circle(100%);
          }
          .categoriesNavMenu {
            display: none;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            position: relative;
            padding: 10% 5%;
            font-family: "ITC Avant Garde Pro Md", sans-serif;
          }

          .categoriesNavMenu .categorySelector {
            margin-left: 7%;
            margin-top: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #f4f4f4;
            opacity: 0.5;
            height: 20vh;
            transition: all 0.5s ease-in-out;
            position: relative;
            z-index: 9999;
            text-decoration: none;
          }

          .categoriesNavMenu .categorySelector:hover {
            opacity: 1;
          }

          .categoriesNavMenu .categorySelector h2 {
            padding-top: 10%;
          }

          /* .categoriesNavMenu:nth-last-child() h2 {
  padding-top: 5%;
} */

          .explore {
            font-family: "HelveticaNeue", sans-serif;
            font-weight: 300;
            font-size: 15px;
            line-height: 18.32px;
            font-style: normal;
          }

          @media (max-width: 1366px) {
            .navbarMenuBurger {
              width: 2%;
            }
          }

          @media (max-width: 1024px) {
            .brand__logo {
              width: 85%;
            }
          }

          @media (max-width: 768px) {
            .navbarMenuBurger {
              order: 2;
            }
            .brand__logo {
              width: initial;
            }

            .storiesLink {
              display: none;
            }
          }

          @media (max-width: 540px) {
            .categoriesNavMenu .categorySelector {
              margin: 20% auto;
            }
            .categoriesNavMenu .categorySelector h2 {
              font-size: 20px;
              line-height: 20px;
            }
          }

          @media (max-width: 480px) {
            .navbar {
              padding: 30px;
            }
            /* .brand__logo {
    width: 73%;
  } */
            .explore {
              display: none;
            }
          }

          @media (max-width: 375px) and (max-height: 667px) {
            .explore {
              display: none;
            }
          }
          @media (max-width: 375px) and (max-height: 812px) {
            .explore {
              display: none;
            }
          }

          @media (max-width: 360px) {
            .navbar {
              padding: 20px;
            }
          }

          @media (max-width: 1366px) {
            .navbarMenuBurger {
              width: 20%;
            }

            .brand__logo {
              width: 150%;
            }
          }

          @media (max-width: 1024px) {
            .brand__logo {
              width: 85%;
            }
          }

          @media (max-width: 768px) {
            .navbarMenuBurger {
              order: 2;
            }
            .brand__logo {
              width: initial;
            }

            .storiesLink {
              display: none;
            }
          }

          @media (max-width: 540px) {
            .categoriesNavMenu .categorySelector {
              margin: 20% auto;
            }
            .categoriesNavMenu .categorySelector h2 {
              font-size: 20px;
              line-height: 20px;
            }
          }

          @media (max-width: 480px) {
            .navbar {
              padding: 30px;
            }
            /* .brand__logo {
    width: 73%;
  } */
            .explore {
              display: none;
            }
          }

          @media (max-width: 375px) and (max-height: 667px) {
            .explore {
              display: none;
            }
          }
          @media (max-width: 375px) and (max-height: 812px) {
            .explore {
              display: none;
            }
          }

          @media (max-width: 360px) {
            .navbar {
              padding: 20px;
            }
          }
        `}</style>
      </>
    );
  }
}
