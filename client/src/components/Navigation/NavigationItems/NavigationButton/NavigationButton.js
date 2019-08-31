import React from "react";
import classes from "./NavigationButton.module.css";

const navigationButton = props => (
	<a href={props.url} className={classes.Button}>
		{props.children}
	</a>
);
export default navigationButton;
