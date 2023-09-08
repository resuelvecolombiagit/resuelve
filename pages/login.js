/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Email from "@mui/icons-material/Email";
import Favorite from "@mui/icons-material/Favorite";
import Face from "@mui/icons-material/Face";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CardFooter from "/components/Card/CardFooter.js";
import Swal from "sweetalert2";

import loginPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/loginPageStyle.js";
import Image from "next/image";

import { useRouter } from "next/router";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const handleSend = async () => {
    setLoading(true);

    setTimeout(async () => {
      await Swal.fire(
        "¡Incorrecto!",
        "Las credenciales no corresponden a ninguna cuenta registrada...",
        "error"
      );

      router.reload();

      setLoading(false);
    }, 3000);
  };

  const classes = useStyles();

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Resuelve"
        links={<HeaderLinks dropdownHoverColor="info" />}
      />
      <div className={classes.pageHeader}>
        <Image
          src={require("../public/img/Portada4.jpg")}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={8} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h3 className={classes.cardTitle}>Inicio de sesión</h3>
                  </CardHeader>
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Correo electrónico...",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Contraseña",
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardFooter>
                      {!loading ? (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Button color="primary" onClick={handleSend}>
                            <b>Ingresar</b>
                          </Button>
                          <p>¿Olvidaste tu contraseña?</p>
                        </div>
                      ) : (
                        <Button color="primary">Cargando...</Button>
                      )}
                    </CardFooter>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , Creado por Resuelve
            </div>
          }
        />
      </div>
    </div>
  );
}
