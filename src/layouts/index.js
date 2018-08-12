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
        { name: "name", content: "Doppple" },
        { name: "description", content: "A peer to peer travel application to help travelers connect to locals for advice" },
        { itemprop: "image", content: "https://firebasestorage.googleapis.com/v0/b/travel-e63f1.appspot.com/o/meta%2FScreenshot%202018-08-12%2015.12.40.png?alt=media&token=d0214b23-4ffc-4763-a6d0-8d6970e0a16d" },
        { property: "og:url", content: "https://doppple.com" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Doppple" },
        { property: "og:description", content: "A peer to peer travel application to help travelers connect to locals for advice" },
        { property: "og:image", content: "https://firebasestorage.googleapis.com/v0/b/travel-e63f1.appspot.com/o/meta%2FScreenshot%202018-08-12%2015.12.40.png?alt=media&token=d0214b23-4ffc-4763-a6d0-8d6970e0a16d" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Doppple" },
        { name: "twitter:description", content: "A peer to peer travel application to help travelers connect to locals for advice" },
        { name: "twitter:image", content: "https://firebasestorage.googleapis.com/v0/b/travel-e63f1.appspot.com/o/meta%2FScreenshot%202018-08-12%2015.12.40.png?alt=media&token=d0214b23-4ffc-4763-a6d0-8d6970e0a16d" },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
      ]}
    />

    <link rel="shortcut icon" type="image/png" href={icon32} />
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />

    <Header />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
