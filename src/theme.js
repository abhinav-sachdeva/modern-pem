import { createMuiTheme } from "@material-ui/core";
// const darkTheme = {
// 	palette: {
// 		type: 'dark',
// 		primary: { main: '#07ddff' },
// 		secondary: { main: '#04aeca' },
// 		background: {
// 			paper: '#424242'
// 		}
// 	},
// 	typography: {
// 		fontFamily: 'Nunito, sans-serif',
// 	}
// };

const lightTheme = {
	palette: {
		primary: {
			main: "#1d4354",
		},
		secondary: {
			main: "#efefef"
		},
		type: "light"
	},
	typography: {
		fontFamily: 'Nunito, sans-serif',
	}
}

const theme = createMuiTheme(lightTheme);

export default theme
