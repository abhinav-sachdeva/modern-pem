import React from "react"
export const defaultBenefitsContext = {
	medical: [],
	dental: [],
	vision: [],
	annual: [],
	state: "",
	setBenefits: function (key, val) {
		this[key] = val
	}
}
const BenefitsContext = React.createContext(defaultBenefitsContext);

export default BenefitsContext;
