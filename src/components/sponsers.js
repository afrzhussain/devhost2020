import React from "react";

const Sponser = () => {
  return (
    <main>
      <style jsx>{`
        .content {
          flex-basis: 100%;
          text-align: center;
          padding: 50px;
          font-family: Gilmer-bold;
          font-size: 25px;
          color: white;
        }
        p {
          margin: 0px;
        }
        .red-underline {
          border-bottom: solid #d32f2f 6px;
          margin-top: 5px;
          width: 220px;

          margin-right: 8px;
        }
        .title {
          color: white;
          font-family: Gilmer-heavy;
          font-size: 70px;
          text-align: left;
        }
        .parent-div {
          margin-top: 150px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 1024px) {
          .parent-div {
            margin-top: 100px;
            flex-direction: column;
          }
          .title {
            text-align: center;
          }
          .title-holder {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .underline-div {
            align-self: center;
          }
        }
        @media (max-width: 766px) {
          .title {
            font-size: 60px;
          }
          .prefix {
            font-size: 30px;
          }
          .red-underline {
            width: 180px;
          }
          .About-content {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .red-underline {
            width: 150px;
          }
          .title {
            font-size: 40px;
          }
          .prefix {
            font-size: 20px;
          }
          .About-content {
            font-size: 14px;
          }
          .content {
            padding: 15px;
          }
        }
      `}</style>
      <div className="parent-div">
        <div className="title-holder">
          <p className="title">Sponsors</p>
          <div className="underline-div">
            {" "}
            <div className={"red-underline"}></div>
          </div>{" "}
        </div>
        <div className="content">Contact to Sponsor us</div>
      </div>
    </main>
  );
};

export default Sponser;
