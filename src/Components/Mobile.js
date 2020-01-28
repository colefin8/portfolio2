import React from "react";
import { useTheme, makeStyles } from "@material-ui/styles";
import {
  Grid,
  GridList,
  GridListTile,
  Paper,
  Typography,
  Link
} from "@material-ui/core";
const useStyles = makeStyles(() => {
  return {
    grid: {
      padding: "2.5%",
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    cards: {
      height: "95vh",
      marginBottom: "2.5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "95%",
      backgroundColor: "#00000050",
      color: "#f5f5f5",
      textShadow: "1px 1px black"
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
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly"
                }}
              >
                <div>
                  <Typography variant="h3" align="center">
                    {"Cole Finlayson"}
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{ color: "#f5f5f5" }}
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
                </div>
                <Typography variant="h4" align="center">
                  {/* old school <br/> */}
                  <br />
                  <br />
                  {"Contact"}
                  <br />
                  <br />
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
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
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
              ></div>
              <Typography variant="h6" align="center">
                {
                  "Changing careers to web development gives me the ability to apply the skills I learned -"
                }
                <br />
                {
                  "providing custom high quality products that are tailored to the client"
                }
              </Typography>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography variant="h4">
                {"Skills"}
                <br />
                <br />
              </Typography>

              <Grid container direction="column" justify="space-around">
                <Grid container direction="row" justify="space-around">
                  <Grid item>
                    <img
                      alt="amazons3"
                      src="/assets/icons/white/icons8-amazon-s3.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">Amazon S3</Typography>
                  </Grid>
                  <Grid item>
                    <img
                      alt="css"
                      src="/assets/icons/white/icons8-css3.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">CSS</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="space-around">
                  <Grid item>
                    <img
                      alt="github"
                      src="/assets/icons/white/icons8-github.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">GitHub</Typography>
                  </Grid>
                  <Grid item>
                    <img
                      alt="javascript"
                      src="/assets/icons/white/icons8-javascript-logo.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">Javascript</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="space-around">
                  <Grid item>
                    <img
                      alt="materialui"
                      src="/assets/icons/white/icons8-material-ui.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">Material UI</Typography>
                  </Grid>
                  <Grid item>
                    <img
                      alt="nodejs"
                      src="/assets/icons/white/icons8-nodejs.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">NodeJS</Typography>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="space-around">
                  <Grid item>
                    <img
                      alt="postgresql"
                      src="/assets/icons/white/icons8-postgresql.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">PostgreSQL</Typography>
                  </Grid>
                  <Grid item>
                    <img
                      alt="react"
                      src="/assets/icons/white/icons8-react.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">React</Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <img
                      alt="sass"
                      src="/assets/icons/white/icons8-sass.svg"
                      style={{ height: "25vw", width: "25vw" }}
                    />
                    <Typography align="center">Sass</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography variant="h4">
                {"Listo"}
                <br />
                <br />
              </Typography>
              <Typography style={{ width: "80%" }} variant="h6">
                {
                  "Simple budgeting and list app designed to be user-friendly and user-proof, designed for mobile and uses Amazon S3 for image storage"
                }
                <br />
                <br />

                <a
                  href="https://github.com/colefin8/Listo"
                  style={{ color: "inherit" }}
                >
                  {"Link to Github"}
                </a>
              </Typography>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography variant="h4">
                {"Love to Know It"}
                <br />
                <br />
              </Typography>
              <Typography style={{ width: "80%" }} variant="h6">
                {
                  "Re-design of popular social media site Liketoknow.it.  Added functionality with the focus on the user being able to find images of people wearing specific clothing items they search for. Also includes capability of making your own account and adding affiliate links to products you post."
                }
                <br />
                <br />
                <a
                  href="https://github.com/WLH11clothesapp/ShopSearch"
                  style={{ color: "inherit" }}
                >
                  {"Link to Github"}
                </a>
              </Typography>
            </Paper>
          </GridListTile>
          <GridListTile>
            <Paper className={classes.cards}>
              <Typography variant="h4">
                {"Card Smart"}
                <br />
                <br />
              </Typography>
              <Typography style={{ width: "80%" }} variant="h6">
                {
                  "Flash card making app that uses Amazon Comprehend machine learning to analyze text that users input to automatically generate lists of the important information in text, simplifying the user experience."
                }
                <br />
                <br />
                <a
                  href="https://github.com/Jeordins-Bois/CardSmart"
                  style={{ color: "inherit" }}
                >
                  {"Link to Github"}
                </a>
              </Typography>
            </Paper>
          </GridListTile>
        </GridList>
      </div>
    </>
  );
};

export default Mobile;
