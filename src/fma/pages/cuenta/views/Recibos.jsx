import { Grid } from '@mui/material'

export const Recibos = ({handleShowRecibos}) => {


  return (
    <Grid item
        xs={7}
        sx={ {display:{ xs:handleShowRecibos === false ? 'none' : 'block' }, p:5}}>
            <h3>Sin Implementar</h3>
          
        
    </Grid>
  )
}
