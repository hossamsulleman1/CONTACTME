import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import PageProp from "./PageProp";
import Button from "@material-ui/core/Button";
import Content from "./ProfileFolder/Content";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import IconButton from "@material-ui/core/IconButton";
import "../App.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function IconNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={<PhoneIcon />} label="ME" {...a11yProps(0)} />
          <Tab icon={<PhoneIcon />} label="Linked In" {...a11yProps(1)} />
          <Tab label="Facebook" {...a11yProps(2)} />
          <Tab label="Instagram" {...a11yProps(3)} />
          <Tab label="Snapchat" {...a11yProps(4)} />
          <Tab label="Discord" {...a11yProps(5)} />
          <Tab label="DOOR" icon={<MeetingRoomIcon />} {...a11yProps(6)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Content></Content>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PageProp name="Linked In"></PageProp>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PageProp name="Facebook"></PageProp>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PageProp name="Instagram"></PageProp>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
