import React from "react";
import classes from "./NavigationItemsLeft.module.css";
import { NavLink } from "react-router-dom";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationItemsLeft = props => (
	<ul className={classes.NavigationItemsLeft} onClick={props.clicked}>
		<NavigationItem>
			<NavLink to="/gallery" exact activeClassName={classes.Active}>
				Gallery
			</NavLink>
		</NavigationItem>
		<NavigationItem>
			<NavLink to="/" exact activeClassName={classes.Active}>
				Create
			</NavLink>
		</NavigationItem>
	</ul>
);

export default navigationItemsLeft;
