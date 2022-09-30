import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Sign In'>
         <form>
              <Grid container>
                <Grid item 
                xs={12}
                sx={{mb: 2}}>
                  <TextField 
                    label="nombre completo" 
                    type="text" 
                    placeholder='john doe' 
                    fullWidth
                  />
                </Grid>
                <Grid item 
                xs={12}
                sx={{mb: 2}}>
                  <TextField 
                    label="correo" 
                    type="email" 
                    placeholder='correo@google.com' 
                    fullWidth
                  />
                </Grid>
                <Grid item
                  xs={12}> 

                  <TextField 
                    label="contraseña" 
                    type="password" 
                    placeholder='password' 
                    fullWidth
                  />
                </Grid>
                <Grid container 
                  spacing={2} 
                    sx={{mb:2}}>
                  <Grid item 
                    xs={12}>
                    <Button
                      variant="contained" 
                      sx={{mt: 2, backgroundColor: 'primary.main'}} 
                      fullWidth>
                      Sign in
                    </Button> 

                  </Grid>

                </Grid>
                <Grid container direction="row" justifyContent="end">
                  <Link component={RouterLink} color="inherit" to="/auth/login">
                    ¿Ya tienes cuenta? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayout>
  )
}
