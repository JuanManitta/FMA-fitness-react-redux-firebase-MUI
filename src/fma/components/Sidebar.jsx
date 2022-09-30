import { FitnessCenter, FormatListBulleted, MilitaryTech, Paid, Person, TurnedInNot } from '@mui/icons-material'
import {  Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Sidebar = ({drawerWidth}) => {

    const [isActive, setIsActive] = useState(true)
    const navigate = useNavigate();

    const onRankingNavigate = () =>{
        navigate('/ranking', {
            replace: true
        });
    };
    const onAlumnosNavigate = () =>{
        navigate('/alumnos', {
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
    const onCuotasNavigate = () =>{
        navigate('/cuotas', {
            replace: true
        });
    };
  return (
    <Box
        component="nav"
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0 }}}
    >
        <Drawer
            component={Paper}
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' }, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth , boxShadow: 3 , backgroundColor: 'primary.main' }
            }}
        >
            <Toolbar >
                <Grid
                container
                direction="column"
                alignContent="center">
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
                            <MilitaryTech className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
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
                            <FormatListBulleted className='icon'/>
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
                    <ListItemButton onClick={onAlumnosNavigate}>
                        <ListItemIcon>
                            <Person className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
                            <ListItemText primary='ALUMNOS'/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding
                    sx={{mt: '12px', ':hover': {backgroundColor: 'secondary.main'} }}
                >
                    <ListItemButton 
                    onClick={onCuotasNavigate}>
                        <ListItemIcon>
                            <Paid className='icon'/>
                        </ListItemIcon>
                        <Grid container color="white">
                            <ListItemText primary='CUOTAS'/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>

    </Box>
  )
}
