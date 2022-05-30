import { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/material/styles';

const Brand = styled(Typography)(() => ({
	cursor: 'pointer',
	width: 'fit-content',
	"&:hover": {
		textDecoration: 'underline'
	}
}));


const Navbar = ({ handleDarkmode, theme, handleReset }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography component="div" sx={{ flexGrow: 1 }}>
						<Brand variant="h6" onClick={handleReset}>Quiz Game</Brand>
					</Typography>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={handleDarkmode}
					>
						{theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
};

export default memo(Navbar);
