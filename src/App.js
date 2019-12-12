import React, { useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import {
  Table,
  Tab,
  Tabs,
  TabPanel,
  Drawer,
  Container,
  Paper
} from "@material-ui/core";
import { amber, blueGrey } from "@material-ui/core/colors";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber
  }
});

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  drawer: {
    height: "100vh",
    width: "20vw"
  },
  drawerPaper: {},
  drawerTabs: {},
  tabs: {
    borderRight: `1px solid ${theme.palette.secondary}`
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="left"
        open={true}
        variant="persistent"
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}
      >
        <Tabs className={classes.tabs} orientation="vertical">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(0)} />
        </Tabs>
      </Drawer>
      <Container component="article" maxWidth="lg">
        <Paper>About</Paper>
        <Paper>Skills</Paper>
        <Paper>Projects</Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
