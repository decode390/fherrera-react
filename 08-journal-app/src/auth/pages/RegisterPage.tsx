import {Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const RegisterPage = () => {
  return (
    <>
      <Typography variant='h5' sx={{mb: 1}}>Register</Typography>
      <form action="">
        <Grid container>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField 
              label='Nombre completo' 
              type='text' 
              placeholder='John Doe'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField 
              label='Correo' 
              type='email' 
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField 
              label='Contraseña' 
              type='password' 
              placeholder='Contraseña'
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{my:2}}>

            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
                Registrar
              </Button>
            </Grid>

          </Grid>

          <Grid 
            container 
            direction={'row'}
            justifyContent={'end'}
          >
            <Link 
              component={RouterLink} 
              color={'inherit'} 
              to={'/auth/login'}
            >
              Ingresar
            </Link>
          </Grid>


        </Grid>
      </form>
    </>
  )
}
