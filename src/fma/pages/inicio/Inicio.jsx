import { AddCard, CalendarMonth, Email, FitnessCenter, FmdGood, FormatListBulleted, FormatQuote, Home, Instagram, LibraryBooks, LoginOutlined, Mail, MenuOutlined, MilitaryTech, Phone, Security, Twitter, WhatsApp } from '@mui/icons-material'
import {  AppBar, Button, Container, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { startLogout } from '../../../store/auth/thunks'
import  fondoMenu  from '../../../../canva/Iconos/fondoMenu.png'

export const Inicio = ({drawerWidth = 0}) => {

    const { displayName } = useSelector(state => state.auth )

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(startLogout())
    }

    const navigate = useNavigate();

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
    

    const handleDrawerOpen = () =>{
        setIsDrawerOpen(true)
    };
    const handleDrawerClose = () =>{
        setIsDrawerOpen(false)
    }


  return (
    <>
    <AppBar 
        position='fixed'
        sx={{
            width: {sm: '100%'},
            ml: {sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <Grid 
            container
            justifyContent="space-between"
            >

            <IconButton onClick={handleDrawerOpen}
            color="inherit"
            edge="start"
            sx={{mr: 2, }}>
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
    <Box
        component="nav"
        sx={{  flexShrink: {sm: 0 }  }}
        >
        <Drawer
            className='aanimate__animated animate__fadeIn animate__faster'
            component={Paper}
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            sx={{
                // display: { xs: isOpen === true ? 'block' : 'none' },
                 '& .MuiDrawer-paper': {boxSizing: 'border-box' , boxShadow: 3 , width:'220px', backgroundColor: 'primary.main' },
                 
                
            }}
        >
            <Toolbar 
            sx={{display: 'block', paddingLeft: 0 }}>
                <Grid
                container
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
                    <IconButton
                        onClick={handleDrawerClose} 
                        sx={{mr:0, p: 0, display: {sm: 'block'}, color: 'tercery.main', ':hover': {backgroundColor: 'primary.main'} }}>
                            <MenuOutlined/>
                    </IconButton>
                    <IconButton>
                        <img className='logo_sidebar_menu' src="./canva/Iconos/LOGOFMA.png" alt="" />
                    </IconButton>
                </Grid>
            </Toolbar>
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

            <Grid container
            justifyContent="space-between"
            sx={{display:{xs: 'flex', sm: 'flex', md: 'flex'}}}>
                <Typography
                    sx={{position: 'fixed',
                    bottom: 18,
                    ml:'16px',
                    color: 'tercery.main' 
                }}>
                    {displayName}
                    </Typography>

                <IconButton 
                    onClick={onLogout}
                    color="tercery" 
                    sx={{position: 'fixed', bottom: 10, left: 170, display: {xs: 'none', sm: 'flex', md: 'flex'}}}>
                    <LoginOutlined/>
                </IconButton>
            </Grid>
        </Drawer>
        <Box component='main'
        sx={{ flexGrow: 1, backgroundColor: '#F3F5FA',   }}
        >
            <Toolbar/>
        <Grid
            className='animate__animated animate__fadeIn animate__faster'  
            container
            justifyContent="start"
            alignContent="start"
            direction="row"
            sx={{ backgroundColor: '#F3F5FA',   }}
        >       <Grid sx={{display: {xs: 'none', sm:'none', md: 'grid'}}}>
                <img className='fondo_menu' src={fondoMenu} alt="fondoMenu" />
                </Grid>

                <Grid sx={{display: {xs: 'grid', sm:'grid', md: 'none'} }}>
                <img className='fondo_menu_responsive' src="./canva/Iconos/fondoMenuResponsive.png" alt="fondoMenu" />
                </Grid>
                    <Grid item xs={12} sm={12} md={7} sx={{position: 'absolute', p:{xs:2,md:8,sm:8} }}>
                    <FormatQuote fontSize='large' sx={{color:{xs:'tercery.main', sm:'tercery.main', md: 'black'}}}/>
                    <Typography variant='h3' sx={{fontWeight: 'bold',
                        letterSpacing: 0, mb: 3, mt:2,
                        fontSize:{md:'3rem', sm:'3rem', xs: 40},
                        color:{xs:'tercery.main', sm:'tercery.main', md: 'white'}}}>
                            PRIMERO MOVERSE BIEN <br /> LUEGO, FRECUENTEMENTE
                    </Typography>
                    
                    <Typography variant='h6' sx={{fontWeight:'400', color:{xs:'white', sm:'white', md: 'white'}}} >
                        Sumate a la comunidad de entrenamiento <br /> que <b>SI</b> consigue sus objetivos.
                    </Typography>
                    <Button onClick={onSuscripcionNavigate} sx={{mt: 8, fontSize: 20, backgroundColor: '#ffd300', color: 'primary.main', ':hover': {backgroundColor:'#cca900', }}} size='large' variant='contained'>ASOCIATE AHORA</Button>
                    <Grid item sx={{mt:6, }}>
                        <IconButton sx={{color: {xs:'tercery.main', sm:'tercery.main', md:'#576F72'}}}>
                            <Instagram fontSize='large'/>
                        </IconButton>
                        <IconButton sx={{color: {xs:'tercery.main', sm:'tercery.main', md:'#576F72'}}}>
                            <Twitter fontSize='large'/>
                        </IconButton>
                        <IconButton sx={{color: {xs:'tercery.main', sm:'tercery.main', md:'#576F72'}}}>
                            <WhatsApp fontSize='large'/>
                        </IconButton>
                        <IconButton sx={{color: {xs:'tercery.main', sm:'tercery.main', md:'#576F72'}}}>
                            <Mail fontSize='large'/>
                        </IconButton>
                    </Grid>
                </Grid>
        </Grid> 
        </Box>
    </Box>
    <footer>
   <Box bgcolor="#464857" padding={4} >
     <Container maxWidth="lg">
       <Grid container spacing={5} color={'white'} sx={{display: {xs: 'grid', sm:'grid', md:'flex'}}}>
         <Grid item xs={6}>
           <Box borderBottom={1}>
            <Typography variant="h5" marginBottom={1} fontWeight={'bolder'}> CONTACTO </Typography>
           </Box>

           <Box marginTop={2} display={'flex'}>
            <FmdGood/>
            <Typography marginLeft={2}>Calle 30, N°540</Typography>
           </Box>
           <Box marginTop={3} display={'flex'}>
            <WhatsApp/>
            <Typography marginLeft={2}>221-456-4561</Typography>
           </Box>
           <Box marginTop={3} display={'flex'}>
            <Email/>
            <Typography marginLeft={2}>gimnasiofma@contacto.com</Typography>
           </Box>
         </Grid>
         <Grid item xs={6}>
           <Box borderBottom={1} display={'flex'} sx={{justifyContent: {xs:'start', sm:'start', md:'end'}}}  >
            <Typography variant="h5" marginBottom={1} fontWeight={'bolder'}> LEGAL </Typography>
           </Box>

           <Box marginTop={2} display={'flex'} sx={{justifyContent: {sx:'left', sm:'left', md: 'end'}}}>
            <LibraryBooks sx={{display:{xs:'block', sm:'block', md:'none'}, mr: 2}}/>
            <Typography marginRight={2}>Terminos y condiciones</Typography>
            <LibraryBooks sx={{display:{xs:'none', sm:'none', md:'block'}}}/>
           </Box>
           <Box marginTop={3} display={'flex'} sx={{justifyContent: {sx:'left', sm:'left', md: 'end'}}}>
            <Security sx={{display:{xs:'block', sm:'block', md:'none'}, mr: 2}}/>
            <Typography marginRight={2}>Politicas de privacidad</Typography>
            <Security sx={{display:{xs:'none', sm:'none', md:'block'}}}/>
           </Box>
           <Box marginTop={3} display={'flex'} sx={{justifyContent: {sx:'left', sm:'left', md: 'end'}}}>
            <Phone sx={{display:{xs:'block', sm:'block', md:'none'}, mr: 2}}/>
            <Typography marginRight={2}>Atencion al consumidor</Typography>
            <Phone sx={{display:{xs:'none', sm:'none', md:'block'}}}/>
           </Box>
         </Grid>
       </Grid>
     </Container>
   <Grid item xs={12} marginTop={8}>
    <Box marginLeft={'auto'} marginRight={'auto'} borderTop={1} color={'white'} width={'70%'}>
        <Typography marginTop={2} fontSize={13} textAlign={'center'}>
        En Fma Fitness cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329).
        Copyright (c) 2022 FMAFITNESS. Todos los derechos reservados.
        </Typography>
    </Box>

   </Grid>
   </Box>
 </footer>
</>
  )
}
