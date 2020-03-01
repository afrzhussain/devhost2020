import React from "react";

const LandingPage = () => {
  return (
    <main>
      <style jsx>
        {`
          .parent-div {
            height: calc(100vh - 100px);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          p {
            margin: 0px;
            color: white;
          }

          .content-holder {
            display: flex;
            flex-direction: row;
          }
          .content_1 {
            flex-basis: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .content_2 {
            flex-basis: 100%;
          }
          .hero-title_1 {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .hero-title_2 {
            margin-top: 40px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .Student {
            letter-spacing: 0px;
            font-family: Gilmer-medium;
            font-size: 40px;
          }
          .medium-text {
            font-family: Gilmer-medium;
            font-size: 25px;
            letter-spacing: 3px;
            margin-right: 8px;
          }
          .dev {
            letter-spacing: 5px;
            font-family: Gilmer-medium;
            font-size: 60px;
          }
          .red-underline {
            border-bottom: solid #d32f2f 6px;
            margin-top: 5px;
            width: 220px;

            margin-right: 8px;
          }
          .twenty {
            font-family: Gilmer-outline;
            margin-right: 8px;
            font-size: 30px;
          }
        `}
      </style>
      <div className="parent-div">
        <div className={"content-holder"}>
          <div className={"content_1"}>
            <div className={"hero-section"}>
              <div className="hero-title_1">
                <p className="dev">
                  {" "}
                  <span className={"Student"}>STUDENT &nbsp;</span>DEV-
                </p>
              </div>
              <div className="hero-title_1">
                <p className="dev"> CONFERENCE</p>
              </div>
              <div className="hero-title_1">
                {" "}
                <div className={"red-underline"}></div>
              </div>

              <div className="hero-title_2">
                <p className="twenty"> 20-23</p>
              </div>
              <div className="hero-title_1">
                <p className="medium-text"> MARCH</p>
              </div>
              <div className="hero-title_1">
                <p className="medium-text"> 2020</p>
              </div>
            </div>
          </div>
          <div className={"content_2"}></div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
