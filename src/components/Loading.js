import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function Loading () {
	return (
		<Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
			<CircularProgress color="secondary" sx={{ marginY: 3 }} />
			<Typography color="textSecondary" sx={{ fontStyle: "italic" }} >
				Getting ready
			</Typography>
		</ Box>
	)
}

export default Loading