import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Content from './Content';
import BottomBar from './BottomBar';
import UserList from './UserList';
import TabsP from './TabsP';

const useStyles = makeStyles((theme) => ({
    paper: {
        // position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },


  }));

function TabPaper () {
    const classes = useStyles();
return (

    <Grid container direction="column">
    <Grid item>
      {/* this is where the header will be  */}
      <TabsP></TabsP>
    </Grid>
            {/* grids can be items grids containers or both at the same time  */}
    <Grid item container>
      {/* on small screens this will take up 2 but on extra smnall screens this will take up 0 as specified   */}
      <Grid item xs={0} sm={2} />

<Grid item xs={12} sm={8}>
{/* this is where the content will be  */}


</Grid>
      
      <Grid item xs={0} sm={2} />
      {/* ^these xs 2 are for the side gutters on the app */}
    </Grid>
  </Grid>

)

}

export default TabPaper;