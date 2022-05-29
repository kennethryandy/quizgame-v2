import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ReplayIcon from "@mui/icons-material/Replay";

const FinalScore = ({ score, handleReset, theme, questions }) => {
	const { mode } = theme.palette;
	// secondary={<Typography dangerouslySetInnerHTML={{ __html: "Correct Answer: " + qstn.correct_answer }
	return (
		<Box width={"100%"} maxWidth="md">
			<Typography variant="h6" textAlign="center">You score {score} out of 10</Typography>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<IconButton
					color={mode === "dark" ? "inherit" : "primary"}
					size="large"
					onClick={handleReset}>
					<ReplayIcon />
				</IconButton>
			</Box>
			<Box>
				<List>
					{questions.map(qstn => (
						<>
							<ListItem>
								<ListItemText primary={<Typography dangerouslySetInnerHTML={{ __html: qstn.question }} />} secondary={<span>Correct Answer: <strong>{qstn.correct_answer}</strong></span>} />
							</ListItem>
							<Divider />
						</>
					))}
				</List>
			</Box>
		</Box>
	)
}

export default FinalScore