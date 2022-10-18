import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material"
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const Navbar = ({ drawerWidth = 0,isDrawerOpen, setIsDrawerOpen }) => {
    const dispatch = useDispatch()

    const onLogout = () =>{
        dispatch(startLogout())
    };

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
                    onClick={onLogout} 
                    edge="end" 
                    color="tercery" 
                    sx={{mt:1}}>
                    <LoginOutlined/>
                </IconButton>

            </Grid>
        </Grid>
        </Toolbar>

    </AppBar>
  )
}
