import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import RadarChart from "../Graphs/RadarChart";
// import PieWithLabel from "../Graphs/PieWithLabel";
import Divider from "@material-ui/core/Divider";
import React, { useState } from "react";
import { Text, Heading } from "rebass";
import { makeStyles } from "@material-ui/core/styles";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import FriendsAvatarList from "./FriendsAvatarList";
import { useContext } from "react";
// import { SemContext } from "../../SemContext";
import SMCard from '../SMCard';

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
  // const [authInfo , setAuthInfo] = useContext(SemContext)
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            {/* <p className="HomeTitleSmall">HEY, Welcome To </p> */}
            <p className="HomeTitle">HOSSAM</p>
          </div>

          <Divider />
          <div className="statsdiv">
            {/* <p className="HomeTitleMedium">LAST SIGN IN</p> */}
            {/* <p>{authInfo.lastSignInTime}</p> */}
            {/* FIX */}
            {/* <p className="HomeTitleMedium">MEMBER SINCE</p> */}
            {/* <p>{authInfo.creationTime}</p> */}
            {/* <p className="HomeTitleMedium">HOURS LOGGED</p>
            <p>{props.HoursLogged}</p>
            <p className="HomeTitleMedium">CHECKLIST TASKS COMPLETED</p>
            <p>{props.TasksCompleted}</p> */}

<p className="SubHeading">Social Media</p>



<SMCard></SMCard>




          </div>
          <br></br>
          <br></br>
          <br></br>
          <Divider />

          <div className="statsdiv"></div>
        </Grid>
        <Grid item xs={6}>
          <div className="avatardiv">
            <Avatar className={classes.large} 
            // src={authInfo.photoURL}
            >
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

    
    </Container>
  );
}

export default Content;
