import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const StyledAnswerGrid = styled(Grid)(({ theme }) => ({
	paddingTop: theme.spacing(3),
	paddingBottom: theme.spacing(2)
}));

const AnswerTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	}
}));

const AnswerButton = styled(Button)(({ theme }) => ({
	"&.dark": {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			color: "#424242",
			backgroundColor: "#fff"
		}
	},
	"&.success": {
		backgroundColor: theme.palette.success.light
	},
	"&.Mui-disabled": {
		color: "#fff"
	}
}));

const Question = ({ questionState, dispatch, theme, setScore }) => {
	const { mode } = theme.palette;
	const [step, setStep] = useState(0);
	const [showAns, setShowAns] = useState(false);

	const handleSelectAnswer = (ans) => {
		setShowAns(true);
		if (step === 9) {
			return;
		}
		if (ans === questionState[step].correct_answer) {
			setScore(score => score + 1);
		}
		setTimeout(() => {
			setShowAns(false);
			setStep(step + 1);
		}, 1200);
	}

	return (
		<Box width={"100%"} maxWidth="md">
			<Typography gutterBottom variant="h4" textAlign="center">{questionState[step]?.category}</Typography>
			<Divider variant="middle" />
			<AnswerTypography paddingY={2} variant="h5" textAlign="center">
				<span dangerouslySetInnerHTML={{ __html: questionState[step]?.question }} />
			</AnswerTypography>
			<Divider variant="middle" />
			<StyledAnswerGrid container spacing={2}>
				{questionState[step].answers.map((ans, i) => (
					<Grid item xs={12} sm={6} key={i}>
						<AnswerButton disabled={showAns} className={
							ans === questionState[step].correct_answer && showAns ? "success" : "" ||
								mode === "dark" ? "dark" : ""}
							onClick={() => handleSelectAnswer(ans)} variant={mode === "dark" ? "outlined" : "contained"} fullWidth>
							<span dangerouslySetInnerHTML={{ __html: ans }} />
						</AnswerButton>
					</Grid>
				))}
			</StyledAnswerGrid>
		</Box>
	)
}

export default Question