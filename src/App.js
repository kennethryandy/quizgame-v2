
import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
//Components
import Navbar from "./components/Navbar";

function App () {
	const [theme, setTheme] = useState(() => ({
		palette: {
			mode: "dark",
			primary: {
				light: "#00695f",
				main: "#009688",
				dark: "#33ab9f",
				contrastText: "#fff",
			},
			secondary: {
				light: "#00a152",
				main: "#00e676",
				dark: "#33eb91",
				contrastText: "#000",
			},
		},
	}));

	const handleDarkmode = () => {
		setTheme(state => ({
			...state,
			palette: {
				...state.palette,
				mode: state.palette.mode === "dark" ? "light" : "dark"
			}
		}))
	};

	return (
		<ThemeProvider theme={responsiveFontSizes(createTheme(theme))}>
			<Navbar handleDarkmode={handleDarkmode} theme={theme} />
		</ThemeProvider>
	);
}

export default App;
