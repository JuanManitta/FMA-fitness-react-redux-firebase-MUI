import { Check } from '@mui/icons-material'
import { Button, Divider, Grid, makeStyles, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FmaLayout } from '../../layout/FmaLayout'

export const Suscripcion = () => {

  const [isMensual, setIsMensual] = useState(true);
  const [isAnual, setIsAnual] = useState(false)

  const navigate = useNavigate();

  const handleNavigatePayment = () =>{
    navigate ('/Pagos', {
      replace: true
    })
  };

  const handleMensualAnualButton = () =>{
    setIsAnual(!isAnual)
    setIsMensual(!isMensual)
  }

  
  return (
    <FmaLayout>
      <Grid item sx={{padding:{xs:3, sm:2, md:0}}}>
      <Grid 
            xs={3}
            item
            sx={{display: {xs: 'initial', sm: 'initial', md: 'none'}, p:4 }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: 50 }} >ELEGÍ</Typography>
              <Grid container
                sx={{backgroundColor: 'primary.main', mb: 3, width: '80%', boxShadow:4}}>
                <Typography sx={{fontWeight: 'bold', color: 'white', ml: 2, fontSize: 45}} >TU PLAN</Typography>
              </Grid>
                <Typography sx={{color: 'primary.main', textAlign:'justify' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio esse molestias provident, earum iste doloribus! Et ducimus error eveniet optio repudiandae laudantium blanditiis laborum vero. Tempore reiciendis eos commodi.</Typography>
              
              <Grid container
              spacing={2}
              sx={{mt:2}}>
                <Grid item xs={6}>
                  <Button 
                    onClick={handleMensualAnualButton}
                    size='large' fullWidth variant='contained'
                    sx={{ opacity: {xs: isMensual === true ? 1 : 0.1 }}}> 
                      Mensual 
                  </Button>

                </Grid>
                <Grid item xs={6}>
                  <Button 
                    onClick={handleMensualAnualButton}
                    size='large' fullWidth variant='contained'
                    sx={{ opacity: {xs: isAnual === true ? 1 : 0.1 }}}>
                     Anual 
                  </Button>
                </Grid>
              </Grid>
          </Grid>
      
      </Grid>

      <Grid 
        container
        padding={2}
        className='animate__animated animate__fadeIn animate__faster' 
        direction="row"
        sx={{ minHeight: 'calc(100vh - 150px)', backgroundColor: '#F3F5FA',
        display: 'grid', gridTemplateColumns: {md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)' }, gap: 2}}>

          <Grid 
            xs={12}
            item
            sx={{display: {xs: 'none', sm: 'none', md: 'initial'}}}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: 50 }} >ELEGÍ</Typography>
              <Grid container
                sx={{backgroundColor: 'primary.main', mb: 3, width: '80%'}}>
                <Typography sx={{fontWeight: 'bold', color: 'white', ml: 2, fontSize: 45, boxShadow:4}} >TU PLAN</Typography>
              </Grid>
                <Typography sx={{color: 'primary.main', textAlign:'justify' }} > <b> *ESTO ES ES UN SIMULACRO DE SUSCRIPCION </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio esse molestias provident, earum iste doloribus! Et ducimus error eveniet optio repudiandae laudantium blanditiis laborum vero. Tempore reiciendis eos commodi.</Typography>
              
              <Grid container
              spacing={2}
              sx={{mt:2}}>
                <Grid item xs={6}>
                  <Button 
                    onClick={handleMensualAnualButton}
                    size='large' fullWidth variant='contained' 
                    sx={{ opacity: {xs: isMensual === true ? 1 : 0.1 }}}> Mensual </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button 
                    onClick={handleMensualAnualButton}
                    size='large' fullWidth variant='contained' 
                    sx={{ opacity: {xs: isAnual === true ? 1 : 0.1 }}}> Anual </Button>
                </Grid>
              </Grid>

          </Grid>

            {/* MENSUAL */}
          <Grid item xs={12} sm={12} md={12}
            sx={{backgroundColor: 'primary.main', boxShadow: 20, p:1, borderRadius: 4, display: {xs: isMensual === true ? 'bock' : 'none'}}}>
              <Grid container>
                <Grid item xs={12}
                sx={{p:3}}>
              <Typography 
                sx={{color: 'white', mb: 1, fontWeight: 'bold'}}
                fontSize={38}>
                PLAN TOTAL
              </Typography>
              <Divider  color='white'/>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center">

                    <Typography sx={{mt:5, color: 'white'}}>$</Typography>
                    <Typography variant='h3' sx={{ml:1, mr: 1, mt:2, color: 'white', fontWeight: 'bold'}}>5.500</Typography>
                    <Typography sx={{mt:5, color: 'white'}}>/mes</Typography>
                </Grid>
                    <Typography sx={{ color: 'white', textAlign:'center', fontSize: 11, opacity: 0.4}}>Mensual</Typography>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                  sx={{mt:6}}>
                    <Grid item xs={10}>
                      <Button
                        onClick={handleNavigatePayment} 
                        sx={{backgroundColor:'#ffd300',
                        color:'primary.main',
                        ':hover': {backgroundColor: '#cca900', color: 'black'},
                        fontSize: 20,
                        mb: 2
                      }} 
                      size='large' 
                      fullWidth 
                      variant='contained'>
                            Asociarme
                        </Button>
                    </Grid>
                </Grid>
                <Divider color='white'/>

                <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ mt: 4 }}>

                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Acceso a todas las actividades</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Clases en vivo On Demand</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>App nutricional</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Descuento en competencias (Crossfit)</Typography>
                  </Grid>
                </Grid>


              </Grid>
            </Grid>
            
          </Grid>
           {/* ANUAL */}
          <Grid item xs={12} sm={12} md={12}
            sx={{backgroundColor: 'primary.main', boxShadow: 20, p:1, borderRadius: 4, display: {xs: isAnual === true ? 'bock' : 'none'}}}>
              <Grid container>
                <Grid item xs={12}
                sx={{p:3}}>
              <Typography 
                sx={{color: 'white', mb: 1, fontWeight: 'bold'}}
                fontSize={38}>
                PLAN TOTAL
              </Typography>
              <Divider  color='white'/>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center">

                    <Typography sx={{mt:5, color: 'white'}}>$</Typography>
                    <Typography variant='h3' sx={{ml:1, mr: 1, mt:2, color: 'white', fontWeight: 'bold'}}>64.000</Typography>
                    <Typography sx={{mt:5, color: 'white'}}>/año</Typography>
                </Grid>
                    <Typography sx={{ color: 'white', textAlign:'center', fontSize: 11, opacity: 0.4}}>Anual</Typography>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                  sx={{mt:6}}>
                    <Grid item xs={10}>
                      <Button
                        onClick={handleNavigatePayment} 
                        sx={{backgroundColor:'#ffd300',
                        color:'primary.main',
                        ':hover': {backgroundColor: '#cca900', color: 'black'},
                        fontSize: 20,
                        mb: 2
                      }} 
                      size='large' 
                      fullWidth 
                      variant='contained'>
                            Asociarme
                        </Button>
                    </Grid>
                </Grid>
                <Divider color='white'/>

                <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ mt: 4 }}>

                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Acceso a todas las actividades</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Clases en vivo On Demand</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>App nutricional</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Descuento en competencias (Crossfit)</Typography>
                  </Grid>
                </Grid>


              </Grid>
            </Grid>
            
          </Grid>

            {/* MENSUAL  */}
          <Grid item xs={12} sm={12} md={12}
            sx={{backgroundColor: 'primary.main', boxShadow: 20, p:1, borderRadius: 4, display: {xs: isMensual === true ? 'bock' : 'none'}}}>
              <Grid container>
                <Grid item xs={12}
                sx={{p:3}}>
              <Typography 
                sx={{color: 'white', mb: 1, fontWeight: 'bold'}}
                fontSize={38}>
                PLAN PLUS
              </Typography>
              <Divider  color='white'/>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center">

                    <Typography sx={{mt:5, color: 'white'}}>$</Typography>
                    <Typography variant='h3' sx={{ml:1, mr: 1, mt:2, color: 'white', fontWeight: 'bold'}}>4.500</Typography>
                    <Typography sx={{mt:5, color: 'white'}}>/mes</Typography>
                </Grid>
                    <Typography sx={{ color: 'white', textAlign:'center', fontSize: 11, opacity: 0.4}}>Mensual</Typography>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                  sx={{mt:6}}>
                    <Grid item xs={10}>
                      <Button
                        onClick={handleNavigatePayment} 
                        sx={{backgroundColor:'white',
                        color:'primary.main',
                        ':hover': {backgroundColor: 'secondary.main', color: 'white'},
                        fontSize: 20,
                        mb: 2
                      }} 
                      size='large' 
                      fullWidth 
                      variant='contained'>
                            Asociarme
                        </Button>
                    </Grid>
                </Grid>
                <Divider color='white'/>

                <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ mt: 4 }}>

                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Acceso a todas las actividades</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Clases en vivo On Demand</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957', opacity: 0.2}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white', opacity: 0.2}}>App nutricional</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957', opacity: 0.2}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white', opacity: 0.2}}>Descuento en competencias (Crossfit)</Typography>
                  </Grid>
                </Grid>


              </Grid>
            </Grid>
            
          </Grid>
          {/* ANUAL */}
          <Grid item xs={12} sm={12} md={12}
            sx={{backgroundColor: 'primary.main', boxShadow: 20, p:1, borderRadius: 4, display: {xs: isAnual === true ? 'bock' : 'none'}}}>
              <Grid container>
                <Grid item xs={12}
                sx={{p:3}}>
              <Typography 
                sx={{color: 'white', mb: 1, fontWeight: 'bold'}}
                fontSize={38}>
                PLAN PLUS
              </Typography>
              <Divider  color='white'/>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center">

                    <Typography sx={{mt:5, color: 'white'}}>$</Typography>
                    <Typography variant='h3' sx={{ml:1, mr: 1, mt:2, color: 'white', fontWeight: 'bold'}}>53.000</Typography>
                    <Typography sx={{mt:5, color: 'white'}}>/año</Typography>
                </Grid>
                    <Typography sx={{ color: 'white', textAlign:'center', fontSize: 11, opacity: 0.4}}>Anual</Typography>
                <Grid container
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                  sx={{mt:6}}>
                    <Grid item xs={10}>
                      <Button
                        onClick={handleNavigatePayment} 
                        sx={{backgroundColor:'white',
                        color:'primary.main',
                        ':hover': {backgroundColor: 'secondary.main', color: 'white'},
                        fontSize: 20,
                        mb: 2
                      }} 
                      size='large' 
                      fullWidth 
                      variant='contained'>
                            Asociarme
                        </Button>
                    </Grid>
                </Grid>
                <Divider color='white'/>

                <Grid container
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ mt: 4 }}>

                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Acceso a todas las actividades</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957'}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white'}}>Clases en vivo On Demand</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957', opacity: 0.2}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white', opacity: 0.2}}>App nutricional</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Check sx={{color: '#7ED957', opacity: 0.2}}/>
                  </Grid>
                  <Grid item xs={11}>
                  <Typography sx={{textAlign:'left', ml:2, mb:1, color: 'white', opacity: 0.2}}>Descuento en competencias (Crossfit)</Typography>
                  </Grid>
                </Grid>


              </Grid>
            </Grid>
            
          </Grid>
          
         
      </Grid>
      
    </FmaLayout>
  )
}
