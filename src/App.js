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
  Container,
  Paper
} from "@material-ui/core";
import { amber, blueGrey } from "@material-ui/core/colors";

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
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    paper1: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    paper2: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    paper3: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  };
});

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
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
        <div style={{ width: "80vw" }}>
          <Container
            component="article"
            maxWidth="lg"
            classes={{ root: classes.container }}
          >
            <Paper
              square={true}
              elevation={1}
              classes={{
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
              square={true}
              elevation={2}
              classes={{
                elevation1: classes.paper1,
                elevation2: classes.paper2,
                elevation3: classes.paper3
              }}
            >
              <Table></Table>
            </Paper>
            <Paper
              square={true}
              elevation={3}
              classes={{
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
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
