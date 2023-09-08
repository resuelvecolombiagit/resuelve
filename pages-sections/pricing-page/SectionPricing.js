import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";
import makeStyles from "@mui/styles/makeStyles";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle.js";
import Link from "next/link";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h1 className={classes.cardTitle}>
                50
                <br />
                <small>Envios mensuales</small>
              </h1>
              <ul>
                <li>
                  <b>Asesoría y atención 24 horas</b>
                </li>
                <li>
                  <b>20 domiciliarios a tu disposición</b>
                </li>
              </ul>
              <Link href={"/signup"}>
                <Button color="primary" round>
                  ¡Lo quiero!
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="primary">
            <CardBody pricing>
              <h1 className={classes.cardTitleWhite}>
                150
                <br />
                <small>Envios mensuales</small>
              </h1>
              <ul>
                <li>
                  <b>Asesoría y atención 24 horas</b>
                </li>
                <li>
                  <b>20 domiciliarios a tu disposición</b>
                </li>
                <li>
                  <b>Recaudo de pedidos</b>
                </li>
              </ul>
              <Link href={"/signup"}>
                <Button color="white" round>
                  ¡Lo quiero!
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h1 className={classes.cardTitle}>
                300
                <br />
                <small>Envíos mensuales</small>
              </h1>
              <ul>
                <li>
                  <b>Asesoría y atención 24 horas</b>
                </li>
                <li>
                  <b>20 domiciliarios a tu disposición</b>
                </li>
                <li>
                  <b>Recaudo de pedidos</b>
                </li>
                <li>
                  <b>Garantía estado de paquete</b>
                </li>
              </ul>
              <Link href={"/signup"}>
                <Button color="primary" round>
                  ¡Lo quiero!
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
