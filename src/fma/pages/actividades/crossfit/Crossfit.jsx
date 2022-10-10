import { Button, Divider, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { FmaLayout } from "../../../layout/FmaLayout"

export const Crossfit = () => {
  const navigate = useNavigate();

  const handleCrossfitTurnos = () =>{
    navigate('/crossfitTurnos', {
      replace: true
    })
  }; 

  return (
    <FmaLayout>
        <Grid container
          className='animate__animated animate__fadeIn animate__faster' 
          direction="row"
          sx={{ minHeight: '100vh', p:2, backgroundColor: '#F3F5FA', display: {xs: 'grid', md: 'flex' }}}
          >
            <Grid item
            xs={12}
            md={4} 
            >
             <img className='img_activities' src="./canva/Iconos/turnos/crossfit.png" alt="" />
             <Typography sx={{mt:3}}>
                <li><b>Profesor:</b> Juan Manitta</li>
                <li><b>Cupo maximo:</b> 12 personas</li>
                <li><b>Días:</b> Todos los días</li>
             </Typography> 
            </Grid>

            <Grid item
              xs={12} md={8}
              sx={{ pl:{md: 8}}}>

              <Button
                onClick={handleCrossfitTurnos} 
                variant='contained' 
                sx={{mt: 5, mb: 5, backgroundColor: 'secondary.main', display: {md:'none'} }}>Turno Online
              
              </Button
              >
              <Divider 
              sx={{borderColor: 'primary.main', mb: 5, display:{md:'none'}}} 
              />
              <Grid container
              direction="column"
              alignContent="center"
              justifyContent="center">

                <Typography sx={{mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: {xs: '22px', md: '34px', sm: '32px'}}} >¿Qué es el Crossfit?</Typography>
                <Typography sx={{ lineHeight: 1.7, textAlign: 'justify',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc. Varius sit amet mattis vulputate. Faucibus et molestie ac feugiat. Neque vitae tempus quam pellentesque nec nam aliquam. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Ut sem nulla pharetra diam. Facilisis volutpat est velit egestas. Ut sem viverra aliquet </Typography>
                <Grid item xs={5}>

                  <Button onClick={handleCrossfitTurnos} variant='contained' sx={{mt: 8, backgroundColor: 'secondary.main', display: {xs:'none', md:'block' }}}>Turno Online</Button>
                </Grid>
              </Grid>
            </Grid>

        </Grid>
    </FmaLayout>
  )
}
