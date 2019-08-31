import React from "react";
import classes from "./DrawerClose.module.css";

const drawerClose = props => (
	<div onClick={props.clicked} className={classes.DrawerClose} />
);

export default drawerClose;
