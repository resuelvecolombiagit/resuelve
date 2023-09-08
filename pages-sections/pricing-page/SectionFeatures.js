import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import makeStyles from "@mui/styles/makeStyles";
// @material-ui icons
import CardMembership from "@mui/icons-material/CardMembership";
import CardGiftCard from "@mui/icons-material/CardGiftcard";
import AttachMoney from "@mui/icons-material/AttachMoney";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";

import featuresStyle from "/styles/jss/nextjs-material-kit-pro/pages/pricingSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter} style={{ marginBottom: 50 }}>
        <h3 className={classes.title}>Preguntas frecuentes</h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="¿Cómo puedo empezar mi suscripción?"
            description="Registrate y contáctanos por nuestro formulario y nuestro equipo de servicio al cliente se encargará de activar tu suscripción."
            noIcon
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="¿Cuantos domiciliarion tengo a disposición?"
            description="Si eres empresa y cuentas con suscripción, dependiendo del plan que adquieras tendrás la cantidad de domiciliarions, si erres personan natural, a convenirse según envío."
            noIcon
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="¿Qué medios de pago poseen?"
            description="Ponemos a tu disposición un convenio con Bancolombia para realizar el pago de todos tus servicios."
            noIcon
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="¿Puedo realizar envíos si soy persona natural?"
            description="Si, puedes contactarnos y realizar envíos sin necesidad de adquirir una suscripción mensual"
            noIcon
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
