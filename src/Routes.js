import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import InputPage from "./containers/Inputs"
import DetailsPage from "./containers/Details"
import OfflinePage from "./containers/Offline"

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={InputPage} />
				<Route path="/inputs" component={InputPage} />
				<Route path="/details" component={DetailsPage} />
				<Route path="/offline" component={OfflinePage} />
			</Switch>
		</Router>
	);
}
