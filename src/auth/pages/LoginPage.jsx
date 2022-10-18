import { Link as RouterLink, Navigate } from 'react-router-dom';

import { Alert, Button, CircularProgress, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { Google } from '@mui/icons-material';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';



export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)
  const dispatch = useDispatch()

  const isAuthenticating = useMemo(() => status === 'checking', [status]);


  const { email, password, onInputChange, onResetForm } = useForm({
    email:'',
    password: '',
  });

  const onFormSubmit = (event) =>{
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({email, password}) )

  };

  const googleSignIn = () =>{
    dispatch( startGoogleSignIn() )
    
    
  };

  
  return (
    <AuthLayout title='Login'>
      { status === 'checking' ? <Grid container justifyContent="center" alignContent="center"><CircularProgress/></Grid> :
            <form onSubmit={onFormSubmit}>
              <Grid container>
                <Grid item 
                xs={12}
                sx={{mb: 2}}>
                  <TextField 
                    label="correo" 
                    type="email" 
                    placeholder='Correo@google.com' 
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    />
                </Grid>
                <Grid item
                  xs={12}> 

                  <TextField 
                    label="contraseña" 
                    type="password" 
                    placeholder='password' 
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    />
                </Grid>
                <Grid container 
                  spacing={2} 
                  sx={{mb:2}}>
                  <Grid
                      item
                      display={!!errorMessage ? 'block' : 'none'}
                      marginTop={2} 
                      xs={12}>
                    <Alert severity='error'>{errorMessage}</Alert>
                  </Grid>
                  <Grid item 
                    xs={6}>
                    <Button
                      disabled={ isAuthenticating }
                      type='submit'
                      variant="contained" 
                      sx={{mt: 2, backgroundColor: 'primary.main'}}
                      fullWidth>
                      Login
                    </Button> 

                  </Grid>
                  <Grid item 
                    xs={6}>
                    <Button
                      disabled={ isAuthenticating }
                      onClick={googleSignIn}
                      variant="contained" 
                      sx={{mt: 2, backgroundColor: 'primary.main'}}
                      fullWidth>
                      <Google/> <Typography variant='span' marginLeft={1}>Google</Typography>
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
  }   
    </AuthLayout>  
  )
}
