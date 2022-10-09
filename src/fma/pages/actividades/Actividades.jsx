import { Grid } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router-dom"
import { FmaLayout } from "../../layout/FmaLayout"


export const Actividades = () => {

  const navigate = useNavigate();

  const navigateToCalistenia = () => {

    navigate('/calistenia', {
      replace: true
    })
  };
  const navigateToYoga = () => {

    navigate('/yoga', {
      replace: true
    })
  };
  const navigateToZumba = () => {

    navigate('/zumba', {
      replace: true
    })
  };
  const navigateToCrossfit = () => {

    navigate('/crossfit', {
      replace: true
    })
  };


  return (
   
<FmaLayout>

    <Grid
      className='animate__animated animate__fadeIn animate__faster'  
      spacing={0.5}
      container
      direction="row"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: '#F3F5FA', display: {xs: 'grid', sm: 'grid', md: 'flex'}}}
      >
    <Grid onClick={navigateToYoga} item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5, width: '100%' }}>
      <img className="img_activity" src="./canva/Iconos/yoga.png" alt="" />
    </Grid>
    <Grid onClick={navigateToZumba} item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src="./canva/Iconos/zumba.png" alt="" />    
    </Grid>
    <Grid onClick={navigateToCrossfit} item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src="./canva/Iconos/crossfit.png" alt="" />   
    </Grid>
    <Grid item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img onClick={navigateToCalistenia} className="img_activity" src="./canva/Iconos/calistenia.png" alt="" />    
    </Grid>
  </Grid>
  
</FmaLayout>
    
  )
}
