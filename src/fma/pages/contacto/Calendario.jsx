import { Email, FmdGood, Instagram, KeyboardArrowDown, LibraryBooks, MenuOutlined, Phone, Security, WhatsApp } from "@mui/icons-material"
import { Button, Divider, Grid, TextField, Typography, FormControlLabel, Radio, AppBar, IconButton, Drawer, BottomNavigation, Toolbar, Container, ListItem } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FmaLayout } from "../../layout/FmaLayout"

export const Contacto = () => {

  const [isOpenQuestion, setIsOpenQuestion] = useState(false)
  const [isOpenQuestion2, setIsOpenQuestion2] = useState(false)
  const [isOpenQuestion3, setIsOpenQuestion3] = useState(false)
  const [isOpenQuestion4, setIsOpenQuestion4] = useState(false)
  const [isOpenQuestion5, setIsOpenQuestion5] = useState(false)
  const [isOpenQuestion6, setIsOpenQuestion6] = useState(false)
  const [isOpenQuestion7, setIsOpenQuestion7] = useState(false)

  const handleToggleQuestion = () =>{
    setIsOpenQuestion(!isOpenQuestion)
  };
  const handleToggleQuestion2 = () =>{
    setIsOpenQuestion2(!isOpenQuestion2)
  };
  const handleToggleQuestion3 = () =>{
    setIsOpenQuestion3(!isOpenQuestion3)
  };
  const handleToggleQuestion4 = () =>{
    setIsOpenQuestion4(!isOpenQuestion4)
  };
  const handleToggleQuestion5 = () =>{
    setIsOpenQuestion5(!isOpenQuestion5)
  };
  const handleToggleQuestion6 = () =>{
    setIsOpenQuestion6(!isOpenQuestion6)
  };
  const handleToggleQuestion7 = () =>{
    setIsOpenQuestion7(!isOpenQuestion7)
  };
 


  return (
    <>
<FmaLayout>
<Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ backgroundColor: '#F3F5FA', display: 'flex', pl:2, pr:2, justifyContent:'space-around'}}
      >
        <Grid item xs={5}>
          <Typography  sx={{textAlign:'center', fontSize: 30, fontWeight:'bold', mt:6, mb: 4 }}>CONTACTO</Typography>
        </Grid>
        <Grid item xs={5} sx={{ display: {xs:'none', sm:'none', md:'block' }}}>
          <Typography  sx={{textAlign:'center', fontSize: 30, fontWeight:'bold', mt:6 }}>PREGUNTAS FRECUENTES</Typography>
        </Grid>
        


      <Grid
      container
      direction="row"
      justifyContent="center"
      alignContent="center"
      sx={{ backgroundColor: '#F3F5FA', display: 'flex', justifyContent: 'space-around' }}
      >
        <Grid
        item
        xs={12} sm={12} md={5}
        sx={{  backgroundColor: 'white', padding: 4, borderRadius: 2, boxShadow: '5', mb: {xs: 5, sm: 5, md: 0} }} >

         

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
                    label="mail" 
                    type="mail" 
                    placeholder='juan@google.com' 
                    fullWidth
                    />
                </Grid>
                <Grid item
                  xs={12}
                  sx={{mb: 2}}> 

                  <TextField 
                    label="telefono" 
                    type="number" 
                    placeholder='2213456789' 
                    fullWidth
                    />
                </Grid>
                <Grid item
                  xs={12}
                  sx={{mb: 2}}> 

                  <TextField 
                    label="dejanos un comentario" 
                    type="texto" 
                    placeholder='comentario' 
                    fullWidth
                    inputProps={{ style: { height: 100 }}}
                    />
                </Grid>
                <Grid container >
                  <Grid item 
                    xs={12} >
                    <Button
                      variant="contained"
                      size="large" 
                      sx={{mt: 10, backgroundColor: 'primary.main' }}
                      fullWidth>
                      ENVIAR
                    </Button> 

                  </Grid>
                </Grid>
              </Grid>
            </form>
        </Grid>
       

        <Typography  sx={{textAlign:'center', fontSize: 30, fontWeight:'bold', mt:5, mb: 8 , display: {xs:'block', sm:'none', md:'none'}}}>PREGUNTAS FRECUENTES</Typography>
        <Grid item xs={12} sm={12} md={5}
          sx={{justifyContent:'center', boxShadow: 5, borderRadius: 2, }}>

            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion2}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion2 === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion3}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion3 === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion4}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion4 === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion5}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion5 === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion6}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion6 === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
            <Grid item 
            sx={{display:'flex', justifyContent:'space-between', borderBottom: 1, borderColor:'#A2B5BB', p:2  }}>
                <Grid container
                justifyContent="start"
                alignContent="center"
                >
                  <Typography sx={{fontWeight: 'bold', ml:3}}>
                    ¿La mar en coche, en coche, o en coche?
                  </Typography>
                </Grid>
              <IconButton onClick={handleToggleQuestion7}>
                <KeyboardArrowDown/>
              </IconButton>

              </Grid>
              <Grid 
              className="animate__animated animate__fadeInDown animate__faster"
              container
              sx={{ p:2, backgroundColor: '#D3DCDF', display: {xs: isOpenQuestion7 === true ? 'block' : 'none'}}}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam quia ipsum beatae quae. Veritatis rerum aspernatur ipsum eveniet iusto, minus veniam est assumenda eius, eum nostrum odio ex consequatur!</Typography>
              </Grid>
        </Grid>
      </Grid>
      
    </Grid>
   <footer>
   <Box bgcolor="#464857" padding={4} marginTop={30}>
     <Container maxWidth="lg">
       <Grid container spacing={5} color={'white'} sx={{display: {xs: 'grid', sm:'grid', md:'flex'}}}>
         <Grid item xs={6}>
           <Box borderBottom={1}>
            <Typography variant="h5" marginBottom={1} fontWeight={'bolder'}> CONTACTO </Typography>
           </Box>

           <Box marginTop={2} display={'flex'}>
            <FmdGood/>
            <Typography marginLeft={2}>Calle 30, N°540</Typography>
           </Box>
           <Box marginTop={3} display={'flex'}>
            <WhatsApp/>
            <Typography marginLeft={2}>221-456-4561</Typography>
           </Box>
           <Box marginTop={3} display={'flex'}>
            <Email/>
            <Typography marginLeft={2}>gimnasiofma@contacto.com</Typography>
           </Box>
         </Grid>
         <Grid item xs={6}>
           <Box borderBottom={1} display={'flex'} sx={{justifyContent: {xs:'start', sm:'start', md:'end'}}}  >
            <Typography variant="h5" marginBottom={1} fontWeight={'bolder'}> LEGAL </Typography>
           </Box>

           <Box marginTop={2} display={'flex'} sx={{justifyContent: {sx:'left', sm:'left', md: 'end'}}}>
            <LibraryBooks sx={{display:{xs:'block', sm:'block', md:'none'}, mr: 2}}/>
            <Typography marginRight={2}>Terminos y condiciones</Typography>
            <LibraryBooks sx={{display:{xs:'none', sm:'none', md:'block'}}}/>
           </Box>
           <Box marginTop={3} display={'flex'} sx={{justifyContent: {sx:'left', sm:'left', md: 'end'}}}>
            <Security sx={{display:{xs:'block', sm:'block', md:'none'}, mr: 2}}/>
            <Typography marginRight={2}>Politicas de privacidad</Typography>
            <Security sx={{display:{xs:'none', sm:'none', md:'block'}}}/>
           </Box>
           <Box marginTop={3} display={'flex'} sx={{justifyContent: {sx:'left', sm:'left', md: 'end'}}}>
            <Phone sx={{display:{xs:'block', sm:'block', md:'none'}, mr: 2}}/>
            <Typography marginRight={2}>Atencion al consumidor</Typography>
            <Phone sx={{display:{xs:'none', sm:'none', md:'block'}}}/>
           </Box>
         </Grid>
       </Grid>
     </Container>
   <Grid item xs={12} marginTop={8}>
    <Box marginLeft={'auto'} marginRight={'auto'} borderTop={1} color={'white'} width={'70%'}>
        <Typography marginTop={2} fontSize={13} textAlign={'center'}>
        En Fma Fitness cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329).
        Copyright (c) 2022 FMAFITNESS. Todos los derechos reservados.
        </Typography>
    </Box>

   </Grid>
   </Box>
 </footer>
   </FmaLayout>
</>
  )
}
