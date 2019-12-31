import React, { useState } from "react";
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
  CardMedia
} from "@material-ui/core";
import { amber, blueGrey } from "@material-ui/core/colors";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber,
    imageSample1: { main: "#477db8" },
    imageSample2: { main: "#D0954A" },
    imageSample3: { main: "#BB9883" }
  }
});

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
      height: "60vh"
    }
  };
});

function App() {
  const classes = useStyles();

  const [height, setHeight] = useState([3, 2, 1]);

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
    <ThemeProvider theme={theme}>
      <div
        style={{
          overflow: "hidden",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540574722410-54cff7a339d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
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
              style={{ backgroundColor: `${theme.palette.imageSample1.main}` }}
              elevation={height[0]}
              classes={{
                root: classes.paperRoot,
                elevation1: classes.paper1,
                elevation2: classes.paper2,
                elevation3: classes.paper3
              }}
            >
              <Typography variant="h4" classes={{ root: classes.cardHeader }}>
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
                  "I'm a full stack web developer from Provo, UT with a background in finish carpentry"
                }
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
              style={{ backgroundColor: `${theme.palette.imageSample2.main}` }}
              elevation={height[1]}
              classes={{
                root: classes.paperRoot,
                elevation1: classes.paper1,
                elevation2: classes.paper2,
                elevation3: classes.paper3
              }}
            >
              <Typography variant="h4" classes={{ root: classes.cardHeader }}>
                SKILLS
              </Typography>

              <Grid
                container
                spacing="10"
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
              <Typography variant="h4" classes={{ root: classes.cardHeader }}>
                PROJECTS
              </Typography>
              <Carousel autoPlay={false} indicators={true} animation="slide">
                <Paper classes={{ root: classes.carouselPaper }}>
                  <Typography color="inherit">Listo</Typography>
                  <CardMedia image="" />
                </Paper>
                <Paper classes={{ root: classes.carouselPaper }}>
                  <Typography color="inherit">LoveToKnow</Typography>
                </Paper>
                <Paper classes={{ root: classes.carouselPaper }}>
                  <Typography color="inherit">CardSmart</Typography>
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
  );
}

export default App;
