import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Page from "./components/Layout/Page/Page";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Layout>
						<Page />
					</Layout>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
