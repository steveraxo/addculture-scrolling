import React, { Component } from "react";

import Newsletter from "../newsletter";
import FooterArrow from "../../../public/images/directory/footerArrow.svg";
import FooterScratch from "../../../public/images/directory/footerScratch.svg";

export default class AddCultureFooter extends Component {
  constructor(props) {
    super(props);

    this.addHover = this.addHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
    this.addLinkedHover = this.addLinkedHover.bind(this);
    this.removeLinkedHover = this.removeLinkedHover.bind(this);
  }
  addLinkedHover() {
    let allSocials = document.querySelectorAll(".socials a svg");
    allSocials.forEach((icon, i) => {
      if (i === 2) {
        icon.children[0].classList.add("hoverRect");
        icon.children[1].classList.add("hoverPath");
        icon.children[2].classList.add("hoverPath");
      }
    });
  }

  removeLinkedHover() {
    let allSocials = document.querySelectorAll(".socials a svg");
    allSocials.forEach((icon, i) => {
      if (i === 2) {
        icon.children[0].classList.remove("hoverRect");
        icon.children[1].classList.remove("hoverPath");
        icon.children[2].classList.remove("hoverPath");
      }
    });
  }

  addHover(e) {
    let element = e.target.children[0];
    element.classList.add("colorChange");
  }

  removeHover(e) {
    let element = e.target.children[0];
    element.classList.remove("colorChange");
  }

  addLinkedHover(e) {
    let allSocials = document.querySelectorAll(
      ".social-container .linkedInFooter svg"
    );
    console.log(allSocials);
    allSocials.forEach((icon, i) => {
      if (i === 2) {
        icon.children[0].classList.add("colorChange");
        icon.children[1].classList.add("colorChange");
      }
    });
  }

  removeLinkedHover(e) {
    let allSocials = document.querySelectorAll(
      ".social-container .linkedInFooter svg"
    );
    allSocials.forEach((icon, i) => {
      if (i === 2) {
        icon.children[0].classList.remove("colorChange");
        icon.children[1].classList.remove("colorChange");
      }
    });
  }
  render() {
    return (
      <>
        <div id="join-our-newsletter" className="adcFooterWrapper">
          <FooterScratch tabIndex="0" alt="Scratch" />
          <div className="contentWrapper">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <p className="footerGreeting">HELLO, </p>
                <h1 className="join">
                  JOIN OUR NEWSLETTER <br /> TO STAY UP TO DATE
                </h1>
                <FooterArrow className="footerArrow" tabIndex="0" alt="Arrow" />
              </div>
              <div className="col-lg-6 col-sm-12 d-flex align-items-center">
                <Newsletter />
              </div>
            </div>

            <div className="container-fluid">
              <div className="row justify-content-end">
                <div className="col-md-6 col-sm-12 ml-auto social-container">
                  <a href="https://twitter.com/AddCultureNow">
                    <svg
                      onMouseEnter={this.addHover}
                      onMouseLeave={this.removeHover}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 4.30865C23.1177 4.70062 22.1681 4.9646 21.1722 5.08379C22.1889 4.47423 22.9697 3.5095 23.3368 2.35997C22.3865 2.92474 21.3314 3.33351 20.2107 3.5551C19.3123 2.59836 18.0316 2 16.6165 2C13.8975 2 11.6928 4.20465 11.6928 6.92367C11.6928 7.30924 11.7368 7.68522 11.8208 8.046C7.72829 7.84121 4.10053 5.88054 1.67189 2.90154C1.24792 3.62869 1.00553 4.47424 1.00553 5.37658C1.00553 7.08447 1.87347 8.59157 3.19579 9.47471C2.38784 9.44911 1.62949 9.22752 0.964734 8.85875V8.92034C0.964734 11.3066 2.66302 13.296 4.91407 13.7496C4.5013 13.8616 4.06613 13.9224 3.61736 13.9224C3.29978 13.9224 2.991 13.8912 2.69022 13.8336C3.31658 15.7895 5.13566 17.2134 7.28991 17.2534C5.60523 18.5733 3.48217 19.3612 1.17512 19.3612C0.776747 19.3612 0.384774 19.338 0 19.2916C2.17905 20.6884 4.76688 21.5043 7.5475 21.5043C16.6037 21.5043 21.5562 14.0016 21.5562 7.49563C21.5562 7.28204 21.5522 7.06927 21.5418 6.85888C22.5049 6.16293 23.34 5.29578 24 4.30865Z"
                        fill="#222220"
                      />
                    </svg>
                  </a>
                  <a
                    // onMouseEnter={this.addHover}
                    // onMouseLeave={this.removeHover}
                    href="https://www.instagram.com/addculturenow/"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M12 2.16215C15.2041 2.16215 15.5837 2.17439 16.849 2.23212C18.019 2.28547 18.6544 2.48096 19.0773 2.6453C19.6374 2.86299 20.0371 3.12302 20.457 3.54291C20.877 3.96286 21.137 4.3626 21.3547 4.92273C21.519 5.34557 21.7145 5.98096 21.7679 7.15095C21.8256 8.41629 21.8378 8.79584 21.8378 11.9999C21.8378 15.2041 21.8256 15.5836 21.7679 16.849C21.7145 18.019 21.519 18.6543 21.3547 19.0772C21.137 19.6373 20.877 20.0371 20.4571 20.457C20.0371 20.8769 19.6374 21.1369 19.0773 21.3546C18.6544 21.519 18.019 21.7144 16.849 21.7678C15.5839 21.8255 15.2044 21.8378 12 21.8378C8.79563 21.8378 8.41618 21.8255 7.15097 21.7678C5.98098 21.7144 5.34559 21.519 4.92274 21.3546C4.36261 21.1369 3.96287 20.8769 3.54297 20.457C3.12308 20.0371 2.863 19.6373 2.64531 19.0772C2.48097 18.6543 2.28548 18.019 2.23213 16.849C2.1744 15.5836 2.16216 15.2041 2.16216 11.9999C2.16216 8.79584 2.1744 8.41629 2.23213 7.15095C2.28548 5.98096 2.48097 5.34557 2.64531 4.92273C2.863 4.3626 3.12303 3.96286 3.54297 3.54296C3.96287 3.12302 4.36261 2.86299 4.92274 2.6453C5.34559 2.48096 5.98098 2.28547 7.15097 2.23212C8.41632 2.17439 8.79587 2.16215 12 2.16215ZM12 0C8.741 0 8.33234 0.0138138 7.05241 0.072213C5.77516 0.130469 4.90283 0.333342 4.13954 0.629958C3.35044 0.936626 2.68123 1.34694 2.01406 2.01406C1.34695 2.68122 0.936629 3.35043 0.630008 4.13953C0.333343 4.90282 0.13047 5.77514 0.0722133 7.05239C0.0138139 8.33231 0 8.74096 0 11.9999C0 15.259 0.0138139 15.6676 0.0722133 16.9475C0.13047 18.2248 0.333343 19.0971 0.630008 19.8604C0.936629 20.6495 1.34695 21.3187 2.01406 21.9859C2.68123 22.653 3.35044 23.0633 4.13954 23.3699C4.90283 23.6666 5.77516 23.8694 7.05241 23.9277C8.33234 23.9861 8.741 23.9999 12 23.9999C15.259 23.9999 15.6677 23.9861 16.9476 23.9277C18.2248 23.8694 19.0972 23.6666 19.8605 23.3699C20.6496 23.0633 21.3188 22.653 21.9859 21.9859C22.653 21.3187 23.0634 20.6495 23.37 19.8604C23.6667 19.0971 23.8695 18.2248 23.9278 16.9475C23.9862 15.6676 24 15.259 24 11.9999C24 8.74096 23.9862 8.33231 23.9278 7.05239C23.8695 5.77514 23.6667 4.90282 23.37 4.13953C23.0634 3.35043 22.653 2.68122 21.9859 2.01406C21.3188 1.34694 20.6496 0.936626 19.8605 0.629958C19.0972 0.333342 18.2248 0.130469 16.9476 0.072213C15.6677 0.0138138 15.259 0 12 0Z"
                          fill="#222220"
                        />
                        <path
                          d="M12.0054 5.84351C8.60213 5.84351 5.84326 8.60237 5.84326 12.0056C5.84326 15.4089 8.60213 18.1678 12.0054 18.1678C15.4087 18.1678 18.1676 15.4089 18.1676 12.0056C18.1676 8.60237 15.4087 5.84351 12.0054 5.84351ZM12.0054 16.0056C9.79627 16.0056 8.00542 14.2148 8.00542 12.0056C8.00542 9.7965 9.79627 8.00566 12.0054 8.00566C14.2146 8.00566 16.0054 9.7965 16.0054 12.0056C16.0054 14.2148 14.2146 16.0056 12.0054 16.0056Z"
                          fill="#222220"
                        />
                        <path
                          d="M19.8507 5.59627C19.8507 6.39152 19.206 7.03625 18.4107 7.03625C17.6154 7.03625 16.9707 6.39152 16.9707 5.59627C16.9707 4.80098 17.6154 4.15625 18.4107 4.15625C19.206 4.15625 19.8507 4.80098 19.8507 5.59627Z"
                          fill="#222220"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="23.9999" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/addculturenow/">
                    <svg
                      onMouseEnter={this.addHover}
                      onMouseLeave={this.removeHover}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.315 4.9578C16.6917 4.83314 15.8498 4.74 15.3204 4.74C13.8867 4.74 13.7936 5.36333 13.7936 6.36066V8.13607H17.3774L17.065 11.8137H13.7936V23H9.30632V11.8137H7V8.13607H9.30632V5.86127C9.30632 2.74533 10.7708 1 14.4477 1C15.7252 1 16.6602 1.187 17.8753 1.43633L17.315 4.9578Z"
                        fill="#222220"
                      />
                    </svg>
                  </a>
                  <a
                    onMouseEnter={this.addLinkedHover}
                    onMouseLeave={this.removeLinkedHover}
                    className="linkedInFooter"
                    href="https://www.linkedin.com/company/add-culture/"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.77475 4.28389C5.77475 5.52898 4.82671 6.5366 3.34415 6.5366C1.91935 6.5366 0.971323 5.52898 1.00066 4.28389C0.971323 2.97828 1.91933 2 3.37255 2C4.82669 2 5.74633 2.97828 5.77475 4.28389ZM1.11986 22.8191V8.31621H5.62712V22.8181H1.11986V22.8191Z"
                        fill="#222220"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.24029 12.9446C9.24029 11.1357 9.18069 9.5935 9.12109 8.31816H13.0361L13.2442 10.305H13.3331C13.9263 9.38538 15.4089 7.99268 17.8111 7.99268C20.7762 7.99268 23.0005 9.95016 23.0005 14.219V22.821H18.4932V14.7838C18.4932 12.9144 17.8413 11.6399 16.2102 11.6399C14.9642 11.6399 14.2234 12.4999 13.9273 13.3297C13.8081 13.6268 13.7494 14.0412 13.7494 14.4574V22.821H9.24211V12.9446H9.24029Z"
                        fill="#222220"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .adcFooterWrapper {
            background: #adaea5;
            position: relative;
          }

          .contentWrapper {
            padding: 5% 12%;
            font-family: "ITC Avant Garde Pro Md", sans-serif;
            color: #222220;
          }

          .footerGreeting {
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 5%;
          }

          .footerArrow {
            width: 200px;
          }

          .join {
            font-size: 40px;
            line-height: 36px;
            font-style: normal;
            font-family: "ITC Avant Garde Pro Md", sans-serif;
            font-weight: bold;
          }

          .social-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
          }

          .social-container a {
            margin-right: 40px;
          }

          .colorChange {
            fill: #cd2475;
          }

          @media (max-width: 480px) {
            .join {
              font-size: 22px;
              line-height: 20px;
            }
          }
        `}</style>
      </>
    );
  }
}
