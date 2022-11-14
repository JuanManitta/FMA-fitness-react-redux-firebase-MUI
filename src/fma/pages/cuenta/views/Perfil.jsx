import { Divider, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const Perfil = ({handleShowPerfil}) => {

  const { displayName, email } = useSelector(state => state.auth)
  const { userData } = useSelector(state => state.users )

 

  return (
    <Grid item
        xs={7}
        sx={{display:{ xs:handleShowPerfil === false ? 'none' : 'block'}}}>
          
          <Grid container
          sx={{display:'flex'}}>
            <Grid item
            xs={4}
            sx={{display:'grid'}}>
              
              <Grid item
              sx={{mb:2}}>
                <Typography sx={{opacity: 0.4}}>Nombre y Apellido</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4}}>Email</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4}}>Fecha de nacimiento</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4}}>Pais o región</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4}}>Estado de suscripción</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              
            </Grid>
             <Grid item
             xs={6}>
               <Grid item
               sx={{mb:2}}>
                 <Typography sx={{textAlign:'right'}}>{displayName}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right'}}>{email}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right'}}>2 de Febrero de 1993</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right'}}>Argentina</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right'}}>{userData.suscripted === true ? 'Activa': 'Inactiva'}</Typography>
               </Grid>
                <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>     
             </Grid>
                   
         </Grid>
    </Grid>
  )
}
