import React, { Component } from "react";
import Link from "next/link";
import LogoSvg from "../../../public/images/logo/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navContent container-fluid">
            <div className="navbarMenuBurger">
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
