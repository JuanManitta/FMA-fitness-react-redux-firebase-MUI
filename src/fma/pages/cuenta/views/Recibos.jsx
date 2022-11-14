import { Grid } from '@mui/material'

export const Recibos = ({handleShowRecibos}) => {


  return (
    <Grid item
        xs={7}
        sx={{display:{ xs:handleShowRecibos === false ? 'none' : 'block'}}}>
            <h1>Sin completar</h1>
          
        
    </Grid>
  )
}
