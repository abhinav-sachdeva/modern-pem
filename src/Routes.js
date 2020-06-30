import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import InputPage from "./containers/Inputs"
import DetailsPage from "./containers/Details"

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Link to="/inputs">Input page</Link>
				</Route>
				<Route path="/inputs" component={InputPage} />
				<Route path="/details" component={DetailsPage} />
			</Switch>
		</Router>
	);
}
