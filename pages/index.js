/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "/pages-sections/presentation-page/SectionDescription.js";
import SectionComponents from "/pages-sections/presentation-page/SectionComponents.js";
import SectionFeatures from "/pages-sections/pricing-page/SectionFeatures.js";
import SectionCards from "/pages-sections/presentation-page/SectionCards.js";
import SectionContent from "/pages-sections/presentation-page/SectionContent.js";
import SectionSections from "/pages-sections/presentation-page/SectionSections.js";
import SectionExamples from "/pages-sections/presentation-page/SectionExamples.js";
import SectionFreeDemo from "/pages-sections/presentation-page/SectionFreeDemo.js";
import SectionOverview from "/pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "/pages-sections/presentation-page/SectionPricing.js";

import presentationStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import Image from "next/image";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
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
          height: 400,
          color: "info",
        }}
      />
      <Parallax image="/img/nextjs_header.jpg" className={classes.parallax} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionCards />
      </div>
      <SectionFeatures />
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <div className={classes.footerBrand}>
                Derechos reservados a: Resuelve.sas
              </div>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button target="_blank" color="twitter" justIcon simple>
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button target="_blank" color="dribbble" justIcon simple>
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button target="_blank" color="instagram" justIcon simple>
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
