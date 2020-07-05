import React from 'react';
import { Redirect } from "react-router"
import { Route } from "react-router-dom";

import InputHeader from "../components/InputHeader"
import InputForm from "../components/InputForm"

export default function InputPage(props) {
	if (!navigator.onLine) return <Redirect to="/offline" />
	return (
		<React.Fragment>
			<InputHeader />
			<Route path={`${props.match.path}/edit`}>
				<InputForm />
			</Route>

		</React.Fragment>
	);
}