import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Divider from "@material-ui/core/Divider";
import React, { useState } from "react";
import { Text, Heading } from "rebass";
import { makeStyles } from "@material-ui/core/styles";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import FriendsAvatarList from "./FriendsAvatarList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

function Content(props) {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            <p className="HomeTitleSmall">HEY WHATS UP,</p>
            <p className="HomeTitle">{props.Name}</p>
          </div>

          <Divider />
          <div className="statsdiv">
            
            <p className="HomeTitleMedium">MEMBER SINCE</p>
            <p>{props.AccountCreation}</p>
            <p className="HomeTitleMedium">HOURS LOGGED</p>
            <p>{props.HoursLogged}</p>
            <p className="HomeTitleMedium">CHECKLIST TASKS COMPLETED</p>
            <p>{props.TasksCompleted}</p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Divider />

          <div className="statsdiv"></div>
        </Grid>
        <Grid item xs={6}>
          <div className="avatardiv">
            <Avatar className={classes.large} src={props.PhotoUrl}>
              H
            </Avatar>

            <div className="friendsdiv">
              <div className="justifycenter">
                <Divider></Divider>

                <p className="SubHeading">ALL FRIENDS</p>
                <Divider></Divider>
                <br></br>
                <Button>Add Friends</Button>
              </div>

              <div className="friendsdiv2">
                <Container>
                  <FriendsAvatarList></FriendsAvatarList>
                </Container>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* GRAPHS CONTAINER  */}
      <Container>
        <p className="HomeTitleSmall">PERSONAL BLEND</p>
        <Grid container spacing={3}>
          <Grid item xs>
            {/* <PieWithLabel></PieWithLabel> */}
          </Grid>
          <Grid item xs>
            {/* <RadarChart></RadarChart> */}
          </Grid>
        </Grid>
      </Container>
      {/* GRAPHS CONTAINER END  */}
    </Container>
  );
}

export default Content;
