import { Button, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FmaLayout } from '../../layout/FmaLayout'
import portada from '../../../../canva/Iconos/user-profile.png'
import { CreditCard, FitnessCenter, Home, Lock, Receipt, Troubleshoot, Upload } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { Actividades, Perfil, Suscription } from './views'
import { CambiarContraseña } from './views/CambiarContraseña'
import { Recibos } from './views/Recibos'

export const Cuenta = () => {

  const { displayName, email } = useSelector(state => state.auth)
  const { userData } = useSelector(state => state.users )

  const [handleShowPerfil, setHandleShowPerfil] = useState(true);
  const [handleShowSuscription, setHandleShowSuscription] = useState(false);
  const [handleShowActividades, setHandleShowActividades] = useState(false);
  const [handleShowRecibos, setHandleShowRecibos] = useState(false);
  const [handleShowPassword, setHandleShowPassword] = useState(false);

  const showPerfil = () =>{
    setHandleShowPerfil(true);
    setHandleShowSuscription(false)
    setHandleShowActividades(false)
    setHandleShowRecibos(false)
    setHandleShowPassword(false)
  }
  const showSuscription = () =>{
    setHandleShowPerfil(false);
    setHandleShowSuscription(true)
    setHandleShowActividades(false)
    setHandleShowRecibos(false)
    setHandleShowPassword(false)
  }
  const showActivades = () =>{
    setHandleShowPerfil(false);
    setHandleShowSuscription(false);
    setHandleShowActividades(true);
    setHandleShowRecibos(false)
    setHandleShowPassword(false)
  }
  const showRecibos = () =>{
    setHandleShowPerfil(false);
    setHandleShowSuscription(false);
    setHandleShowActividades(false);
    setHandleShowRecibos(true)
    setHandleShowPassword(false)
  }
  const showPassword = () =>{
    setHandleShowPerfil(false);
    setHandleShowSuscription(false);
    setHandleShowActividades(false);
    setHandleShowRecibos(false)
    setHandleShowPassword(true)
  }
  



  return (
    <FmaLayout>
      <Grid container
        sx={{ minHeight:'100vh', display:'grid'}}>

          <Grid item
            xs={12}
            sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <Grid item
                xs={6} sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                  <img className='portada_img' src={portada} alt="Perfil_image" />
               
              </Grid>
              <Grid item
                xs={6} sx={{justifyContent:'center', alignItems:'center', display: 'flex'}}>
                <Typography fontWeight={'bold'} variant='h4' sx={{ fontSize: { xs: 20 }}}>
                  PERFIL
                </Typography>
              </Grid>

          </Grid>
          
          <Grid item
          
            sx={{display:{ xs: 'grid', sm: 'grid', md: 'grid', lg: 'flex'} , mt: 6 }}>
              <Grid item
                xs={12}
                sx={{p:5}}>

                  <Grid container
                    sx={{display:'flex', mb:2}}>
                      
                      <Grid item
                      xs={1} marginRight={3}>
                        <Home fontSize='large'/>
                      </Grid>

                      <Grid item
                      >
                        <Typography sx={{cursor:'pointer'}}>
                           <Button 
                            sx={{'&:hover': {color: 'black'}, backgroundColor: { xs: handleShowPerfil === true ? 'secondary.main' : 'grey'},
                            color: { xs: handleShowPerfil === true ? 'white' : 'black'} }}
                            onClick={showPerfil}>
                              Vista general
                            </Button>
                        </Typography>

                      </Grid>

                  </Grid>
                  <Grid container
                    sx={{display:'flex', mb:2}}>
                      <Grid item
                      xs={1}
                      marginRight={3}>
                        <CreditCard fontSize='large'/>
                      </Grid>

                      <Grid item>
                        <Typography>
                          <Button 
                            sx={{'&:hover': {color: 'black'}, backgroundColor: { xs: handleShowSuscription === true ? 'secondary.main' : 'grey'},
                            color: { xs: handleShowSuscription === true ? 'white' : 'black'} }}
                            onClick={showSuscription}>
                            Suscripción
                          </Button>
                        </Typography>

                      </Grid>

                  </Grid>
                  <Grid container
                    sx={{display:'flex', mb:2}}>
                      <Grid item
                      xs={1}
                      marginRight={3}>
                        <Lock fontSize='large'/>
                      </Grid>

                      <Grid item>
                        <Typography>
                          <Button
                            sx={{'&:hover': {color: 'black'}, backgroundColor: { xs: handleShowPassword === true ? 'secondary.main' : 'grey'},
                            color: { xs: handleShowPassword === true ? 'white' : 'black'} }}
                            onClick={showPassword}>
                          Cambiar contraseña
                          </Button>
                        </Typography>

                      </Grid>

                  </Grid>
                  <Grid container
                    sx={{display:'flex', mb:2}}>
                      <Grid item
                      xs={1} marginRight={3}>
                        <FitnessCenter fontSize='large'/>
                      </Grid>

                      <Grid item>
                        <Typography>
                          <Button
                            sx={{'&:hover': {color: 'black'}, backgroundColor: { xs: handleShowActividades === true ? 'secondary.main' : 'grey'},
                            color: { xs: handleShowActividades === true ? 'white' : 'black'} }}
                            onClick={showActivades}>

                          Mis actividades
                          </Button>
                        </Typography>

                      </Grid>

                  </Grid>
                  <Grid container
                    sx={{display:'flex', mb:2}}>
                      <Grid item
                      xs={1} marginRight={3}>
                        <Receipt fontSize='large'/>
                      </Grid>

                      <Grid item>
                        <Typography>
                          <Button
                            sx={{'&:hover': {color: 'black'}, backgroundColor: { xs: handleShowRecibos === true ? 'secondary.main' : 'grey'},
                            color: { xs: handleShowRecibos === true ? 'white' : 'black'} }}
                            onClick={showRecibos}>
                          Recibos
                          </Button>
                        </Typography>

                      </Grid>

                  </Grid>
                
              </Grid>

              <Perfil
                handleShowPerfil={handleShowPerfil}/>
              <Suscription 
                handleShowSuscription={handleShowSuscription}/>
              <Actividades
                handleShowActividades={handleShowActividades}/>
                <CambiarContraseña
                handleShowPassword={handleShowPassword}/>
                <Recibos
                handleShowRecibos={handleShowRecibos}/>
          </Grid>

         

      </Grid>

    </FmaLayout>
  )
}
