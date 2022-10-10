import { ArrowBackIos } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"





export const Pagos = () => {
  return (
    <Box component='main'
        sx={{ flexGrow: 1, backgroundColor: '#F3F5FA', }}>
          <Grid 
            className='animate__animated animate__fadeIn animate__faster'  
            container
            
            sx={{ minHeight: '100vh', backgroundColor: '#F3F5FA', }}>
              <Grid 
                item xs={6}>

                  <Grid 
                    container
                    direction="row"
                    sx={{minHeight: '100vh', backgroundColor:'#395B64', display: 'grid'}}>

                      <Grid item xs={12} paddingLeft={1} marginTop={1}>
                        <IconButton sx={{color: 'white'}}>
                          <ArrowBackIos fontSize="large" />
                        </IconButton>
                      </Grid>

                      <Grid item xs={11}>

                        <Grid item>
                          <Typography marginLeft={5} marginBottom={3} color={'white'} variant="h4">Resumen de compra</Typography>
                        </Grid>

                        <Grid 
                          container
                          sx={{backgroundColor:'#456A74', display: 'flex', borderRadius:2, ml:2.5 }} >

                          <Grid item xs={12} sx={{display:'grid', gridTemplateColumns: 'repeat(3,1fr)', gap:1 , p:1.5 }} >

                            <Grid container sx={{backgroundColor:'white', width:'190px', borderRadius:3, p:2}}>

                              <Grid item xs={4}> 
                                <img className="logo_fma_pagos" src="./canva/Iconos/LOGOFMABLANCO.png" alt="" />
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
                            Importe a abonar
                          </Typography>
                          <Typography marginLeft={5} marginTop={2} fontSize={22} color={'white'} letterSpacing={1.1} fontWeight={'bolder'}>
                            $123.500
                          </Typography>
                        </Grid>

                      </Grid>
                      <Grid item xs={12}>
                        <Grid 
                          justifyContent='center'
                          alignContent='center'
                          direction="column"
                          container>

                            <Grid item xs={12} display={'flex'} padding={0} justifyContent={'center'}  >
                              <Box borderLeft={1} paddingLeft={1.2} paddingRight={1.2}>
                                <Typography>Terminos y condiciones</Typography>
                              </Box>
                              <Box borderLeft={1} paddingLeft={1.2} paddingRight={1.2}>
                                <Typography>Politicas de privacidad</Typography>
                              </Box>
                              <Box borderLeft={1} paddingLeft={1.2}>
                                <Typography>Contacto</Typography>
                              </Box>
                            </Grid>

                            <Grid item xs={12} padding={4}>
                              <Box>
                                <Typography sx={{textAlign:'center'}}>En Fma Fitness cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329). Copyright (c) 2022 FMAFITNESS. Todos los derechos reservados.</Typography>
                              </Box>
                            </Grid>

                        </Grid>
                        

                      </Grid>


                  </Grid>
              </Grid>
              <Grid item xs={6}>

              </Grid>
          </Grid>
    </Box>
  )
}
