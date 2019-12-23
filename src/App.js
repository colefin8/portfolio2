import React, { useState } from "react";
import gsap from "gsap";
import Carousel from "react-material-ui-carousel";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import {
  Table,
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
                  <Typography variant="body1" align="center">
                    {
                      "Changing careers to web development offers me the ability to apply the same skills I learned of providing custom high quality products tailored to the client"
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

              <Table></Table>
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
