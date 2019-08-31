// import React from "react";
// import classes from "./NavigationItemDropDown.module.css";

// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// class NavigationItemDropDown extends React.Component {
// 	state = {
// 		value: "sean.chenoweth@colorado.edu",
// 		copied: false
// 	};

// 	render() {
// 		return (
// 			<>
// 				<li className={classes.NavigationItemDropDown}>
// 					{this.props.children}
// 				</li>
// 				<div className={classes.DropDown}>
// 					<CopyToClipboard
// 						text={this.state.value}
// 						onCopy={() => this.setState({ copied: true })}
// 					>
// 						<div style={{ marginTop: "6px" }}>
// 							{" "}
// 							<FontAwesomeIcon
// 								icon={"envelope"}
// 								style={{ transform: "translate(-5px,2px)" }}
// 							/>
// 							<span style={{ fontWeight: "300" }}>sean.chenoweth@</span>
// 							<b>colo.edu</b>
// 						</div>
// 					</CopyToClipboard>

// 					{this.state.copied ? (
// 						<span className={classes.Copy}>Copied.</span>
// 					) : null}
// 				</div>
// 			</>
// 		);
// 	}
// }

// export default NavigationItemDropDown;
