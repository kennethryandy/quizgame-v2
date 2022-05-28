import { styled } from '@mui/material/styles';

const AppBarSpacer = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar
}));

export default AppBarSpacer;