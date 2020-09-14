import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Sponser = () => {
  const data = useStaticQuery(graphql`
    query sponser {
      Image1: file(relativePath: { eq: "images/pspons1.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      Image2: file(relativePath: { eq: "images/pspons5.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      Image3: file(relativePath: { eq: "images/pspons3.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      Image4: file(relativePath: { eq: "images/pspons4.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Image5: file(relativePath: { eq: "images/pspons6.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
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
        .holder {
          padding: 50px;
          display: flex;
          flex-direction: row wrap;
          justify-content: space-evenly;
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
          font-size: 55px;
          text-align: left;
        }
        .parent-div {
          margin-top: 150px;
          display: flex;
          flex-direction: column;
        }
        .sponser-img {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 100px;
        }

        .image-holder {
          width: 100%;
          display: flex;
          justify-content: center;
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
          .holder {
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
          .holder {
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
          }
          .sponser-img {
            padding: 12px;
            flex-basis: 100%;
            max-width: 100px;
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
        <div className="content">
          <p>Our previous Sponsors</p>
        </div>
        <div className="holder">
          <div className="image-holder">
            {" "}
            <div className="sponser-img">
              <Img
                fluid={data.Image1.childImageSharp.fluid}
                alt="A corgi smiling happily"
              />
            </div>
          </div>
          <div className="image-holder">
            <div className="sponser-img">
              <Img
                fluid={data.Image2.childImageSharp.fluid}
                alt="A corgi smiling happily"
              />
            </div>
          </div>
          <div className="image-holder">
            <div className="sponser-img">
              <Img
                fluid={data.Image3.childImageSharp.fluid}
                alt="A corgi smiling happily"
              />
            </div>
          </div>
          <div className="image-holder">
            <div className="sponser-img">
              <Img
                fluid={data.Image4.childImageSharp.fluid}
                alt="A corgi smiling happily"
              />
            </div>
          </div>
          <div className="image-holder">
            <div className="sponser-img">
              <Img
                fluid={data.Image5.childImageSharp.fluid}
                alt="A corgi smiling happily"
              />
            </div>
          </div>
        </div>
        <div className="content">
          <p>Contact to Sponsor </p>
        </div>
      </div>
    </main>
  );
};

export default Sponser;
