/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// @mui/icons-material
import Check from "@mui/icons-material/Check";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  const handleSend = async () => {
    setLoading(true);

    setTimeout(async () => {
      await Swal.fire(
        "¡Haz enviado tu información!",
        "Se analizará tu solicitud y posteriormente se te hara envío de las credencailes a tu correo, ¡Ten paciencia!",
        "success"
      );

      router.push("/");

      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Resuelve"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
      />
      <div className={classes.pageHeader}>
        <Image
          src={require("../public/img/Portada3.jpg")}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}></GridItem>
            <GridItem xs={12} sm={6} md={6} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h2
                      className={classes.cardTitle}
                      style={{ color: "white" }}
                    >
                      Regístrate
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Nombres"
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="apellidos"
                          id="last"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Correo electrónico"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </CardBody>
                  <div className="" style={{ marginLeft: 20, marginRight: 20 }}>
                    <b>Estilo preferido de paquetes</b>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label="Sencillo"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label="Mediano"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label="Grande"
                      />
                    </div>
                  </div>
                  <div className="" style={{ marginLeft: 20, marginRight: 20 }}>
                    <b>Cuentanos sobre tu empresa o que servicio deseas</b>
                    <br />
                    <CustomInput
                      labelText="Escribe aquí"
                      id="message2"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </div>
                  <CardFooter className={classes.justifyContentBetween}>
                    {!loading ? (
                      <Button
                        color="primary"
                        className={classes.pullRight}
                        onClick={handleSend}
                      >
                        Enviar
                      </Button>
                    ) : (
                      <Button color="primary" className={classes.pullRight}>
                        Cargando...
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
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
