import React, { Component } from "react";
import classes from "./Page.module.css";

import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Home from "../../Home/Home";
import ThankYou from "../../ThankYou/ThankYou";

class Page extends Component {
	render() {
		return (
			<div id={"page"} className={classes.Page}>
				<div style={{marginBottom: '65px'}}/>
				<Route exact path="/" component={Home} />
				<Route exact path="/thank-you" component={ThankYou} />
			</div>
		);
	}
}

export default withRouter(Page);
