import { AccessAlarmsRounded } from '@mui/icons-material'
import { Button, Divider, Grid, List, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FmaLayout } from '../../../../layout/FmaLayout'

export const TurnosLayout = ({children, 
    name ='', 
    days='', 
    cupo ='', 
    img='', 
    text=''
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenResponsive, setIsOpenResponsive] = useState(false);
    const [isOpenResponsive2, setIsOpenResponsive2] = useState(false);

    const handleModal = () =>{
        isOpen !== true ? setIsOpen(true) || setIsOpen2(false) : setIsOpen(false);
    };
    const handleModal2 = () =>{
        isOpen2 !== true ? setIsOpen2(true) || setIsOpen(false) : setIsOpen2(false);
    };
    const handleModalResponsive = () =>{
        isOpenResponsive !== true ? setIsOpenResponsive(true) || setIsOpenResponsive2(false) : setIsOpenResponsive(false);
    };

    const handleModalResponsive2 = () =>{
        isOpenResponsive2 !== true ? setIsOpenResponsive2(true) || setIsOpenResponsive(false) : setIsOpenResponsive2(false);
    }

  return (
    <FmaLayout>
    <Grid container
      className='animate__animated animate__fadeIn animate__faster' 
      direction="row"
      sx={{ minHeight: 'calc(100vh - 120px)', p:2, backgroundColor: '#F3F5FA', display: {xs: 'grid', md: 'flex' }}}
      >
        <Grid item
        xs={12}
        md={4} 
        >
         <img className='img_activities' src={img} alt="" />
         <Typography sx={{mt:3}}>
            <li><b>Profesor:</b> {name}</li>
            <li><b>Cupo maximo:</b> {cupo}</li>
            <li><b>Días:</b> {days}</li>
         </Typography> 
        </Grid>

        <Grid item
          xs={12} md={8}
          sx={{ pl:{md: 8}}}>

          
          <Divider 
          sx={{borderColor: 'primary.main', m: 5, display:{md:'none'}}} 
          />
          <Grid container
          direction="column"
          alignContent="left"
          justifyContent="center"
         >

            
            <Grid item >
                <Button  onClick={handleModal}  variant="contained" 
                    sx={{ width: '90%', fontSize: 13, mb:3, display: {xs: 'none', md: 'flex'}}}><List sx={{mr: 1}}/>
                    Lunes | Miercoles | Viernes
                </Button>

                <Grid container
                direction="row"
                sx={{ width:'90%', boxShadow: 3, p: 1, mt: 2,mb:2, borderRadius: 2, display: {xs: isOpen === true ? 'flex' : 'none'}  }}>
                    <Grid container
                    >
                        <Grid item sx={{p:0.5, mb: 2}}><AccessAlarmsRounded color="white" sx={{ borderRadius: 1}}/></Grid>
                        
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>8:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>9:00 am</Grid>
                        <Grid item> <Button variant="contained" >Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>10:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>11:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>12:00 pm</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>

                </Grid>

            </Grid>
            <Grid item >
                <Button onClick={handleModal2}  variant="contained" 
                    sx={{ width: '90%', fontSize: 13, display: {xs: 'none', md: 'flex'}}}><List sx={{mr: 1}}/>
                    Martes | Jueves | Sábados
                </Button>

                <Grid container
                direction="row"
                sx={{width:'90%', boxShadow: 3, p: 1, mt: 2, borderRadius: 2, display: {xs: isOpen2 === true ? 'flex' : 'none'}  }}>
                    <Grid container
                    >
                        <Grid item sx={{p:0.5, mb: 2}}><AccessAlarmsRounded color="white" sx={{ borderRadius: 1}}/></Grid>
                        
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>8:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>9:00 am</Grid>
                        <Grid item> <Button variant="contained" >Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>10:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>11:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>12:00 pm</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={6} >
                <Button onClick={handleModalResponsive} fullWidth variant="contained" sx={{mb: 4, fontSize: 13, display: { md:'none'}}}> <List sx={{mr: 1}}/> 
                Lu | Mie | Vie
                </Button>

                <Grid container
                direction="row"
                sx={{ width:'100%', 
                    boxShadow: 3, p: 1, 
                    mt: 2,mb:2, 
                    borderRadius: 2, 
                    display: {xs: isOpenResponsive === true ? 'flex' : 'none', md: 'none'}  
                }}>
                    <Grid container
                    >
                        <Grid item sx={{p:0.5, mb: 2}}><AccessAlarmsRounded color="white" sx={{ borderRadius: 1}}/></Grid>
                        
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>8:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>9:00 am</Grid>
                        <Grid item> <Button variant="contained" >Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>10:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>11:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>12:00 pm</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>

                </Grid>
                
                
            </Grid>

            <Grid item xs={6}>
                <Button onClick={handleModalResponsive2} fullWidth variant="contained" sx={{fontSize: 13, display: { md:'none'}}}> <List sx={{mr: 1}}/> 
                    Ma | Jue | Sá
                </Button>

                <Grid container
                direction="row"
                sx={{ width:'100%', 
                    boxShadow: 3, p: 1, 
                    mt: 2,mb:2, 
                    borderRadius: 2, 
                    display: {xs: isOpenResponsive2 === true ? 'flex' : 'none', md: 'none'}  
                }}>
                    <Grid container
                    >
                        <Grid item sx={{p:0.5, mb: 2}}><AccessAlarmsRounded color="white" sx={{ borderRadius: 1}}/></Grid>
                        
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>8:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>9:00 am</Grid>
                        <Grid item> <Button variant="contained" >Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>10:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>11:00 am</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>
                    <Grid container
                    justifyContent="space-between"
                    sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>12:00 pm</Grid>
                        <Grid item> <Button variant="contained" disabled>Agendar</Button></Grid>
                    </Grid>

                </Grid>
            </Grid>
            
          </Grid>
        </Grid>

    </Grid>
</FmaLayout>
)
}


