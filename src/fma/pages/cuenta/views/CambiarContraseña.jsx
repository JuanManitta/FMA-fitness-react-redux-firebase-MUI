import { Divider, Grid, Typography } from '@mui/material'

export const CambiarContraseña = ({handleShowPassword}) => {


  return (
    <Grid item
        xs={7}
        sx={{display:{ xs:handleShowPassword === false ? 'none' : 'block'}}}>
            <h1>Sin completar</h1>
          
        
    </Grid>
  )
}
