import React from "react";
import { useTheme, makeStyles } from "@material-ui/styles";
import { GridList, GridListTile, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    grid: {
        padding: '2.5%',
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    cards: {
      height: "95vh",
      marginTop: "2.5%",
      marginBottom: "2.5%",
      width: "95%",
      backgroundColor: "#f5f5f540"
    }
  };
});

const Mobile = props => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540574722410-54cff7a339d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <GridList cellHeight="auto" cols={1} className={classes.grid}>
          <GridListTile style={{ margin: 0, padding: 0 }}>
            <Paper className={classes.cards}>
              <Typography>a;sldkfja;lksdfjal</Typography>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography>a;sldkfja;lksdfjal</Typography>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography>a;sldkfja;lksdfjal</Typography>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography>a;sldkfja;lksdfjal</Typography>
            </Paper>
          </GridListTile>
        </GridList>
      </div>
    </>
  );
};

export default Mobile;
