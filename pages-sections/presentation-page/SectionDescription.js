import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@mui/icons-material/Apps";
import ViewDay from "@mui/icons-material/ViewDay";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import makeStyles from "@mui/styles/makeStyles";

import descriptionStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js";
import Image from "next/image";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              Con <b>Resuelve</b> puedes ralizar envío de tus paquetes a donde
              desees! si eres persona natural o empresa, ponemos a tu
              disposición un equipo que te brindará servicios al momento que
              desees!
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <Image
                src={require("../../public/img/Paquete.png")}
                alt="macbook"
                layout="responsive"
              />
              <div className="" style={{ marginTop: -120 }}>
                <InfoArea
                  title="Paquete sencillo"
                  description="Perfecto para personas naturales."
                  vertical={true}
                  noIcon
                />
              </div>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Image
                src={require("../../public/img/Paquetes.png")}
                alt="macbook"
                layout="responsive"
              />
              <div className="" style={{ marginTop: -120 }}>
                <InfoArea
                  title="Paquetes mediano"
                  description="Mypimes que quieran ampliar su mercado."
                  vertical={true}
                  noIcon
                />
              </div>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Image
                src={require("../../public/img/Paquete_grandes.png")}
                alt="macbook"
                layout="responsive"
              />
              <div className="" style={{ marginTop: -120 }}>
                <InfoArea
                  title="Paquetes grandes"
                  description="Empresas con mayor capacidad operativa"
                  vertical={true}
                  noIcon
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
