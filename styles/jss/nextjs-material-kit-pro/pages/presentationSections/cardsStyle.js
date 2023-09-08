import {
  container,
  section,
  sectionDark,
  sectionDescription,
  title,
  whiteColor,
  mlAuto,
  hexToRgb,
} from "/styles/jss/nextjs-material-kit-pro.js";

const cardsStyle = {
  section: {
    ...section,
    padding: "50px 0px",
  },
  sectionDark,
  container,
  sectionDescription,
  title: {
    ...title,
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
    color: "RGB(0, 97, 201)",
  },

  imageContainer: {
    maxWidth: "1040px",
    marginTop: "-140px",
    position: "relative",
    height: "660px",
    "& img": {
      maxWidth: "1040px",
      width: "auto",
      position: "absolute",
      right: "0px",
      top: "0px",
    },
  },
  mlAuto,
};

export default cardsStyle;
