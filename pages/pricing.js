/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax2 from "/components/Parallax/Parallax2.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Footer from "/components/Footer/Footer.js";
// sections for this page
import SectionPricing from "/pages-sections/pricing-page/SectionPricing.js";
import SectionFeatures from "/pages-sections/pricing-page/SectionFeatures.js";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Resuelve"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax2 image="/img/bg2.jpg"></Parallax2>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
        </div>
      </div>
      <SectionFeatures />
      <Footer
        content={
          <div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , Creado por Resuelve
            </div>
          </div>
        }
      />
    </div>
  );
}
