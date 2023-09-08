import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import makeStyles from "@mui/styles/makeStyles";

import cardsStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/cardsStyle.js";
import Image from "next/image";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <div className={classes.container}>
        <GridContainer justifyContent="center">
          <GridItem md={4} sm={4}>
            <div className={classes.imageContainer}>
              <Image
                src={require("../../public/img/Celular.png")}
                alt="views"
                layout="fill"
              />
            </div>
          </GridItem>
          <GridItem md={8} sm={8} className={classes.mlAuto}>
            <GridContainer justifyContent="center">
              <div className={classes.sectionDescription}>
                <h3 className={classes.title}>Todo al alcance de tu App</h3>
                <h6 className={classes.description}>
                  Registrate con nosotros y controla todo tu proceso desde el
                  celular
                </h6>
                <h4 className={classes.description}>
                  <ul>
                    <li>
                      Control de tus pedidos a <b>tiempo real</b>
                    </li>
                    <li>
                      Control de <b>recaudos</b> y entregas de pedidos
                    </li>
                    <li>Estadísticas de envíos</li>
                    <li>
                      Bases de datos de clientes e historiales de procesos
                    </li>
                  </ul>
                </h4>
              </div>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
