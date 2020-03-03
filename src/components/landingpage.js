import React from "react";
import About from "./about";
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
          .svg-x {
            padding-top: 75px;
            padding-left: 15px;
          }

          .count-down {
            width: 100%;
            text-align: left;
            margin-left: 155px;
          }
          .Number {
            margin-right: 20px;
            font-family: Gilmer-outline;
            font-size: 70px;
          }
          .prefix {
            padding-left: 20px;
            font-family: Gilmer-heavy;
            font-size: 30px;
          }
          .content_2 {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          @media (max-width: 766px) {
            .Student {
              font-size: 30px;
            }
            .dev {
              font-size: 50px;
            }
          }
          @media (max-width: 1024px) {
            .parent-div {
              height: 100%;
            }
            .content_1 {
              margin-top: 100px;
              justify-content: center;
              flex-direction: column;
            }
            .svg-x {
              align-self: center;
              padding-top: 50px;
              padding-left: 0px;
            }
            .twenty {
              text-align: center;
            }
            .hero-title_2 {
              justify-content: center;
            }
            .hero-title_1 {
              flex-direction: column;
              justify-content: center;
              text-align: center;
            }
            .red-underline {
              align-self: center;
            }
            .content-holder {
              flex-direction: column;
            }
            .content_2 {
              height: 100%;
              width: 100%;
              margin-top: 80px;
              justify-content: center;
            }

            .count-down {
              text-align: center;
              margin-left: 0px;
            }
          }
          @media (max-width: 480px) {
            .Number {
              font-size: 60px;
            }
            .prefix {
              font-size: 20px;
            }
            .Student {
              font-size: 20px;
            }
            .dev {
              font-size: 30px;
            }

            .red-underline {
              width: 100px;
            }
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
            <div className="svg-x">
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
          </div>
          <div className={"content_2"}>
            <div className="count-down">
              <p className="Number">
                15<span className="prefix">DAYS</span>
              </p>
              <p className="Number">
                10<span className="prefix">HOURS</span>
              </p>
              <p className="Number">
                30<span className="prefix">MIN</span>
              </p>
              <p className="Number">
                50<span className="prefix">SEC</span>
              </p>
            </div>
            <div className="red-rectangle"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
