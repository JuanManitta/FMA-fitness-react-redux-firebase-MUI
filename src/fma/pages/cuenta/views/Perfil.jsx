import { Divider, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const Perfil = ({handleShowPerfil}) => {

  const { displayName, email } = useSelector(state => state.auth)
  const { userData } = useSelector(state => state.users )

 

  return (
    <Grid
    xs={12} 
    item
       
        sx={{display:{ xs:handleShowPerfil === false ? 'none' : 'block'}}}>
          
          <Grid container
          sx={{display:'flex', p: 5}}>

            <Grid item
            xs={6}
            sx={{display:'grid'}}>
              
              <Grid item
              sx={{mb:2}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Nombre y Apellido</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Email</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Fecha de nacimiento</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Pais o región</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Estado de suscripción</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              
            </Grid>

             <Grid item
             xs={6}>
               <Grid item
               sx={{mb:2}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{displayName}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{email}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>2 de Febrero de 1993</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>Argentina</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{userData.suscripted === true ? 'Activa': 'Inactiva'}</Typography>
               </Grid>
                <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>     
             </Grid>
                   
         </Grid>
    </Grid>
  )
}
