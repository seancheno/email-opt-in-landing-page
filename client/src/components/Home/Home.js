import React, { Component } from "react";
import classes from "./Home.module.css";

import EmailForm from "../EmailForm/EmailForm";

class Home extends Component {
	render() {
		return (
			<div className={classes.Home}>
				<div className={classes.LeftCol}>
					<h1>
						Lorem ipsum <span>dolor</span>
					</h1>
					<h2>Excepteur sint occaecat cupidatat</h2>
					<h3>
						Lacus vel facilisis volutpat est velit egestas dui. Pellentesque
						elit ullamcorper dignissim cras tincidunt. Tincidunt lobortis
						feugiat vivamus at augue eget.
					</h3>
					<EmailForm />
				</div>
				<div className={classes.RightCol} />
			</div>
		);
	}
}

export default Home;
