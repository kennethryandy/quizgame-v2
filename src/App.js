
import { useCallback, useState, memo } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import useQuestionReducer from './reducers/useQuestionReducer';
import backupQuestion from "./utils/backupQuestion.json";
//Components
import Navbar from "./components/Navbar";
import Selection from './components/Selection';
import AppBarSpacer from './utils/AppBarSpacer';
import Loading from './components/Loading';


const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const darkTheme = {
	palette: {
		mode: "dark",
		primary: {
			light: "#272b31",
			main: "#393e46",
			dark: "#60646b",
			contrastText: "#fff",
		},
		secondary: {
			light: "#a6a6a6",
			main: "#eeeeee",
			dark: "#f1f1f1",
			contrastText: "#000",
		},
		background: {
			paper: "#424242"
		}
	},
};
const lightTheme = {
	palette: {
		mode: "light",
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
	components: {
		MuiFilledInput: {
			variants: [
				{
					props: { variant: "filled" },
					style: { backgroundColor: "transparent" }
				}
			]
		}
	}
};


function App () {
	const [_, dispatch] = useQuestionReducer();
	const [start, setStart] = useState(false);
	const [loading, setLoading] = useState(false);
	const [theme, setTheme] = useState(lightTheme);

	const handleDarkmode = useCallback(() => {
		setTheme(state => state.palette.mode === "dark" ? lightTheme : darkTheme);
	}, [setTheme]);

	const startGame = async ({ cat, dif, type }) => {
		// const API_URL = `https://opentdb.com/api.php?amount=10${cat !== "any" ? "&category=" + cat : ""}${dif !== "any" ? "&difficulty=" + dif : ""}${type !== "any" ? "&type=" + type : ""}`;
		setLoading(true);
		// const res = await (await fetch(API_URL)).json();
		// if (res && res.response_code === 0) {
		// 	dispatch({ type: "SET_QUESTION", payload: res.results });
		// }else {
		dispatch({ type: "SET_QUESTION", payload: backupQuestion.backupQuestion });
		// }
		setStart(true);
		setLoading(false)
	};

	return (
		<ThemeProvider theme={responsiveFontSizes(createTheme(theme))}>
			<Paper square elevation={0} sx={{ minHeight: "100vh" }}>
				<Navbar handleDarkmode={handleDarkmode} theme={theme} />
				<AppBarSpacer />
				<StyledContainer>
					{loading ? (
						<Loading />
					) : (
						start ? <div>sdsd</div> : <Selection startGame={startGame} />
					)}
				</StyledContainer>
			</Paper>
		</ThemeProvider>
	);
}

export default memo(App);
