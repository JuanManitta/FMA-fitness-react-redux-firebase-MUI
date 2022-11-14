import { Button, Divider, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletingActivity } from '../../../../store/activities/thunks'

export const Actividades = ({handleShowActividades}) => {

  const { userData } = useSelector(state => state.users )
  const {activities = [], numberOfActivities} = userData
  const dispatch = useDispatch(); 

  const onDeleteActivity = (item) =>{
    dispatch(startDeletingActivity(item))
    
    
  }
  
 

  return (
    <Grid item
        xs={7}
        sx={{display:{ xs:handleShowActividades === false ? 'none' : 'block'}}}>
          <Typography 
            variant='h3'
            sx={{display: {xs: numberOfActivities === 0 ? 'block' : 'none'}}}
            >
              AÚN NO HAY ACTIVIDADES AGENDADAS :(
          </Typography>

          {
            activities.map( item => (
             
            <Grid container
              key={item.id}>
              <Grid container
              sx={{display:'flex'}}>

            <Grid item
            xs={6}
            sx={{display:'grid'}}>
              
              <Grid item
              sx={{mb:2}}>
                <Typography sx={{opacity: 0.4}}>Actividad</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4}}>Días</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              <Grid item
              sx={{mb:2, mt:1.5}}>
                <Typography sx={{opacity: 0.4}}>Horario</Typography>
              </Grid>
              <Divider sx={{backgroundColor:'black', opacity:'0.1'}}  variant='fullWidth'/>
              
            </Grid>
             <Grid item
             xs={4}>
               <Grid item
               sx={{mb:2}}>
                 <Typography sx={{textAlign:'right'}}>{item.name}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right'}}>{item.days}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
               <Grid item
               sx={{mb:2, mt:1.5}}>
                 <Typography sx={{textAlign:'right'}}>{item.time}</Typography>
               </Grid>
               <Divider sx={{backgroundColor:'black', opacity:'0.1'}} variant='fullWidth'/>
             </Grid>
         </Grid>
         <Grid item
         sx={{mt:4}}>
          <Button
            onClick={() => onDeleteActivity(item)} 
            variant='contained'
            sx={{backgroundColor:'secondary.main', mb:6}}>
              Eliminar
            </Button>
         </Grid>
         </Grid>
         
            ))
          }
         

    </Grid>
  )
}
