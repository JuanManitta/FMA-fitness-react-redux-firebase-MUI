import { Link as RouterLink, Navigate } from 'react-router-dom';

import { Button, Grid, Link, TextField } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';



export const LoginPage = () => {

  
  return (
    <AuthLayout title='Login'>   
            <form>
              <Grid container>
                <Grid item 
                xs={12}
                sx={{mb: 2}}>
                  <TextField 
                    label="correo" 
                    type="email" 
                    placeholder='Correo@google.com' 
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
                      component={RouterLink}  
                      to="/fma" 
                      fullWidth>
                      Login
                    </Button> 

                  </Grid>

                </Grid>
                <Grid container direction="row" justifyContent="end">
                  <Link component={RouterLink} color="inherit" to="/auth/register">
                    Crear una cuenta
                  </Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayout>  
  )
}
