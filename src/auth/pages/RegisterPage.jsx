import { Link as RouterLink } from 'react-router-dom';

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email:       [ (value) => value.includes('@'), 'El correo debe tener una @'],
  password:    [ (value) => value.length >= 6,   'El password debe tener mas de 6 letras'],
  displayName: [ (value) => value.length >= 1,   'El nombre es obligatorio.'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);
  console.log(isCheckingAuthentication);


  const {
    displayName, email, password, onInputChange, onResetForm,
    isFormValid, emailValid, 
    passwordValid, displayNameValid, formState 
  } = useForm(formData, formValidations);


  const onFormSubmit = (event) =>{
    event.preventDefault();
    
    setFormSubmited(true);

    
    
    if (!isFormValid) return;
    
    dispatch(startCreatingUserWithEmailPassword(formState))
    onResetForm()

  }
  


  return (
    <AuthLayout title='Sign In'>
         <form onSubmit={onFormSubmit}>
              <Grid container>
                <Grid item 
                xs={12}
                sx={{mb: 2}}>
                  <TextField 
                    label="nombre completo" 
                    type="text" 
                    placeholder='john doe' 
                    fullWidth
                    name='displayName'
                    value= {displayName}
                    onChange={onInputChange}
                    error={ !!displayNameValid && formSubmited }
                    helperText = { displayNameValid }
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
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    error={ !!emailValid && formSubmited }
                    helperText = { emailValid }
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
                    error={ !!passwordValid && formSubmited }
                    helperText = { passwordValid }
                  />
                </Grid>
                <Grid container 
                  spacing={2} 
                    sx={{mb:2}}>

                  <Grid
                    display={!!errorMessage ? 'block': 'none'} 
                    item
                    marginTop={2} 
                    xs={12}>
                    <Alert severity='error'>{errorMessage}</Alert>
                  </Grid>

                  <Grid item 
                    xs={12}>
                    <Button
                      disabled={isCheckingAuthentication}
                      type='submit'
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
