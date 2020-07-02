import React from "react"
export const defaultUserContext = {
	loggedIn: true,
	disclaimerShown: false,
	updateDisclaimer: function (val) {
		this.disclaimerShown = val
	},
	inputs: {
		input_coverage: "",
		input_zipcode: ""
	},
	setInputs: function (val) {
		this.inputs = { ...val }
	},

}
const UserContext = React.createContext(defaultUserContext);

export default UserContext;