import React, { Component } from "react";
import classes from "./EmailForm.module.css";

import { Redirect } from "react-router-dom";

import apiUrl from "../../constants/apiUrl";

const axios = require("axios");

class EmailForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			loading: false,
			sucess: false
		};
	}

	handleLoadingState = loading => {
		//Set loading flag
		this.setState({ loading: loading });
	};

	handleSendEmail = () => {
		console.log(this.state.email);
		this.handleLoadingState(true);
		axios
			.post(`${apiUrl}`, {
				email: this.state.email
			})
			.then(res => {
				console.log(res);
				if (res.data.success) {
					//If the response from MailChimp is good...
					this.handleLoadingState(false);
					this.setState({ success: true });
				} else {
					//Handle the bad MailChimp response...
					this.handleLoadingState(false);
				}
			})
			.catch(error => {
				//This catch block returns an error if Node API returns an error
				this.handleLoadingState(false);
			});
	};

	render() {
		if (this.state.loading) {
			return (
				<div className={classes.EmailForm}>
					<img
						src="https://media1.tenor.com/images/a3ca17636f365c6b0a0d11fc6a1240b5/tenor.gif?itemid=11276352"
						alt="Loading Gif"
						height="42"
						width="42"
					/>
				</div>
			);
		}

		if (this.state.success) {
			return <Redirect to="/thank-you" />;
		}

		return (
			<div className={classes.EmailForm}>
				<input
					type="email"
					name="EMAIL"
					id="MERGE0"
					placeholder="Enter your email"
					value={this.state.email}
					onChange={e => {
						this.setState({ email: e.target.value });
					}}
					autoCapitalize="off"
					autoCorrect="off"
				/>
				<button onClick={this.handleSendEmail}>Submit</button>
			</div>
		);
	}
}

export default EmailForm;
