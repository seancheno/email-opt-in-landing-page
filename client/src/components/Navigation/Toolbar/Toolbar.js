import React from "react";
import classes from "./Toolbar.module.css";

import Logo from "../../UI/Logo/Logo";

const toolBar = props => (
	<header className={classes.Toolbar}>
		<div className={classes.Logo}>
			<Logo color={'light'}/>
		</div>
	</header>
);

export default toolBar;
