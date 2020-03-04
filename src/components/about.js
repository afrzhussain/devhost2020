import React from "react";

const About = () => {
  return (
    <main>
      <style jsx>{`
        .parent-div {
          color: white;
          display: flex;
          flex-direction: row;
        }
        .holder {
          flex-basis: 100%;
          display: flex;
          flex-direction: column;
          float: right;
        }
        .underline-div {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        .red-underline {
          border-bottom: solid #d32f2f 6px;
          margin-top: 5px;
          width: 220px;

          margin-right: 8px;
        }
        .illus {
          flex-basis: 100%;
        }
        .title-holder {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        p {
          margin: 0;
        }
        .title {
          font-family: Gilmer-heavy;
          font-size: 70px;
          text-align: right;
        }
        .prefix {
          font-family: Gilmer-light;
          font-size: 40px;
        }
        .content {
          text-align: left;
          padding-top: 20px;
          display: flex;
          flex-direction: row;
        }
        .dex-x {
          margin-right: 20px;
        }
        .About-content {
          font-family: Gilmer-medium;
          font-size: 17px;
          word-spacing: 4px;
        }
        .card-holder {
          width: 100%;

          margin-top: 70px;
          color: white;
        }
        .cards {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .card {
          margin: 20px;
          background-color: #272727;
          width: 280px;
        }
        .card-content {
          font-family: Gilmer-light;
          font-size: 15px;
        }
        .card-title {
          font-family: Gilmer-heavy;
          font-size: 25px;
        }
        .card-text {
          text-align: center;
          display: flex;
          flex-direction: column;

          padding: 30px;
        }
        @media (max-width: 1024px) {
          .parent-div {
            margin-top: 100px;
            flex-direction: column;
          }
          .title {
            text-align: center;
          }

          .underline-div {
            justify-content: center;
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
        <div className="holder">
          <div className="title-holder">
            <p id="about" className="title">
              About <span className="prefix">devhost</span>
            </p>
          </div>
          <div className="underline-div">
            {" "}
            <div className={"red-underline"}></div>
          </div>
          <div className="content">
            {" "}
            <div className="dex-x">
              <svg
                width="58"
                height="58"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86562 51.6282L0.342072 55.2123L23.2589 77.8476L26.7825 74.2635L3.86562 51.6282Z"
                  fill="#D32F2F"
                />
                <path
                  d="M23.0552 51.4873L0.4729 74.458L4.04865 77.9898L26.6309 55.0191L23.0552 51.4873Z"
                  fill="#D32F2F"
                />
                <path
                  d="M3.52623 0.51921L0.00268555 4.10336L22.9196 26.7387L26.4431 23.1545L3.52623 0.51921Z"
                  fill="#585857"
                />
                <path
                  d="M22.7162 0.378047L0.133942 23.3488L3.70969 26.8806L26.292 3.90987L22.7162 0.378047Z"
                  fill="#585857"
                />
                <path
                  d="M54.7395 0.144209L51.2159 3.72836L74.1328 26.3637L77.6563 22.7795L54.7395 0.144209Z"
                  fill="#D32F2F"
                />
                <path
                  d="M73.9497 0.0033186L51.3675 22.974L54.9432 26.5059L77.5255 3.53514L73.9497 0.0033186Z"
                  fill="#D32F2F"
                />
                <path
                  d="M55.0788 51.2762L51.5553 54.8604L74.4722 77.4957L77.9957 73.9115L55.0788 51.2762Z"
                  fill="#585857"
                />
                <path
                  d="M74.2887 51.1374L51.7064 74.1082L55.2822 77.64L77.8645 54.6693L74.2887 51.1374Z"
                  fill="#585857"
                />
              </svg>
            </div>
            <div className="About-content">
              devHost:2020 is the annual flagship event of SOSC. Our prime goal
              is to bring young and skilled developers from in and around
              Karnataka under the same roof.
              <br />
              <br /> This event aims to create a platform to collaborate with
              various clubs and organizations, discuss the newest technologies
              and trends in the IT industry and also train students for the
              same.
              <br />
              <br />
              {/* In the past years, DevHost has witnessed active participation from
              different institutes who collectively join hands and take part in
              the various workshops, Hackathons and talks. DevHost:2020 claims
              to be a tech extravaganza, and the biggest event under SOSC so
              far. */}
            </div>
          </div>
        </div>
        <div className="illus"></div>
      </div>{" "}
      <div className="card-holder">
        <div className="cards">
          <div className="card">
            <div className="card-text">
              {" "}
              <p className="card-title">24Hour Hackathon</p>
              <p className="card-content">
                {" "}
                devHost:2020 is the annual flagship event of SOSC. Our prime
                goal is to bring young and skilled developers from in and around
                Karnataka under the same roof.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              {" "}
              <p className="card-title">24Hour Hackathon</p>
              <p className="card-content">
                {" "}
                devHost:2020 is the annual flagship event of SOSC. Our prime
                goal is to bring young and skilled developers from in and around
                Karnataka under the same roof.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              {" "}
              <p className="card-title">24Hour Hackathon</p>
              <p className="card-content">
                {" "}
                devHost:2020 is the annual flagship event of SOSC. Our prime
                goal is to bring young and skilled developers from in and around
                Karnataka under the same roof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
