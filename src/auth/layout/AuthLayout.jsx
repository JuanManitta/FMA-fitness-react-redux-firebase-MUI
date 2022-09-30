
import { LockOpenRounded } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"



export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid
     className='animate__animated animate__fadeIn animate__faster'  
     container
     sx={{ minHeight: '100vh'}}
     >
      <Grid className='login_container'>

      <Grid
      className='login_items'
      container
      direction="column"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: '100vh', width: { lg: '600px', xs: '100%', }, backgroundColor:  'F3F5FA'}}
      >
        <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }} >

          <Box 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          sx={{display: 'flex', flexDirection: 'column'}}>

          <img className='logo_img_resp' src="/canva/Iconos/LOGOFMABLANCO.png" alt="" />

          <LockOpenRounded sx={{mb: 2, mt: {xs: 4}}}/>
          <Typography className="text-center" variant="h5" sx={{mb: 6}}>
            {title}
          </Typography>
          </Box>

          { children }
          
        </Grid>
      </Grid>
      <Grid
      container
      direction="column"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: '100vh', width: '100%', backgroundColor: 'primary.main', display:{ xs: 'none', sm: 'flex'  }}}
      >
        <img className='logo_img' src="/canva/Iconos/LOGOFMA.png" alt="" />
      </Grid>

      
      </Grid>
    </Grid>
  )
}
