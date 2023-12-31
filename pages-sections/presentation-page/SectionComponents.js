import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import makeStyles from "@mui/styles/makeStyles";

import componentsStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/componentsStyle.js";
import Image from "next/image";

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>Basic Components</h3>
            <h6 className={classes.description}>
              The core elements of your website
            </h6>
            <h5 className={classes.description}>
              All the Material-UI components that you need in a development have
              been re-design with the new look. Besides the numerous basic
              elements, we have also created additional classes. All these items
              will help you take your project to the next level.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png")}
                alt="macbook"
                className={classes.componentsMacbook}
                layout="fill"
              />
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/table.jpg")}
                alt="macbook"
                layout="fill"
                className={classes.shoppingCart}
              />
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/share-btn.png")}
                alt="macbook"
                layout="fill"
                className={classes.shareButton}
              />
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg")}
                alt="macbook"
                layout="fill"
                className={classes.cardImage}
              />
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg")}
                alt="macbook"
                layout="fill"
                className={classes.twitterImage}
              />
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg")}
                alt="macbook"
                layout="fill"
                className={classes.iconsImage}
              />
              <Image
                src={require("../../public/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg")}
                alt="macbook"
                layout="fill"
                className={classes.repostImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
