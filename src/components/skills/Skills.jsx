import React from "react";
import "./Skills.scss";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),

    "&:hover": {
      width: theme.spacing(12),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();
  return (
    <div className="half">
      <img src="assets/percentage.png" alt="" />

      <div className="avatars" id="skills">
        <div className="container__avatars">
          <Avatar
            alt="HTML5"
            title="HTML5"
            className={classes.large}
            src="assets/p16.png"
          />
          <Avatar
            alt="JavaScript"
            title="JavaScript"
            className={classes.large}
            src="assets/p3.png"
          />
          <Avatar
            alt="CCS3"
            title="CCS3"
            className={classes.large}
            src="assets/p17.png"
          />
          <Avatar
            alt="WordPress"
            title="WordPress"
            className={classes.large}
            src="assets/wp.png"
          />
          <Avatar
            alt="Node.js"
            title="Node.js"
            className={classes.large}
            src="assets/p1.png"
          />
          <Avatar
            alt="Sass"
            title="Sass"
            className={classes.large}
            src="assets/p5.png"
          />
          <Avatar
            alt="React"
            title="React"
            className={classes.large}
            src="assets/p6.png"
          />
          <Avatar
            alt="Taildwind CSS"
            title="Taildwind CSS"
            className={classes.large}
            src="assets/p7.png"
          />
          <Avatar
            alt="Git"
            title="Git"
            className={classes.large}
            src="assets/p8.png"
          />
          <Avatar
            alt="MongoDB"
            title="MongoDB"
            className={classes.large}
            src="assets/p30.png"
          />
          <Avatar
            alt="MySQL"
            title="MySQL"
            className={classes.large}
            src="assets/p10.png"
          />
          <Avatar
            alt="Material-UI"
            title="Material-UI"
            className={classes.large}
            src="assets/p12.png"
          />
          <Avatar
            alt="Firebase"
            title="Firebase"
            className={classes.large}
            src="assets/p15.png"
          />

          <Avatar
            alt="Adobe Photoshop"
            title="Adobe Photoshop"
            className={classes.large}
            src="assets/p20.png"
          />
          <Avatar
            alt="Adobe Illustrator"
            title="Adobe Illustrator"
            className={classes.large}
            src="assets/p21.png"
          />
          <Avatar
            alt="Adobe XD"
            title="Adobe XD"
            className={classes.large}
            src="assets/p22.png"
          />
        </div>
      </div>
    </div>
  );
}
