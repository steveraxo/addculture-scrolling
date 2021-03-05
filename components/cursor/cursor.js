import React, { Component } from "react";

export default class cursor extends Component {
  transformCursor() {
    const aLinks = [...document.querySelectorAll("a")];
    const buttons = [...document.querySelectorAll("button")];
    const buttonNumbers = [...document.querySelectorAll(".number")];
    const buttonArrows = [...document.querySelectorAll(".slider__arrows")];
    const inputElements = [...document.querySelectorAll("input")];
    const toggler = [...document.querySelectorAll(".menu__burguer__wrapper")];
    const svgs = [...document.querySelectorAll("svg")];
    const videos = [...document.querySelectorAll("video")];
    const iframes = [...document.querySelectorAll("iframe")];
    const internalMenu = [...document.querySelectorAll(".internal__menu p")];
    const togglerMenu = [...document.querySelectorAll(".toggler__menu p")];
    const closeMenu = [...document.querySelectorAll(".menu__courtain__close")];
    const menuElements = [
      ...document.querySelectorAll(".themenu__wrapper__item"),
    ];
    const socialMenuElements = [
      ...document.querySelectorAll(".social__menu__wrapper a"),
    ];
    const RaxoEndShape = [...document.querySelectorAll(".slide__fifteen a")];
    const InfoBlocks = [...document.querySelectorAll(".end__block")];
    const submitBuddon = [...document.querySelectorAll(".submit__form a")];
    const closeSubmit = [...document.querySelectorAll(".close__form")];
    const chartController = [
      ...document.querySelectorAll(".chart__controller__element"),
    ];
    const joinNewsletter = [...document.querySelectorAll("#join__newsletter")];
    const directoryMenuBurger = [
      ...document.querySelectorAll(".navbarMenuBurger"),
    ];
    const directoryFilters = [...document.querySelectorAll(".filter")];
    const directoryFilterTerms = [...document.querySelectorAll(".filter-term")];
    const directoryAlphabet = [...document.querySelectorAll("#alphabet p")];
    const resetAll = [...document.querySelectorAll("#reset")];

    const allElements = aLinks
      .concat(buttons)
      .concat(chartController)
      .concat(closeSubmit)
      .concat(submitBuddon)
      .concat(InfoBlocks)
      .concat(internalMenu)
      .concat(buttonNumbers)
      .concat(buttonArrows)
      .concat(inputElements)
      .concat(svgs)
      .concat(toggler)
      .concat(togglerMenu)
      .concat(videos)
      .concat(iframes)
      .concat(closeMenu)
      .concat(menuElements)
      .concat(socialMenuElements)
      .concat(RaxoEndShape)
      .concat(joinNewsletter)
      .concat(directoryMenuBurger)
      .concat(directoryFilters)
      .concat(directoryFilterTerms)
      .concat(directoryAlphabet)
      .concat(resetAll);

    allElements.forEach(function (element) {
      element.addEventListener("mouseenter", function () {
        const theCursor = document.querySelector(".cursor");
        theCursor.classList.add("morphed--cursor");
      });
      element.addEventListener("mouseleave", function () {
        const theCursor = document.querySelector(".cursor");
        theCursor.classList.remove("morphed--cursor");
      });
    });
  }

  createCustomCursor() {
    let el = document.querySelectorAll(".cursor")[0];
    this.DOM = el;
    this.DOM.dot = this.DOM.querySelector(".cursor__inner--dot");
    this.DOM.circle = this.DOM.querySelector(".cursor__inner--circle");
    this.bounds = {
      dot: this.DOM.dot.getBoundingClientRect(),
      circle: this.DOM.circle.getBoundingClientRect(),
    };
    this.scale = 1;
    this.opacity = 1;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
    this.lastScale = 1;

    this.initEvents();
    requestAnimationFrame(() => this.renderCursor());
  }

  initEvents() {
    var body = document.body;
    var getMousePos = (e) => {
      let posx = 0;
      let posy = 0;
      if (!e) e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
      }
      return { x: posx, y: posy };
    };
    window.addEventListener(
      "mousemove",
      (ev) => (this.mousePos = getMousePos(ev))
    );
  }

  renderCursor() {
    var lerp = (a, b, n) => (1 - n) * a + n * b;

    this.lastMousePos.dot.x = lerp(
      this.lastMousePos.dot.x,
      this.mousePos.x - this.bounds.dot.width / 2,
      1
    );
    this.lastMousePos.dot.y = lerp(
      this.lastMousePos.dot.y,
      this.mousePos.y - this.bounds.dot.height / 2,
      1
    );
    this.lastMousePos.circle.x = lerp(
      this.lastMousePos.circle.x,
      this.mousePos.x - this.bounds.circle.width / 2,
      0.19
    );
    this.lastMousePos.circle.y = lerp(
      this.lastMousePos.circle.y,
      this.mousePos.y - this.bounds.circle.height / 2,
      0.19
    );
    this.lastScale = lerp(this.lastScale, this.scale, 0.19);
    this.DOM.dot.style.transform = `translateX(${this.lastMousePos.dot.x}px) translateY(${this.lastMousePos.dot.y}px)`;
    this.DOM.circle.style.transform = `translateX(${this.lastMousePos.circle.x}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;

    requestAnimationFrame(() => this.renderCursor());
  }

  enter() {
    //this.scale = 1.3;
    this.DOM.dot.style.display = "none";
  }

  leave() {
    //this.scale = 1;
    this.DOM.dot.style.display = "";
  }

  componentDidMount() {
    this.createCustomCursor();
    // const script = document.createElement("script")

    // script.src = "https://motion.raxo.tv/custom-cursor/cursor.js"
    // script.async = true

    // document.body.appendChild(script)
    if (window.innerWidth < 768) {
      document.querySelectorAll(".cursor")[0].style.opacity = 0;
    } else {
      document.querySelectorAll(".cursor")[0].style.opacity = 1;
    }
    this.transformCursor();
  }

  render() {
    return (
      <>
        <div className="cursor body__wrapper" id="cursor">
          <div className="cursor__inner cursor__inner--circle"></div>
          <div className="cursor__inner cursor__inner--dot">
            <p>
              <small> </small>
            </p>
          </div>
        </div>
      </>
    );
  }
}
