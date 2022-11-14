import { AddCard, CalendarMonth, FitnessCenter, FormatListBulleted, Home, LoginOutlined, MenuOutlined, MilitaryTech } from '@mui/icons-material'
import { Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth/thunks';
import logoFma from '../../../canva/Iconos/LOGOFMA.png';

export const DrawerSidebar = ({isDrawerOpen, setIsDrawerOpen }) => {

    const { displayName } = useSelector( state => state.auth )

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(startLogout())
    }

    const handleLogout = () =>{
        navigate('/auth', {
            replace: true
        });
    };
    const onInicioNavigate = () =>{
        navigate('/inicio', {
            replace: true
        });
    };
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
    const navigateCuenta = () =>{
        navigate('/cuenta', {
            replace: true
        });
        
    };
    const handleCloseDrawer = () =>{
        setIsDrawerOpen(false)
    }
    

  return (
  <>
        <Grid
        container
        direction="row"
        alignContent="center"
        justifyContent="center"
        sx={{display: 'flex', justifyContent:'space-around' }}>
            <IconButton
                onClick={handleCloseDrawer} 
                sx={{ml: 1.2, p:0, mt:3, display: {sm: 'none'}, color: 'tercery.main', ':hover': {backgroundColor: 'primary.main'} }}>
                    <MenuOutlined/>
            </IconButton>
            <Grid sx={{mr: {xs: 3, sm: 0, md: 0 }}}>
                <img className='logo_sidebar' src={logoFma} alt="" />
            </Grid>
        </Grid>
          
            <List>
        <ListItem 
            disablePadding
            sx={{mt: '40px', ':hover': {backgroundColor: 'secondary.main'} }}
            >
            <ListItemButton onClick={onInicioNavigate}
            >
                <ListItemIcon
                >
                    <Home className='icon'/>
                </ListItemIcon>
                <Grid 
                container color="white">
                    <ListItemText primary='INICIO'/>
                </Grid>
            </ListItemButton>
        </ListItem>
        <ListItem 
            
            disablePadding
            sx={{mt: '12px', ':hover': {backgroundColor: 'secondary.main'} }}
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
            <ListItemButton 
            onClick={onSuscripcionNavigate}>
                <ListItemIcon>
                    <AddCard className='icon'/>
                </ListItemIcon>
                <Grid container color="white">
                    <ListItemText primary='ASOCIARME'/>
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
                    <ListItemText primary='CONTACTO'/>
                </Grid>
            </ListItemButton>
        </ListItem>
    </List>

     <Grid container
     justifyContent="space-between"
     sx={{display:{xs: 'flex', sm: 'flex', md: 'flex'}}}>
         <Button onClick={navigateCuenta}>
         <Typography
             sx={{position: 'fixed',
             fontSize: 14,
             bottom: 18,
             marginLeft:'18px',
             color: 'tercery.main',
         }}>
                 {displayName}
             </Typography>
            </Button>

           <IconButton
               onClick={onLogout} 
               color="tercery" 
               sx={{position: 'fixed', bottom: 10, left: 170, display:{xs: 'none', sm: 'flex', md: 'flex'}}}>
               <LoginOutlined/>
           </IconButton>
       </Grid>
    </>
  )
}
