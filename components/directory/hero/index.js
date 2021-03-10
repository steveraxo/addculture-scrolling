import React from "react";
import DrawedLine from "../../../public/images/directory/drawedLine.svg";

export default function Hero() {
  return (
    <>
      <div className="heroContainer container">
        <div className="directory-hero avant">
          <p>DIRECTORY</p>
          <h1>
            FIND YOUR
            <br />
            NEXT PARTNER
          </h1>
        </div>
        <div className="drawed-line">
          <DrawedLine />
        </div>
      </div>

      <style jsx>{`
        .heroContainer {
          position: relative;
        }
        .directory-hero {
          margin: 20% 9% 5% 9%;
        }

        .directory-hero p {
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          color: #cd4275;
        }

        .directory-hero h1 {
          font-size: 45px;
          line-height: 45px;
          font-weight: 700;
          color: #222220;
        }

        .heroContainer .drawed-line {
          position: absolute;
          top: -5vh;
          right: 0;
        }

        @media (max-width: 800px) {
          .heroContainer .drawed-line {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .heroContainer {
            margin: 10% auto;
          }
        }

        @media (max-width: 480px) {
          .heroContainer {
            margin: 20% auto;
          }

          .directory-hero p {
            font-size: 12px;
          }
          .directory-hero h1 {
            font-size: 30px;
            line-height: 30px;
          }
        }
      `}</style>
    </>
  );
}
