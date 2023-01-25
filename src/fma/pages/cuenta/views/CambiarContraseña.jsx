import { Divider, Grid, Typography } from '@mui/material'

export const CambiarContraseña = ({handleShowPassword}) => {


  return (
    <Grid item
        xs={7}
        sx={{display:{ xs:handleShowPassword === false ? 'none' : 'felx'}, p: 8}}>
            <h3 >Sin implementar</h3>
    </Grid>
  )
}
