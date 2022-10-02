import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import { FmaLayout } from "../../layout/FmaLayout"

export const Actividades = () => {



  return (
<FmaLayout>

  <Box 
      className='animate__animated animate__fadeIn animate__faster'  
      sx={{ flexGrow: 1 }}>
    <Grid
      spacing={0.5}
      container
      direction="row"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: '#F3F5FA', display: {xs: 'grid', sm: 'flex'}}}
  >
    <Grid item xs={12} sm={6} sx={{boxShadow: 9, padding: 0.5, width: '100%' }}>
      <img className="img_activity" src="./canva/Iconos/yoga.png" alt="" />
    </Grid>
    <Grid item xs={12} sm={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src="./canva/Iconos/zumba.png" alt="" />    
    </Grid>
    <Grid item xs={12} sm={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src="./canva/Iconos/crossfit.png" alt="" />   
    </Grid>
    <Grid item xs={12} sm={6} sx={{boxShadow: 9, padding: 0.5 }}>
      <img className="img_activity" src="./canva/Iconos/calistenia.png" alt="" />    
    </Grid>
  </Grid>
    </Box>
</FmaLayout>
  )
}
