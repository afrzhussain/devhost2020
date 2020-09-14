import React from "react";
import { Link } from "gatsby";
const Navbar = () => {
  return (
    <main>
      <style jsx>
        {`
          @import "../assets/sass/_variables.scss";

          p {
            margin: 0px;
          }

          .title {
            margin-top: 20px;
            color: white;
            width: 118px;
          }
          .devhost {
            display: flex;
          }
          .dev {
            font-family: Gilmer-bold;
            font-size: 25px;
          }
          .host {
            font-family: Gilmer-outline;
            font-size: 25px;
          }
          .twenty {
            font-family: Gilmer-bold;
            float: right;
          }
          .nav-holder {
            display: flex;
            flex-direction: row;
            
          }
     
          }

          .nav-options {
            display: flex;
            justify-content: flex-end;
          }
          .option-holder {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .nav-option {
            color: white;
            padding-left: 30px;
            margin: 0;
            text-decoration: none;
            font-family: Gilmer-medium;
            font-size: 12px;
          }

          @media (max-width: 766px) {
         .nav-holder{
           flex-direction:column;

         }
         .option-holder{
           margin-top:40px;
           flex-basis:100%;
         }
         .nav-options{
         
           justify-content:space-evenly;
         }
        }


        @media (max-width: 480px) {
         .nav-holder{
           flex-direction:column;

         }
         .option-holder{
          display:none;
         }
        
        }
        `}
      </style>

      <div className="parent-div">
        <div className="nav-holder">
          <div className="title">
            <div className="devhost">
              <p className="dev">dev</p>
              <p className="host">host</p>
            </div>
            <p className="twenty">2020</p>
          </div>
          <div className={"option-holder"}>
            {" "}
            <div className={"nav-options"}>
              <a className={"nav-option"} to={"#"}>
                Home
              </a>
              <a className="nav-option" to={"#"}>
                About
              </a>
              <a className="nav-option" to={"#"}>
                Scehdule
              </a>
              <a className="nav-option" to={"#"}>
                Speakers
              </a>
              <a className="nav-option" to={"#"}>
                Sponsors
              </a>
              <a className="nav-option" to={"#"}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
