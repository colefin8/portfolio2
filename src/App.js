import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import {
  makeStyles,
  createMuiTheme,
  useTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import {
  Table,
  Tab,
  Tabs,
  Typography,
  Drawer,
  Box,
  Container,
  Paper
} from "@material-ui/core";
import { amber, blueGrey } from "@material-ui/core/colors";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import "./App.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber
  }
});

const useStyles = makeStyles(() => {
  console.log(theme);
  return {
    drawer: {},
    drawerPaper: {
      height: "100vh",
      width: "20vw"
    },
    drawerTabs: {},
    tabs: {
      borderRight: `1px solid ${theme.palette.secondary}`
    },
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
      width: "50vw"

      // backgroundColor: "rgba(245,245,245, .01)"
    },
    paper1: {
      marginTop: "-39.5vh",
      marginLeft: "-24.5vw",
      backgroundColor: "blue",
      color: theme.palette.primary.contrastText,
      zIndex: 1
    },
    paper2: {
      marginTop: "-39.75vh",
      marginLeft: "-24.75vw",
      backgroundColor: "white",
      color: theme.palette.secondary.contrastText,
      zIndex: 2
    },
    paper3: {
      marginTop: "-40vh",
      marginLeft: "-25vw",
      backgroundColor: "red",
      color: theme.palette.primary.contrastText,
      zIndex: 3
    }
  };
});

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [height, setHeight] = useState([3, 2, 1]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRight = () => {
    const newHeights = height.map(e => {
      if (e === 3) {
        return 1;
      } else {
        return e + 1;
      }
    });
    setHeight(newHeights);
  };

  const handleLeft = () => {
    const newHeights = height.map(e => {
      if (e === 1) {
        return 3;
      } else {
        return e - 1;
      }
    });
    setHeight(newHeights);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Drawer
          anchor="left"
          open={true}
          variant="persistent"
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
        >
          <Tabs
            className={classes.tabs}
            orientation="vertical"
            onChange={handleChange}
            value={value}
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Skills" {...a11yProps(1)} />
            <Tab label="Projects" {...a11yProps(2)} />
          </Tabs>
        </Drawer>
        <div
          style={{
            width: "80vw",
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
                elevation={height[0]}
                classes={{
                  root: classes.paperRoot,
                  elevation1: classes.paper1,
                  elevation2: classes.paper2,
                  elevation3: classes.paper3
                }}
              >
                <Typography color="inherit">
                  {"I'm a full stack web developer from Provo, UT"}
                </Typography>
              </Paper>
              <Paper
                elevation={height[1]}
                classes={{
                  root: classes.paperRoot,
                  elevation1: classes.paper1,
                  elevation2: classes.paper2,
                  elevation3: classes.paper3
                }}
              >
                <Table></Table>
              </Paper>
              <Paper
                elevation={height[2]}
                classes={{
                  root: classes.paperRoot,
                  elevation1: classes.paper1,
                  elevation2: classes.paper2,
                  elevation3: classes.paper3
                }}
              >
                <Carousel autoPlay={false} indicators={true} animation="slide">
                  <Typography color="inherit">Listo</Typography>
                  <Typography color="inherit">LoveToKnow</Typography>
                  <Typography color="inherit">CardSmart</Typography>
                </Carousel>
              </Paper>
            </Box>
            <ChevronRightIcon
              style={{ fontSize: "4rem", color: "#f5f5f5" }}
              onClick={() => handleRight()}
            />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
