import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const Navbar = ({ drawerWidth = 0,isDrawerOpen, setIsDrawerOpen }) => {
    const handleOpenDrawer = () =>{
        setIsDrawerOpen(true)
    };
    
    
  return (
    <AppBar 
        position='fixed'
        
    >
        <Toolbar>
            <Grid 
            container
            justifyContent="space-between"
            >

            <IconButton onClick={handleOpenDrawer}
            color="inherit"
            edge="start"
            sx={{mr: 2, display: {sm: 'none' }}}>
                <MenuOutlined />
            </IconButton>

            <Grid item
            sx={{display: {sx:'flex', sm: 'none', md: 'none' }}}>
                <img className="logo-navbar" src="./canva/Iconos/LOGOFMA.png" alt="" />
            </Grid>

            <Grid item
            sx={{display: {md: 'none', sm: 'none'}}}
            >
                <IconButton 
                    edge="end" 
                    color="tercery" 
                    component={RouterLink} to='/auth'
                    sx={{mt:1}}>
                    <LoginOutlined/>
                </IconButton>

            </Grid>
        </Grid>
        </Toolbar>

    </AppBar>
  )
}
