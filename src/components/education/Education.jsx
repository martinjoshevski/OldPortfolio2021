import React from "react";
import "./Education.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    maxHeight: 445,
  },
});

function Education() {
  const classes = useStyles();
  return (
    <div>
      <div className="education" id="resume">
        <img src="assets/resume.png" alt="" />

        <div className="first__education">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                width="120"
                height="120"
                image="https://i.imgur.com/mthRced.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="h2">
                  Resume
                </Typography>
                <Typography gutterBottom variant="h6"></Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                href="assets/Martin Joshevski CV martinjoshevski.com.pdf"
                download
                rel="noreferrer"
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Education;
