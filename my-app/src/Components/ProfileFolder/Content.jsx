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
import ChipSet from '../ChipSet'
import AvatarChip from '../AvatarChip'

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
    // <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <div className="headingdiv">
            {/* <p className="HomeTitleSmall">HEY, Welcome To </p> */}
            <p className="HomeTitle">HOSSAM</p>

<Divider></Divider>
          </div>

          </Grid>

          <Grid item xs={12} md={2}>
         
         <div className='floatright'>
           {/* not real class */}
         <div className="avatardiv">
            <Avatar className={classes.large} 
            src='https://lh3.googleusercontent.com/a-/AOh14Gh44yE770ieP78t8bjwveUFJR3ihG8mAcY2WA0pRg=s96-c'
            >
              H
            </Avatar>
            <br/>
            <br/>
            <div className='center'>
              {/* not real class */}
            <ChipSet></ChipSet>
            </div>
            </div>
            </div>
             
</Grid>

<Grid item md={6}>
<p className="SubHeading">ALL FRIENDS</p>
                

                {/* List */}
                <div>
                  {/* chip div flexbox this*/}
                  <AvatarChip></AvatarChip>
                </div>


</Grid>

<Grid item md={6}>

<Button>Add Friends</Button>
              

             
          
              <Container>
                <FriendsAvatarList></FriendsAvatarList>
              </Container>
         
</Grid>
        

<Grid item xs={12}>

<p className="SubHeading">Social Media</p>



<SMCard></SMCard>

<Divider />

</Grid>

{/* 
<Grid item xs={12}>
  
  
  
  </Grid>} */}







  </Grid>
  );
} 

export default Content;
