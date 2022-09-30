import { Button, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { AuthLayout } from "../../../auth/layout/AuthLayout"
import { FmaLayout } from "../../layout/FmaLayout"

export const Alumnos = () => {

  return (
<FmaLayout>

    <Grid
     className='animate__animated animate__fadeIn animate__faster'  
     container
     sx={{ minHeight: '100vh'}}
     >
      <Grid
      container
      direction="column"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: '#F3F5FA' }}
      >
        <Grid
        item
        xs={3}
        sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2, boxShadow: '5', width: '400px' }} >

          <Typography color='primary.main' className="text-center" variant="h5" sx={{mb: 3}}>
            <b>Nuevo Alumno</b>
          </Typography>
         

          <form>
              <Grid container>
                <Grid item 
                xs={12}
                sx={{mb: 2}}>
                  <TextField 
                    label="nombre y apellido" 
                    type="text" 
                    placeholder='john doe' 
                    fullWidth
                    />
                </Grid>
                <Grid item
                  xs={12}
                  sx={{mb: 2}}> 

                  <TextField 
                    label="actividad" 
                    type="text" 
                    placeholder='crossfit' 
                    fullWidth
                    />
                </Grid>
                <Grid item
                  xs={12}
                  sx={{mb: 2}}> 

                  <TextField 
                    label="fecha de inicio" 
                    type="text" 
                    placeholder='dd/mm/aaaa' 
                    fullWidth
                    />
                </Grid>
                <Grid item
                  xs={12}
                  sx={{mb: 2}}> 

                  <TextField 
                    label="fecha de pago" 
                    type="text" 
                    placeholder='dd/mm/aaaa' 
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
                      Ingresar
                    </Button> 

                  </Grid>
                </Grid>
              </Grid>
            </form>
        </Grid>
      </Grid>
    </Grid>
   </FmaLayout>
  )
}
