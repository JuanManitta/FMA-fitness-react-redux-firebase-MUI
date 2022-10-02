import { AddCard, CalendarMonth, FitnessCenter, FormatListBulleted, MenuOutlined, MilitaryTech } from '@mui/icons-material'
import {  Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

export const Sidebar = ({ drawerWidth, isOpen, setIsOpen }) => {

    const navigate = useNavigate();

    const onRankingNavigate = () =>{
        navigate('/ranking', {
            replace: true
        });
    };
    const onCalendarioNavigate = () =>{
        navigate('/calendario', {
            replace: true
        });
    };
    const onActividadesNavigate = () =>{
        navigate('/actividades', {
            replace: true
        });
    };
    const onEquipoNavigate = () =>{
        navigate('/equipo', {
            replace: true
        });
    };
    const onSuscripcionNavigate = () =>{
        navigate('/suscripcion', {
            replace: true
        });
    };
    const handleBurguerModal = () =>{
        setIsOpen(true)
    }

    
   
  return (
    <Box
        component="nav"
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0 }, display: {xs: isOpen === true ? 'none' : 'block', sm: 'block'}  }}
    >
        <Drawer
            component={Paper}
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' }, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth , boxShadow: 3 , backgroundColor: 'primary.main' }
            }}
        >
            <Toolbar 
            sx={{display: 'block', paddingLeft: 0 }}>
                <Grid
                container
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{display: 'flex' }}>
                    <IconButton
                        onClick={handleBurguerModal} 
                        sx={{mr: 1, display: {sm: 'none'}, color: 'tercery.main', ':hover': {backgroundColor: 'primary.main'} }}>
                            <MenuOutlined/>
                    </IconButton>
                    <img className='logo_sidebar' src="./canva/Iconos/LOGOFMA.png" alt="" />
                </Grid>
            </Toolbar>
            <List>
                <ListItem 
                    
                    disablePadding
                    sx={{mt: '40px', ':hover': {backgroundColor: 'secondary.main'} }}
                >
                    <ListItemButton onClick={onActividadesNavigate}
                    >
                        <ListItemIcon
                        >
                            <FormatListBulleted className='icon'/>
                        </ListItemIcon>
                        <Grid 
                        container color="white">
                            <ListItemText primary='ACTIVIDADES'/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding
                    sx={{mt: '12px', ':hover': {backgroundColor: 'secondary.main' }}}
                >
                    <ListItemButton
                    onClick={onRankingNavigate} 
                    >
                        <ListItemIcon>
                            <MilitaryTech className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
                            <ListItemText primary='RANKING' />
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding
                    sx={{mt: '12px', ':hover': {backgroundColor: 'secondary.main' }}}
                >
                    <ListItemButton
                    onClick={onEquipoNavigate} 
                    >
                        <ListItemIcon>
                            <FitnessCenter className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
                            <ListItemText primary='EQUIPO' />
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding
                    sx={{mt: '12px', ':hover': {backgroundColor: 'secondary.main'} }}
                >
                    <ListItemButton onClick={onCalendarioNavigate}>
                        <ListItemIcon>
                            <CalendarMonth className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
                            <ListItemText primary='CALENDARIO'/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding
                    sx={{mt: '12px', ':hover': {backgroundColor: 'secondary.main'} }}
                >
                    <ListItemButton 
                    onClick={onSuscripcionNavigate}>
                        <ListItemIcon>
                            <AddCard className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
                            <ListItemText primary='SUSCRIBIRME'/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>

    </Box>
  )
}
