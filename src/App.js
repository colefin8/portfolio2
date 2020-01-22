import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Carousel from "react-material-ui-carousel";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Container,
  Paper,
  Link
} from "@material-ui/core";
import { amber, blueGrey } from "@material-ui/core/colors";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./App.css";
import Mobile from "./Components/Mobile";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber,
    imageSample1: { main: "#4A85D0" },
    imageSample2: { main: "#B88247" },
    imageSample3: { main: "#83A6BB" }
  }
});

const toggleZoom = pictureId => {
  const element = document.getElementById(pictureId);
  if (element.classList.contains("hidden-initial")) {
    element.classList.remove("hidden-initial");
  }
  console.log(element);
  if (element.classList.contains("visible")) {
    element.classList.remove("visible");
    element.classList.add("hidden");
  } else {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
    element.classList.add("visible");
  }
};

const useStyles = makeStyles(() => {
  console.log(theme);
  return {
    container: {
      position: "relative",
      width: "70vw",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    paperRoot: {
      position: "absolute",
      height: "80vh",
      width: "50vw",
      padding: "2vh 2vw",
      boxSizing: "border-box"

      // backgroundColor: "rgba(245,245,245, .01)"
    },
    cardHeader: {
      margin: "5px 0px 5vh 5px"
    },
    paper1: {
      marginTop: "-39.5vh",
      marginLeft: "-24.5vw",
      color: "transparent",
      zIndex: 1
    },
    paper2: {
      marginTop: "-39.75vh",
      marginLeft: "-24.75vw",
      color: "transparent",
      zIndex: 2
    },
    paper3: {
      marginTop: "-40vh",
      marginLeft: "-25vw",
      color: "#060A06",
      zIndex: 3
    },
    carouselPaper: {
      backgroundColor: "#f5f5f566",
      height: "60vh",
      padding: "7px"
    }
  };
});

function App() {
  const classes = useStyles();

  const [height, setHeight] = useState([3, 2, 1]);
  const [windowWidth, setWidth] = useState(window.outerWidth);

  //like a media query, but instead of hiding everything it conditionally renders mobile or desktop version
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.outerWidth);
      console.log(windowWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [window.outerWidth]);

  const handleRight = () => {
    const tl = gsap.timeline({ repeat: 0, defaults: { duration: 0.3 } });
    tl.to(".MuiPaper-elevation3", { x: 400, y: -400, rotation: 10 });
    tl.call(() => {
      const newHeights = height.map(e => {
        if (e === 3) {
          return 1;
        } else {
          return e + 1;
        }
      });

      setHeight(newHeights);
    });
    tl.to(".MuiPaper-elevation3", { x: 0, y: 0, rotation: 0 });
  };

  const handleLeft = () => {
    const tl = gsap.timeline({ repeat: 0, defaults: { duration: 0.3 } });
    tl.to(".MuiPaper-elevation1", { x: 400, y: -400, rotation: 10 });
    tl.call(() => {
      const newHeights = height.map(e => {
        if (e === 1) {
          return 3;
        } else {
          return e - 1;
        }
      });
      setHeight(newHeights);
    });
    tl.to(".MuiPaper-elevation1", { x: 0, y: 0, rotation: 0 });
  };

  return (
    <>
      {windowWidth > 1174 ? (
        <ThemeProvider theme={theme}>
          <img
            onClick={() => toggleZoom("picture1")}
            id="picture1"
            alt="listo 1 zoom"
            src="/assets/Listo1.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture2")}
            id="picture2"
            alt="listo 2 zoom"
            src="/assets/Listo2.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture3")}
            id="picture3"
            alt="listo 3 zoom"
            src="/assets/Listo3.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture4")}
            id="picture4"
            alt="love to know 1 zoom"
            src="/assets/Lovetoknow1.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture5")}
            id="picture5"
            alt="love to know 2 zoom"
            src="/assets/Lovetoknow2.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture6")}
            id="picture6"
            alt="love to know 3 zoom"
            src="/assets/Lovetoknow3.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture7")}
            id="picture7"
            alt="card smart 1 zoom"
            src="/assets/CardSmart1.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture8")}
            id="picture8"
            alt="card smart 2 zoom"
            src="/assets/CardSmart2.png"
            className="zoom-picture hidden-initial"
          />
          <img
            onClick={() => toggleZoom("picture9")}
            id="picture9"
            alt="card smart 3 zoom"
            src="/assets/CardSmart3.png"
            className="zoom-picture hidden-initial"
          />
          <div
            style={{
              overflow: "hidden",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540574722410-54cff7a339d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div style={{ position: "fixed", left: "3vw", top: "3vh" }}>
              <Typography
                variant="h2"
                align="center"
                style={{
                  color: "#f5f5f5"
                }}
              >
                {"Cole Finlayson"}
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ color: "#f5f5f5" }}
              >
                {"cole.fin8@gmail.com"}
                <br />
                <Link
                  style={{ marginTop: "1vh", color: "inherit" }}
                  href="https://github.com/colefin8/"
                >
                  GitHub
                </Link>
                <br />
                <Link
                  style={{ marginTop: "1vh", color: "inherit" }}
                  href="https://www.linkedin.com/in/cole-m-finlayson/"
                >
                  LinkedIn
                </Link>
                <br />
                <Link
                  style={{ marginTop: "1vh", color: "inherit" }}
                  href="/assets/Resume.pdf"
                  target="_blank"
                >
                  Résumé
                </Link>
              </Typography>
            </div>

            <Container
              component="article"
              maxWidth="lg"
              classes={{ root: classes.container }}
            >
              <ChevronLeftIcon
                style={{ fontSize: "4rem", color: "#f5f5f5" }}
                onClick={() => handleLeft()}
              />
              <Box>
                <Paper
                  style={{
                    backgroundColor: `${theme.palette.imageSample1.main}`
                  }}
                  elevation={height[0]}
                  classes={{
                    root: classes.paperRoot,
                    elevation1: classes.paper1,
                    elevation2: classes.paper2,
                    elevation3: classes.paper3
                  }}
                >
                  <Typography
                    variant="h4"
                    classes={{ root: classes.cardHeader }}
                  >
                    ABOUT
                  </Typography>

                  <Typography
                    color="inherit"
                    variant="h6"
                    align="center"
                    style={{
                      marginBottom: "2vh"
                    }}
                  >
                    {
                      "I'm a full stack web developer from Provo, UT with a background in "
                    }
                    <a
                      style={{ color: "inherit" }}
                      href="http://wasatchcarriagehousedoors.com/"
                    >
                      {"finish carpentry"}
                    </a>
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      borderRadius: "4px",
                      minWidth: "80%",
                      height: "70%",
                      backgroundImage: "url('/assets/garage_door.JPG')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    <div className="hover-text">
                      <Typography variant="h4" align="center">
                        {
                          "Changing careers to web development gives me the ability to apply the skills I learned -"
                        }
                        <br />
                        {
                          "providing custom high quality products that are tailored to the client"
                        }
                      </Typography>
                    </div>
                  </div>
                </Paper>
                <Paper
                  style={{
                    backgroundColor: `${theme.palette.imageSample2.main}`
                  }}
                  elevation={height[1]}
                  classes={{
                    root: classes.paperRoot,
                    elevation1: classes.paper1,
                    elevation2: classes.paper2,
                    elevation3: classes.paper3
                  }}
                >
                  <Typography
                    variant="h4"
                    classes={{ root: classes.cardHeader }}
                  >
                    SKILLS
                  </Typography>

                  <Grid
                    container
                    spacing={10}
                    direction="column"
                    style={{ height: "100%", paddingBottom: "1vw" }}
                    justify="space-around"
                    alignItems="stretch"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <Grid item>
                        <img
                          alt="amazons3"
                          src="/assets/icons/icons8-amazon-s3.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">Amazon S3</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          alt="css"
                          src="/assets/icons/icons8-css3.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">CSS</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          alt="github"
                          src="/assets/icons/icons8-github.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">GitHub</Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <Grid item>
                        <img
                          alt="javascript"
                          src="/assets/icons/icons8-javascript-logo.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">Javascript</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          alt="materialui"
                          src="/assets/icons/icons8-material-ui.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">Material UI</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          alt="nodejs"
                          src="/assets/icons/icons8-nodejs.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">NodeJS</Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <Grid item>
                        <img
                          alt="postgresql"
                          src="/assets/icons/icons8-postgresql.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">PostgreSQL</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          alt="react"
                          src="/assets/icons/icons8-react.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">React</Typography>
                      </Grid>
                      <Grid item>
                        <img
                          alt="sass"
                          src="/assets/icons/icons8-sass.svg"
                          style={{ height: "7vw", width: "7vw" }}
                        />
                        <Typography align="center">Sass</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  style={{
                    backgroundColor: `${theme.palette.imageSample3.main}`,
                    overflow: "hidden"
                  }}
                  elevation={height[2]}
                  classes={{
                    root: classes.paperRoot,
                    elevation1: classes.paper1,
                    elevation2: classes.paper2,
                    elevation3: classes.paper3
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h4"
                      classes={{ root: classes.cardHeader }}
                    >
                      PROJECTS
                    </Typography>
                    <Typography
                      variant="body1"
                      classes={{ root: classes.cardHeader }}
                    >
                      Click pictures to zoom
                    </Typography>
                  </div>
                  <Carousel
                    autoPlay={false}
                    indicators={true}
                    animation="slide"
                    className="carousel"
                  >
                    <Paper classes={{ root: classes.carouselPaper }}>
                      <Typography color="inherit" variant="h6">
                        <a
                          href="https://github.com/colefin8/Listo"
                          style={{ color: "inherit" }}
                        >
                          Listo
                        </a>
                        {" <-- Link to Github"}
                      </Typography>
                      <Typography color="inherit" style={{ marginTop: "1vh" }}>
                        Simple budgeting and list app designed to be
                        user-friendly and user-proof, designed for mobile and
                        uses Amazon S3 for image storage
                      </Typography>
                      <div className="img-container">
                        <img
                          onClick={() => toggleZoom("picture1")}
                          alt="listo screenshot 1"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/Listo1.png"
                        />
                        <img
                          onClick={() => toggleZoom("picture2")}
                          alt="listo screenshot 2"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/Listo2.png"
                        />
                        <img
                          onClick={() => toggleZoom("picture3")}
                          alt="listo screenshot 3"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/Listo3.png"
                        />
                      </div>
                    </Paper>
                    <Paper classes={{ root: classes.carouselPaper }}>
                      <Typography color="inherit" variant="h6">
                        <a
                          href="https://github.com/WLH11clothesapp/ShopSearch"
                          style={{ color: "inherit" }}
                        >
                          LoveToKnow
                        </a>
                        {" <-- Link to Github"}
                      </Typography>
                      <Typography color="inherit" style={{ marginTop: "1vh" }}>
                        Re-design of popular social media site Liketoknow.it.
                        Added functionality with the focus on the user being
                        able to find images of people wearing specific clothing
                        items they search for. Also includes capability of
                        making your own account and adding affiliate links to
                        products you post.
                      </Typography>
                      <div className="img-container">
                        <img
                          onClick={() => toggleZoom("picture4")}
                          alt="love to know screenshot 1"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/Lovetoknow1.png"
                        />
                        <img
                          onClick={() => toggleZoom("picture5")}
                          alt="love to know screenshot 2"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/Lovetoknow2.png"
                        />
                        <img
                          onClick={() => toggleZoom("picture6")}
                          alt="love to know screenshot 3"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/Lovetoknow3.png"
                        />
                      </div>
                    </Paper>
                    <Paper classes={{ root: classes.carouselPaper }}>
                      <Typography color="inherit" variant="h6">
                        <a
                          href="https://github.com/Jeordins-Bois/CardSmart"
                          style={{ color: "inherit" }}
                        >
                          CardSmart
                        </a>
                        {" <-- Link to Github"}
                      </Typography>
                      <Typography color="inherit" style={{ marginTop: "1vh" }}>
                        Flash card making app that uses Amazon Comprehend
                        machine learning to analyze text that users input to
                        automatically generate lists of the important
                        information in text, simplifying the user experience.
                      </Typography>
                      <div className="img-container">
                        <img
                          onClick={() => toggleZoom("picture7")}
                          alt="cardsmart screenshot 1"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/CardSmart1.png"
                        />
                        <img
                          onClick={() => toggleZoom("picture8")}
                          alt="cardsmart screenshot 2"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/CardSmart2.png"
                        />
                        <img
                          onClick={() => toggleZoom("picture9")}
                          alt="cardsmart screenshot 3"
                          style={{ maxHeight: "40vh" }}
                          src="/assets/CardSmart3.png"
                        />
                      </div>
                    </Paper>
                  </Carousel>
                </Paper>
              </Box>
              <ChevronRightIcon
                style={{ fontSize: "4rem", color: "#f5f5f5" }}
                onClick={() => handleRight()}
              />
            </Container>
          </div>
        </ThemeProvider>
      ) : (
        // finally got smart and made the mobile version a separate component
        <Mobile />
      )}
    </>
  );
}

export default App;
