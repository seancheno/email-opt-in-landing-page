import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = props => (
	<li className={classes.NavigationItem} onClick={props.clicked}>
		{props.children}
	</li>
);

export default navigationItem;
