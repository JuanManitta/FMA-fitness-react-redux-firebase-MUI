import { Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { FmaLayout } from "../../layout/FmaLayout"
import yoga from '../../../../canva/Iconos/yoga.png'
import crossfit from '../../../../canva/Iconos/crossfit.png'
import calistenia from '../../../../canva/Iconos/calistenia.png'
import zumba from '../../../../canva/Iconos/zumba.png'


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
      sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: '#F3F5FA', p:1, display: {xs: 'grid', sm: 'grid', md: 'flex'}}}
      >
    <Grid onClick={navigateToYoga} item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5, width: '100%' }}>
      <img className="img_activity" src={yoga} alt="" />
    </Grid>
    <Grid onClick={navigateToZumba} item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src={zumba} alt="" />    
    </Grid>
    <Grid onClick={navigateToCrossfit} item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src={crossfit} alt="" />   
    </Grid>
    <Grid item xs={12} sm={12} md={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img onClick={navigateToCalistenia} className="img_activity" src={calistenia} alt="" />    
    </Grid>
  </Grid>
  
</FmaLayout>
    
  )
}
