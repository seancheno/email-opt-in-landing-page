import React from "react";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemDropDown from "./NavigationItemDropDown/NavigationItemDropDown";

const navigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItem clicked={props.clicked}>
			<NavLink to="/about" exact activeClassName={classes.Active}>
				About
			</NavLink>
		</NavigationItem>
		{/* <NavigationItemDropDown>Get in touch</NavigationItemDropDown> */}
		<NavigationItem clicked={props.clicked}>
			<a href="https://github.com/seancheno/email-opt-in-landing-page" className={classes.NavigationItems}>
				Github
			</a>
		</NavigationItem>
	</ul>
);

export default navigationItems;
