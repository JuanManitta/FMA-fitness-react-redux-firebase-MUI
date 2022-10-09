import { AddCard, CalendarMonth, FitnessCenter, FormatListBulleted, Home, LoginOutlined, MenuOutlined, MilitaryTech } from '@mui/icons-material'
import { Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export const DrawerSidebar = ({isDrawerOpen, setIsDrawerOpen }) => {

    const navigate = useNavigate();

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
        sx={{display: 'flex' }}>
            <IconButton
                onClick={handleCloseDrawer} 
                sx={{mr: 1, display: {sm: 'none'}, color: 'tercery.main', ':hover': {backgroundColor: 'primary.main'} }}>
                    <MenuOutlined/>
            </IconButton>
            <img className='logo_sidebar' src="./canva/Iconos/LOGOFMA.png" alt="" />
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
     sx={{display:{xs: 'none', sm: 'flex', md: 'flex'}}}>
         <Typography
             sx={{position: 'fixed',
             bottom: 18,
             left: 60,
             color: 'tercery.main' 
         }}>
                 Juan Manitta
             </Typography>

           <IconButton 
               color="tercery" 
               sx={{position: 'fixed', bottom: 10, left: 170}}>
               <LoginOutlined/>
           </IconButton>
       </Grid>
    </>
  )
}
