import { Button, Divider, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { FmaLayout } from "../../../layout/FmaLayout"
import yoga from '../../../../../canva/Iconos/turnos/yoga.png'

export const Yoga = () => {

  const navigate = useNavigate();

  const navigateYogaTurnos = () =>{
    navigate('/yogaTurnos', {
      replace: true
    });
    
  }
  return (
    <FmaLayout>
        <Grid container
          className='animate__animated animate__fadeIn animate__faster' 
          direction="row"
          sx={{ minHeight: '100vh', backgroundColor: '#F3F5FA', p:2, display: {xs: 'grid', md: 'flex' }}}
          >
            <Grid item
            xs={12}
            md={4} 
            >
             <img className='img_activities' src={yoga} alt="yoga" />
             <Typography sx={{mt:3}}>
                <li><b>Profesor:</b> Camila Perez</li>
                <li><b>Cupo maximo:</b> 20 personas</li>
                <li><b>Días:</b> Ma, Jue, Sab</li>
             </Typography> 
            </Grid>

            <Grid item
              xs={12} md={8}
              sx={{ pl:{md: 8}}}>

              <Button 
                onClick={navigateYogaTurnos}
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

                <Typography sx={{mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: {xs: '22px', md: '34px', sm: '32px'}}} >¿Qué es el Yoga?</Typography>
                <Typography sx={{ lineHeight: 1.7, textAlign: 'justify',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc. Varius sit amet mattis vulputate. Faucibus et molestie ac feugiat. Neque vitae tempus quam pellentesque nec nam aliquam. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Ut sem nulla pharetra diam. Facilisis volutpat est velit egestas. Ut sem viverra aliquet </Typography>
                <Grid item xs={5}>

                  <Button onClick={navigateYogaTurnos} variant='contained' sx={{mt: 8, backgroundColor: 'secondary.main', display: {xs:'none', md:'block' }}}>Turno Online</Button>
                </Grid>
              </Grid>
            </Grid>

        </Grid>
    </FmaLayout>
  )
}
