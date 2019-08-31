import React from "react";
import classes from "./SideDrawer.module.css";

import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItemsLeft from "../NavigationItemsLeft/NavigationItemsLeft";
import DrawerClose from "./DrawerClose/DrawerClose";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
			<div style={{marginTop: '7px'}}/> 

				<div className={classes.Logo}>
					<Logo color={'dark'} location={'sidedrawer'}/>
					<DrawerClose clicked={props.closed} />
				</div>

				<hr className={classes.Seperator} />
				<NavigationItemsLeft clicked={props.closed} />
				<hr className={classes.Seperator} />
				<nav>
					<NavigationItems clicked={props.closed} />
				</nav>
			</div>
		</>
	);
};

export default sideDrawer;