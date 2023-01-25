import { ArrowBackIos, CreditCard, FitnessCenter, Person } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { Box, styled } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { startSuscribingUser } from "../../../store/users/thunks"
import logoFmaBlanco from '../../../../canva/Iconos/LOGOFMABLANCO.png'





export const Pagos = () => {

  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.users )

  const suscripted = userData.suscripted 

  const onPayButton = () =>{
    toast.success('Pago exitoso, bienvenido a FMA')
    dispatch(startSuscribingUser());
    
  }

  const PayButton = styled(Button)({

  fontSize: 20,
  padding: '8px 12px',
  backgroundColor: '#ffd300',
  borderColor: '#ffd300',
  width: '100%',
  marginTop:'30px',
  '&:hover': {backgroundColor:'#cca900'}
  })

  const navigate = useNavigate();

  const handleBackSuscripciones = () =>{
    navigate ('/suscripcion', {
      replace: true
    })
  };

  return (
    <Box component='main'
        sx={{ backgroundColor: '#F3F5FA', }}>
          <Grid 
            className='animate__animated animate__fadeIn animate__faster'  
            container
            sx={{ backgroundColor: '#F3F5FA', display:{xs:'grid', sm:'grid', md:'flex'} }}>

              <Grid 
                item xs={12} sm={12} md={6}>

                  <Grid
                    container
                    direction="row"
                    sx={{minHeight: '100vh', backgroundColor:'#395B64', display: 'grid'}}>

                      <Grid item xs={12} paddingLeft={1} marginTop={1}>
                        <IconButton
                          onClick={handleBackSuscripciones} 
                          sx={{color: 'white'}}>
                          <ArrowBackIos fontSize="large" />
                        </IconButton>
                      </Grid>

                      <Grid item xs={11}>

                        <Grid item>
                          <Typography marginLeft={5} marginBottom={3} color={'white'} variant="h4">Resumen de compra</Typography>
                        </Grid>

                        <Grid 
                          container
                          sx={{backgroundColor:'#456A74', display: 'flex', borderRadius:2, ml:2.5 , boxShadow:4}} >

                          <Grid item xs={12} sx={{display:'grid', gridTemplateColumns: 'repeat(3,1fr)', gap:1 , p:1.5 }} >

                            <Grid container sx={{backgroundColor:'white', width:'190px', borderRadius:3, p:2, boxShadow:4}}>

                              <Grid item xs={4}> 
                                <img className="logo_fma_pagos" src={logoFmaBlanco} alt="" />
                              </Grid>
                            </Grid>

                                <Typography color={'white'} fontSize={17}>Plan Total Anual <br />
                                  <Typography variant="span">Anual</Typography> 
                                </Typography>
                                <Typography fontSize={20} color={'white'} textAlign={'right'}>$123.500</Typography>
                            </Grid>
                        </Grid>
                        <Grid item sx={{display:'flex', justifyContent:'space-between'}}>
                          <Typography marginLeft={5} marginTop={2} fontSize={22} color={'white'} letterSpacing={1.1} fontWeight={'bolder'}>
                            Importe a abonar (Ficticio)
                          </Typography>
                          <Typography marginLeft={5} marginTop={2} fontSize={22} color={'white'} letterSpacing={1.1} fontWeight={'bolder'}>
                            $123.500
                          </Typography>
                        </Grid>

                      </Grid>
                      <Grid item xs={12} sx={{pt:10}}>
                        <Grid 
                          justifyContent='center'
                          alignContent='center'
                          direction="column"
                          container>

                            <Grid item xs={12} display={'flex'} padding={0} justifyContent={'center'}  >
                              <Box borderLeft={1} borderColor={'white'} paddingLeft={1.2} paddingRight={1.2}>
                                <Typography fontSize={15} color="white">Terminos y condiciones</Typography>
                              </Box>
                              <Box borderLeft={1} borderColor={'white'} paddingLeft={1.2} paddingRight={1.2}>
                                <Typography fontSize={15} color="white">Politicas de privacidad</Typography>
                              </Box>
                              <Box borderLeft={1} borderColor={'white'} paddingLeft={1.2}>
                                <Typography fontSize={15} color="white">Contacto</Typography>
                              </Box>
                            </Grid>

                            <Grid item xs={12} padding={4}>
                              <Box>
                                <Typography sx={{textAlign:'center', color:'white', fontSize:12}}>En Fma Fitness cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329). Copyright (c) 2022 FMAFITNESS. Todos los derechos reservados.</Typography>
                              </Box>
                            </Grid>

                        </Grid>
                        

                      </Grid>


                  </Grid>
              </Grid>
              
              <Grid item xs={12} sm={12} md={6} sx={{display: 'grid', p:4}}>

                <Grid item xs={12} sx={{display: 'flex', justifyContent:'space-between', height:'20%'}}>

                  <Grid display={'flex'}>
                    <Grid item xs={3}>

                    <Grid 
                      container
                      justifyContent="center"
                      alignContent="center" 
                      sx={{backgroundColor:'#395B64', p:1, borderRadius:6, width:{md:'51px', sm:'35px', xs: '35px'}, boxShadow:4}}>
                      <FitnessCenter fontSize="large"  sx={{ color: 'white', display:{xs:'none', sm:'none', md:'block'}}}/>
                      <FitnessCenter fontSize="small"  sx={{ color: 'white', display:{xs:'block', sm:'block', md:'none'}}}/>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container sx={{dsiplay: 'grid',ml:2}}>
                      <Typography fontWeight={'bolder'}>Paso 1</Typography>
                      <Typography>Elegí tu plan</Typography>

                    </Grid>
                    
                  </Grid>
                </Grid>
                  <Grid display={'flex'}>
                    <Grid item xs={3}>

                    <Grid 
                      container
                      justifyContent="center"
                      alignContent="center" 
                      sx={{backgroundColor:'#395B64', p:1, borderRadius:6, width:{md:'51px', sm:'35px', xs: '35px'}, boxShadow:4}}>
                      <Person fontSize="large"  sx={{ color: 'white', display:{xs:'none', sm:'none', md:'block'}}}/>
                      <Person fontSize="small"  sx={{ color: 'white', display:{xs:'block', sm:'block', md:'none'}}}/>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container sx={{dsiplay: 'grid',ml:2}}>
                      <Typography fontWeight={'bolder'}>Paso 2</Typography>
                      <Typography>Llena tus datos</Typography>

                    </Grid>
                    
                  </Grid>
                </Grid>
                  <Grid display={'flex'}>
                    <Grid item xs={3}>

                    <Grid 
                      container
                      justifyContent="center"
                      alignContent="center" 
                      sx={{backgroundColor:'#395B64', p:1, borderRadius:6, width:{md:'51px', sm:'35px', xs: '35px'}, boxShadow:4, opacity: 0.3}}>
                      <CreditCard fontSize="large"  sx={{ color: 'white', display:{xs:'none', sm:'none', md:'block'}}}/>
                      <CreditCard fontSize="small"  sx={{ color: 'white', display:{xs:'block', sm:'block', md:'none'}}}/>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container sx={{dsiplay: 'grid',ml:4, opacity: 0.3}}>
                      <Typography fontWeight={'bolder'}>Paso 3</Typography>
                      <Typography>Pagá</Typography>

                    </Grid>
                    
                  </Grid>
                </Grid>
                 
                  
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" marginBottom={3}>Informacion Personal</Typography> <Typography fontSize={12} fontWeight={'bold'}>*No hace falta rellenar los datos, precionar el botón</Typography>
                  <Grid 
                    justifyContent="center"
                    alignContent="center"
                    container>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='nombre'
                      type="text"
                      placeholder="Jon Doe">
                      </TextField>
                    </Grid>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='apellido'
                      type="text"
                      placeholder='Doe'>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid 
                    justifyContent="center"
                    alignContent="center"
                    container>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='celular'
                      type="number"
                      placeholder='221-506-0203'>
                      </TextField>
                    </Grid>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='documento'
                      type="number"
                      placeholder='34453100'>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid 
                    justifyContent="center"
                    alignContent="center"
                    container>
                    <Grid xs={12} item>
                      <TextField fullWidth
                      label='email'
                      type="email"
                      plceholder='juan@google.com'>
                      </TextField>
                    </Grid>
                    
                  </Grid>

                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" marginBottom={3}>Domicilio</Typography>
                  <Grid 
                    justifyContent="center"
                    alignContent="center"
                    container>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='Calle'
                      type="text"
                      placeholder="calle">
                      </TextField>
                    </Grid>
                    <Grid xs={3} item>
                      <TextField fullWidth
                      label='Numero'
                      type="number"
                      placeholder='number'>
                      </TextField>
                    </Grid>
                    <Grid xs={3} item>
                      <TextField fullWidth
                      label='dpto'
                      type="text"
                      placeholder='depto'>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid 
                    justifyContent="center"
                    alignContent="center"
                    container>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='Ciudad'
                      type="text"
                      placeholder="ciudad">
                      </TextField>
                    </Grid>
                    <Grid xs={6} item>
                      <TextField fullWidth
                      label='Provincia'
                      type="text"
                      placeholder='provincia'>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid 
                    justifyContent="center"
                    alignContent="center"
                    container>
                    <Grid xs={6} item>
                      <PayButton 
                        onClick={onPayButton}
                        variant="contained" 
                        disabled={suscripted}
                        sx={{color:'primary.main'}}>
                          <Typography fontSize={20} 
                            sx={{display: {xs: suscripted === true 
                              ? 'none' 
                              : 'block'}}}> Pagar</Typography>
                          <Typography fontSize={20} 
                            sx={{display: {xs: suscripted === true 
                              ? 'block' 
                              : 'none'}}}> Ya estas suscripto</Typography>
                        </PayButton>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
          </Grid>
    </Box>
  )
}
