import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#light-grey", color: "black" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Developed & Designed By Safehaven © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default Footer;
