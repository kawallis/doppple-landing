import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import icon32 from './favicon-32x32.png'


import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import "./mycss.css"

const TemplateWrapper = ({ children }) => (
  <div className="">
    <Helmet
      title="Doppple"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[ 
        { rel: 'shortcut icon', type: 'image/png', href: `${icon32}`}
    ]}
    />
    
    <link rel="shortcut icon" type="image/png" href={icon32} />
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />

    <Header />
    <div className="">`
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
