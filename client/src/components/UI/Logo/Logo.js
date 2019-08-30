import React from "react";
import classes from "./Logo.module.css";

import defaultLogo from "../../../assets/images/logo.png";

const logo = props => (
		<div className={classes.Logo}>
			<img src={defaultLogo} alt="Daily Pulse" />
		</div>
);

export default logo;
