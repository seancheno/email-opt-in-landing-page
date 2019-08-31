import React from "react";
import classes from "./Toolbar.module.css";

import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemsLeft from "../NavigationItemsLeft/NavigationItemsLeft";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolBar = props => (
	<header className={classes.Toolbar}>
		<div className={classes.Logo}>
			<Logo color={'light'}/>
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItemsLeft />
		</nav>
		<DrawerToggle drawerToggle={props.drawerToggle} />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolBar;
