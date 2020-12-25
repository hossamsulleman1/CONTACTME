
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import useSpring  from 'react-spring/web.cjs'; 

const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));
  
  function SpringModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  }

function FabNav() {
    const classes = useStyles();

    return (
        <div>
 {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton> */}
      <Fab color="secondary" onClick={handleOpen} aria-label="add" className={classes.fabButton}>
        <AddIcon />
      </Fab>
      {/* <div className={classes.grow} />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton edge="end" color="inherit">
        <MoreIcon />
      </IconButton> */}
      

<Modal
aria-labelledby="spring-modal-title"
aria-describedby="spring-modal-description"
className={classes.modal}
open={open}
onClose={handleClose}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
  timeout: 500,
}}
>
<Fade in={open}>
  <div className={classes.paper}>
    <h2 id="spring-modal-title">Spring modal</h2>
    <p id="spring-modal-description">react-spring animates me.</p>
  </div>
</Fade>
</Modal>
</div>
    )
}

export default FabNav;