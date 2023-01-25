import { Button, Divider, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { StartunSuscribingUser } from '../../../../store/users/thunks'

export const Suscription = ({handleShowSuscription}) => {

  const { userData } = useSelector(state => state.users )
  const dispatch = useDispatch();

  const unSuscribing = () =>{
    toast.success('Suscripcion cancelada')
    dispatch(StartunSuscribingUser())
  };


 

  return (
    <Grid item
        xs={12}
        sx={{display:{ xs:handleShowSuscription === false ? 'none' : 'block'}, p: 5}}>
          
          <Grid container
          sx={{display:'flex'}}>
            <Grid item
            xs={6}
            sx={{display:'grid'}}>
              
              <Grid item
              sx={{mb:2}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Estado de suscripcion</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Fecha de inicio</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Proximo vencimiento</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4, fontSize: {xs: 14, sm: 16}}}>Nivel de suscripcion</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              
            </Grid>
             <Grid item
             xs={6}>
               <Grid item
               sx={{mb:2}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{userData.suscripted === true ? 'Activa': 'Inactiva'}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{userData.suscripted === true ? '10/10/2022': 'Sin Suscripción'}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{userData.suscripted === true ? '10/11/2022': 'Sin Suscripción'}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right', fontSize: {xs: 14, sm: 16}}}>{userData.suscripted === true ? 'Suscripción total': 'Sin suscripción'}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>  
             </Grid>
         </Grid>

         <Grid item
         sx={{mt:6}}>
          <Button
            disabled={!userData.suscripted}
            onClick={unSuscribing} 
            variant='contained'
            sx={{backgroundColor:'secondary.main'}}>
              Cancelar suscripcion
            </Button>
         </Grid>
         

    </Grid>
  )
}
