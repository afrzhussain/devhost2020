import React from "react";

const Footer = () => {
  return (
    <main>
      <style jsx>{`
        .parent-div {
          padding: 20px;
          width: 100%;
          height: 100%;
          background-color: #272727;
        }
        p {
          margin: 0;
        }
        .content {
          padding: 10px;
        }
        .text {
          display: flex;
          flex-direction: column;
        }
        .title2 {
          color: white;
          font-family: Gilmer-bold;
          font-size: 20px;
          text-align: center;
        }

        .prefix {
          text-align: center;
          color: #d32f2f;
          font-family: Gilmer-bold;
        }

        .content {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
      `}</style>
      <div className="parent-div">
        <div className="images"></div>
        <div className="content">
          <div className="text">
            <p className="title2">Follow Us on</p>
            <p className="prefix">Instagram</p>
          </div>
          <div className="text">
            <p className="title2">Mail Us on</p>
            <p className="prefix">sosc@sosc.org.in</p>
          </div>
        </div>
        <br />
        <div className="text">
          <p className="title2">The Venue</p>
          <p className="title2">
            <br />
            Sahyadri Open-Source Community
          </p>
          <br />
          <p className="prefix">
            Sahyadri College of Engineering and Management, <br />
            Adyar, Mangalore - 575007 IN <br />
            sosc@sahyadri.edu.in
          </p>
        </div>
        <p> </p>
      </div>
    </main>
  );
};

export default Footer;
