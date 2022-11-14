import { Grid, Typography } from "@mui/material"
import { FmaLayout } from "../../layout/FmaLayout"
import crossfitEquipo from '../../../../canva/Iconos/crossfitEquipo.png'
import yogaEquipo from '../../../../canva/Iconos/yogaEquipo.png'
import calisteniaEquipo from '../../../../canva/Iconos/calisteniaEquipo.png'
import zumbaEquipo from '../../../../canva/Iconos/zumbaEquipo.png'

export const Equipo = () => {



  return (
<FmaLayout>
    <Grid
      container
      sx={{ minHeight: 'calc(100vh-120px)', backgroundColor: '#F3F5FA', display: 'gird', gridTemplateColumns:'repeat(2,1fr)',gap: 1 }}>

  <Grid item xs={4}>
    <Grid 
      container
      alignContent="center" 
      sx={{minHeight:'100vh', display:'grid',}}>
        
        <Grid item xs={12} sx={{backgroundColor: '#293B5F', p:2, opacity: 0.7, boxShadow:10}}>
          <Typography textAlign={'center'} color={'white'} variant="h4">CONOCÉ AL <br /> EQUIPO <b>FMA</b> </Typography>
        </Grid>
        <Grid item xs={12} sx={{ p:2}}>
          <Typography textAlign={'justify'} color={'black'} sx={{fontWeight: 30}}>Este es nuestro equipo de profesionales que te van a <b>ayudar</b> en tus actividades para que consigas tus <b>objetivos</b> de la forma mas eficaz y eficiente.</Typography>
        </Grid>
    </Grid>
  </Grid>

  <Grid item xs={7}>
  <Grid 
      container
      alignContent="center" 
      sx={{minHeight:'90vh', display:'grid', gap:10}}>

        <Grid item xs={12} sx={{display: 'grid', gridTemplateColumns:'repeat(2,1fr)', minHeight:'30vh'}}>

          <Grid item xs={12} >
            <Grid container
            justifyContent="center"
            alignContent="center">
              <img src={crossfitEquipo} className="equipo_image" alt="" />
            </Grid>

          </Grid>
          <Grid item xs={12} >
            <Grid container
            justifyContent="center"
            alignContent="center">
              <img src={yogaEquipo} className="equipo_image" alt="" />
            </Grid>

          </Grid>

          

        </Grid>
        <Grid item xs={12} sx={{display: 'flex', minHeight:'30vh'}}>

          <Grid item xs={12} >
            <Grid container
            justifyContent="center"
            alignContent="center">
              <img src={zumbaEquipo} className="equipo_image" alt="" />
            </Grid>

          </Grid>
          <Grid item xs={12} >
            <Grid container
            justifyContent="center"
            alignContent="center">
              <img src={calisteniaEquipo} className="equipo_image" alt="" />
            </Grid>

          </Grid>

          

        </Grid>
      </Grid>
    </Grid>

  </Grid>

</FmaLayout>
  )
}

