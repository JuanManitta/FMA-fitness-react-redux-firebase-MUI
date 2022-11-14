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
            sx={{display: 'flex'}}>
              <Grid item
                xs={5}
                sx={{display:'grid', placeItems:'center'}}>

                  <img className='portada_img' src={portada} alt="" />
               
              </Grid>
              <Grid item
                xs={7}
                sx={{display:'flex', alignItems:'center'}}>
                <Typography fontWeight={'bold'} variant='h4'>
                  PERFIL
                </Typography>
              </Grid>

          </Grid>
          <Grid item
            xs={12}
            sx={{display:'flex', height:'50vh', mt: 6, justifyContent:'flex-end'}}>
              <Grid item
                xs={5}
                sx={{display:'grid',}}>

                  <Grid container
                    sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', mb:2}}>
                      
                      <Grid item
                      xs={2}>
                        <Home fontSize='large'/>
                      </Grid>

                      <Grid item
                      xs={8}
                      
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
                    sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', mb:2}}>
                      <Grid item
                      xs={2}>
                        <CreditCard fontSize='large'/>
                      </Grid>

                      <Grid item
                      xs={8}>
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
                    sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', mb:2}}>
                      <Grid item
                      xs={2}>
                        <Lock fontSize='large'/>
                      </Grid>

                      <Grid item
                      xs={8}>
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
                    sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', mb:2}}>
                      <Grid item
                      xs={2}>
                        <FitnessCenter fontSize='large'/>
                      </Grid>

                      <Grid item
                      xs={8}>
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
                    sx={{display:'flex', alignItems:'center', justifyContent:'flex-end', mb:2}}>
                      <Grid item
                      xs={2}>
                        <Receipt fontSize='large'/>
                      </Grid>

                      <Grid item
                      xs={8}>
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
