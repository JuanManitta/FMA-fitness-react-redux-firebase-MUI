import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
        position='fixed'
        sx={{
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            ml: {sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
            color="inherit"
            edge="start"
            sx={{mr: 2, display: {sm: 'none' }}}>
                <MenuOutlined/>
            </IconButton>
            <Grid container
                direction='row'
                justifyContent='end'
                alignItems='center'
            >
                <IconButton color="tercery" component={RouterLink} to='/auth'>
                    <LoginOutlined />
                </IconButton>

            </Grid>
        </Toolbar>

    </AppBar>
  )
}
