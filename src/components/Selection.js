import { memo, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { styled } from '@mui/material/styles';

const RowSpacer = styled('div')(({ theme }) => ({
	marginBottom: theme.spacing(4),
	[theme.breakpoints.down('md')]: {
		marginBottom: theme.spacing(2)
	}
}));

const Selection = ({ startGame }) => {
	const [inputs, setInputs] = useState({ cat: "any", dif: "any", type: "any" });
	const handleChange = e => {
		setInputs(state => ({
			...state,
			[e.target.name]: e.target.value
		}));
	}
	return (
		<Box width={"100%"} maxWidth="md">
			<RowSpacer>
				<Typography textAlign="center" mb={2} variant="h6">Category</Typography>
				<TextField
					fullWidth
					select
					label="Select Catergory"
					name="cat"
					value={inputs.cat}
					onChange={handleChange}
					variant="filled"
				>
					<MenuItem value="any">Any</MenuItem>
					<MenuItem value="19">Math</MenuItem>
					<MenuItem value="21">Sports</MenuItem>
					<MenuItem value="22">Geography</MenuItem>
					<MenuItem value="23">History</MenuItem>
					<MenuItem value="25">Art</MenuItem>
					<MenuItem value="27">Animals</MenuItem>
					<MenuItem value="20">Mythology</MenuItem>
				</TextField>
			</RowSpacer>
			<RowSpacer>
				<Typography textAlign="center" mb={2} variant="h6">Difficulty</Typography>
				<TextField
					fullWidth
					select
					label="Select Difficulty"
					name="dif"
					value={inputs.dif}
					onChange={handleChange}
					variant="filled"
				>
					<MenuItem value="any">Any</MenuItem>
					<MenuItem value="easy">Easy</MenuItem>
					<MenuItem value="medium">Medium</MenuItem>
					<MenuItem value="hard">Hard</MenuItem>
				</TextField>
			</RowSpacer>
			<RowSpacer>
				<Typography textAlign="center" mb={2} variant="h6">Type</Typography>
				<TextField
					fullWidth
					select
					label="Select Type"
					name="type"
					value={inputs.type}
					onChange={handleChange}
					variant="filled"
					disabled={inputs.cat === "19"}
				>
					<MenuItem value="any">Any</MenuItem>
					<MenuItem value="multiple">Multiple Choice</MenuItem>
					<MenuItem value="boolean">True / False</MenuItem>
				</TextField>
			</RowSpacer>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Button
					variant="contained"
					size="large"
					endIcon={<PlayArrowRoundedIcon />}
					onClick={() => startGame({ ...inputs })}
				>Start</Button>
			</div>
		</Box>
	)
}

export default memo(Selection);