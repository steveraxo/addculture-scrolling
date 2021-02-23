import React, { useState } from "react";
import axios from "axios";

const Newsletter = (props) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    handleSubmit(e);
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function modalConfirmShow() {
    document.querySelector(".confirm").classList.remove("d-none");
    document.querySelector(".confirm").classList.add("fadeInUp");
  }

  function modalConfirmHide(e) {
    document.querySelector(".confirm").classList.remove("d-none");
    document.querySelector(".confirm").classList.remove("fadeInUp");
  }

  function handleSubmit(e) {
    e.preventDefault();

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var xhr = new XMLHttpRequest();
    var SharpSpringTracking = getCookie("__ss_tk");

    if (email.length === 0) {
      setStatus("invalid");
      setMessage("Please, add a valid email address");
    } else {
      setStatus("invalid");
      setMessage("");
    }

    if (email && email.length > 0) {
      if (email.match(mailformat)) {
        axios
          .post(
            `https://app-3QNO4RVBUC.marketingautomation.services/webforms/receivePostback/MzawMAFCQzMA/e035bcac-ed5d-463a-8754-132469b29b95/jsonp/?email=${email}&trackingid__sb=${SharpSpringTracking}`
          )
          .then((data) => {
            console.log(data);
            setStatus(data.result);
            setMessage(data.msg);
            setEmail("");
            modalConfirmShow();
          })
          .catch((error) => {
            setStatus(error.result);
            setMessage(error.msg);
          });
      } else {
        setStatus("invalid");
        setMessage("Please, add a valid email address");
      }
    }
  }
  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  return (
    <div className="newsletterWrapper">
      <div className="container newsletterContainer" id="newsletter">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 getWrapper">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "none" }}></label>
              <div className="email__wrapper">
                <input
                  type="email"
                  className="inputText avant"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleEmailChange}
                  value={email}
                />

                <div className="form__messages">
                  {status === "success" ? (
                    <div
                      className={`form__${status} form__message sm__font bold__font form__is__sent`}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  ) : (
                    ""
                  )}
                  {status === "error" ? (
                    <div
                      className={`form__${status} form__message sm__font bold__font`}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  ) : (
                    ""
                  )}
                  {status === "invalid" ? (
                    <div
                      className={`form__email__wrong form__message sm__font bold__font`}
                    >
                      {message}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <a
                className="dark__font md__font reg__font getintouch__subtitle submit__form"
                onClick={submitForm}
              >
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.6585 9.01514H0V10.9856H33.6585V9.01514Z"
                    fill="#222220"
                  />
                  <path
                    d="M26.0983 20L24.7324 18.6207L33.269 10L24.7324 1.37931L26.0983 0L36.0007 10L26.0983 20Z"
                    fill="#222220"
                  />
                </svg>
              </a>
            </form>
          </div>
        </div>
      </div>

      <div className="confirm animated animatedFadeInUp d-none">
        <p className="close" onClick={modalConfirmHide}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 3L33 33" stroke="#FFC6C6" strokeWidth="2" />
            <path d="M33 3L3 33" stroke="#FFC6C6" strokeWidth="2" />
          </svg>
        </p>

        <h3 className="hey">hey there!</h3>
        <h1 className="thanks">
          Thank you <br /> for <br /> joining us!
        </h1>
        <div className="text-center button-container">
          <p className="done" onClick={modalConfirmHide}>
            Done
          </p>
        </div>
      </div>
      <style jsx>{`
        .newsletterWrapper {
          width: 100%;
        }

        .form__messages .form__message {
          font-family: "HelveticaNeue", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          font-style: normal;
          color: #800000 !important;
        }

        .inputText {
          font-weight: bold;
          font-size: 16px;
          outline: none;
          line-height: 30px;
          font-style: normal;
          text-transform: uppercase;
          border-bottom: 1px solid #222220 !important;
          opacity: 0.5;
          transition: all 0.5s ease-in;
        }

        .inputText:focus {
          opacity: 1;
        }

        .get_in_touch .row {
          padding: 40px 0px 25px 0;
        }
        .get_in_touch a {
          color: #606060;
          text-decoration: underline;
        }
        .get_in_touch .up__arrow {
          /* cursor: pointer; */
          position: relative;
          top: 10px;
          opacity: 0;
        }
        .get_in_touch .black__arrow svg path {
          fill: #000000;
        }
        .get_in_touch .name__wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .get_in_touch .email__wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .get_in_touch input {
          width: 97%;
        }
        .get_in_touch svg {
          height: 25px;
        }
        .get_in_touch form {
          display: flex;
          justify-content: space-between;
        }
        form {
          position: relative;
        }
        input {
          background: transparent;
          border: none;
          margin: 40px 0 10px !important;
          border-bottom: 3px solid #4c4c4c;
          padding-bottom: 10px;
          width: 100%;
        }
        .getintouch__subtitle {
          position: absolute;
          bottom: 0;
          top: 25px;
          right: 0;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .getintouch__subtitle svg {
          margin-left: 15px;
        }
        .get__wrapper {
          display: flex;
          flex-direction: column;
        }
        .get_in_touch .black__arrow svg text {
          font-family: LucidaGrande-Bold, Lucida Grande;
          font-size: 45px;
          font-weight: 700;
          letter-spacing: 0.001em;
        }
        .form__success {
          color: yellowgreen;
          left: 0;
        }
        .form__email__wrong {
          color: red;
        }
        .form__error {
          color: red;
        }
        .confirm {
          background: #fcc6c6;
          width: 700px;
          height: 600px;
          position: fixed;
          padding: 5%;
          left: 28%;
          top: 35%;
          margin-top: -150px;
          z-index: 9999;
        }

        .confirm .close {
          position: absolute;
          left: 100%;
          top: -7%;
        }

        .confirm .hey {
          font-family: "Schnyder L";
          font-weight: 300;
          font-size: 60px;
          line-height: 126px;
        }

        .confirm .thanks {
          font-family: "ITC Avant Garde Pro Md";
          font-weight: bold;
          font-size: 60px;
          text-transform: uppercase;
          line-height: 65px;
        }
        .confirm .button-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 290px !important;
          border: 1px solid #222220;
          border-radius: 40px;
          padding: 10px 20px;
          margin: 10vh auto;
          box-sizing: border-box;
        }

        .confirm .done {
          font-family: "HelveticaNeue";
          font-weight: 400;
          font-size: 18px;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 0;
        }
        @media (max-width: 4000px) {
          .confirm {
            left: 45%;
            height: auto;
          }

          .confirm .button-container {
            margin: 0 auto;
          }
        }

        @media (max-width: 2560px) {
          .confirm {
            left: 40%;
          }
          .confirm .button-container {
            margin: 0 auto;
          }
        }

        @media (max-width: 1920px) {
          .confirm {
            left: 35%;
          }
          .confirm .button-container {
            margin: 5vh auto;
          }
        }

        @media (max-width: 1600px) {
          .confirm {
            left: 30%;
          }
        }

        @media (max-width: 1366px) {
          .confirm {
            width: 500px;
            left: 30%;
          }

          .confirm .hey {
            font-size: 50px;
            line-height: 110px;
          }

          .confirm .thanks {
            font-size: 50px;
            line-height: 50px;
          }
        }

        @media (max-width: 1024px) {
          .confirm {
            left: 25%;
          }
        }
        @media (max-width: 768px) {
          .get__wrapper h2 {
            position: relative;
            left: 5px;
          }

          .confirm {
            left: 18%;
          }
        }

        @media (max-width: 540px) {
          .confirm {
            width: 350px;
            top: 45%;
          }

          .confirm .close {
            left: 102%;
            top: -10%;
          }

          .confirm .hey {
            font-size: 40px;
            line-height: 100px;
          }

          .confirm .thanks {
            font-size: 40px;
            line-height: 40px;
          }
        }
        @media (max-width: 500px) {
          .get__in__touch__wrapper {
            display: none;
          }
          .get_in_touch .row {
            flex-wrap: unset;
          }
          .get_in_touch .row {
            padding: 40px 40px;
          }
          .get_in_touch input {
            width: 100%;
          }
          .get_in_touch form {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
        }
        @media (max-width: 920px) and (orientation: landscape) {
          .get_in_touch {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .inputText {
            font-size: 10px;
            line-height: 10px;
          }

          .confirm {
            width: 320px;
            left: 8%;
            top: 40%;
          }

          .confirm .button-container {
            width: 260px !important;
          }
        }

        @media (max-width: 375px) {
          .confirm {
            width: 300px;
            left: 5%;
          }

          .confirm .hey {
            font-size: 30px;
            line-height: 90px;
          }

          .confirm .thanks {
            font-size: 30px;
            line-height: 30px;
          }
        }

        .animated {
          animation-duration: 1s;
          animation-fill-mode: both;
          -webkit-animation-duration: 1s;
          -webkit-animation-fill-mode: both;
        }

        .animatedFadeInUp {
          opacity: 0;
        }

        .fadeInUp {
          opacity: 0;
          animation-name: fadeInUp;
          -webkit-animation-name: fadeInUp;
        }

        @keyframes fadeInUp {
          from {
            transform: translate3d(0, 40px, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
export default Newsletter;
