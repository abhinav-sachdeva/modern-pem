import React from 'react';
import { Route } from "react-router-dom";

import InputHeader from "../components/InputHeader"
import InputForm from "../components/InputForm"

export default function InputPage(props) {
	return (
		<React.Fragment>
			<InputHeader />
			<Route path={`${props.match.path}/edit`}>
				<InputForm />
			</Route>

		</React.Fragment>
	);
}