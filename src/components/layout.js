import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "../components/Container/index";
import LandingPage from "../components/landingpage.js";
import Speakers from "./speakers";
import Header from "./header";
import About from "./about";
import Schedule from "./schedule";
import Sponsers from "./sponsers";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <LandingPage />
        <About />
        <Speakers />
        <Schedule />
        <Sponsers />

        <div>
          <main>{children}</main>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
