import { AccessAlarmsRounded } from '@mui/icons-material'
import { Button, Divider, Grid, List, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { FmaLayout } from '../../../../layout/FmaLayout'
import calisteniaImg from '../../../../../../canva/Iconos/turnos/calistenia.png'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { startSettingNewActivity } from '../../../../../store/users/thunks'
import { startEditingSchedule } from '../../../../../store/activities/thunks'

export const CalisteniaTurnos = () => {
    const dispatch = useDispatch()
    const { activities } = useSelector(state => state.activities)
    const { userData } = useSelector(state => state.users)

    const numbOfActivities = useMemo(() => userData.numberOfActivities >= 2, [userData.numberOfActivities]);
    const suscripted = userData.suscripted


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenResponsive, setIsOpenResponsive] = useState(false);
    const [isOpenResponsive2, setIsOpenResponsive2] = useState(false);

    const handleModal = () =>{
        isOpen !== true 
        ? setIsOpen(true) 
        || setIsOpen2(false) 
        : setIsOpen(false);
    };
    const handleModal2 = () =>{
        isOpen2 !== true 
        ? setIsOpen2(true) 
        || setIsOpen(false) 
        : setIsOpen2(false);
    };
    const handleModalResponsive = () =>{
        isOpenResponsive !== true 
        ? setIsOpenResponsive(true) 
        || setIsOpenResponsive2(false) 
        : setIsOpenResponsive(false);
    };

    const handleModalResponsive2 = () =>{
        isOpenResponsive2 !== true 
        ? setIsOpenResponsive2(true) 
        || setIsOpenResponsive(false) 
        : setIsOpenResponsive2(false);
    };

    const calistenia = activities.filter( item => item.name === 'calistenia')
    const calisteniaLunMierVier = calistenia.filter( item => 
        item.days === 'Lunes, Miercoles, Viernes');
    const calisteniaMarJue = calistenia.filter( item => 
        item.days === 'Martes, Jueves');

        const getData = (item) =>{
        
            const existingActivity = userData.activities.filter(act => act.id === item.id)
            
            if( !!existingActivity[0] === false ){
    
                dispatch(startSettingNewActivity(item))
                dispatch(startEditingSchedule(item))
    
                toast.success('Horario Agendado')
                
            } else if (existingActivity[0].id === item.id) {
                toast.error('Horario ya registrado')
            }
         
        }

   

  return (
    <FmaLayout>
    <Grid container
      className='animate__animated animate__fadeIn animate__faster' 
      direction="row"
      sx={{ minHeight: '100vh', p:2, backgroundColor: '#F3F5FA', display: {xs: 'grid', md: 'flex' }}}
      >
        <Grid item
        xs={12}
        md={4} 
        >
         <img className='img_activities' src={calisteniaImg} alt="" />
         <Typography sx={{mt:3}}>
            <li><b>Profesor:</b> Marcos Antonini</li>
            <li><b>Cupo maximo:</b> 10 personas </li>
            <li><b>Días:</b> Lunes a Viernes</li>
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
                    {
                        calisteniaLunMierVier.map((item, index) =>(
                            <Grid container
                                key={index}
                                justifyContent="space-between"
                                sx={{mb:2}}>
                            <Grid item sx={{p:0.5}}>
                                {item.time}
                            </Grid>
                                <Grid item> 
                                    <Button 
                                        disabled={numbOfActivities || !suscripted || item.capacity <= 0} 
                                        onClick={ ()=> getData(item)} 
                                        variant="contained" 
                                        >
                                        <Typography 
                                            sx={{display:{xs: suscripted ? 'none' : 'block' }}}>
                                            Aun no estas suscripto
                                        </Typography>
                                        <Typography 
                                            sx={{display:{xs: suscripted ? 'block' : 'none' }}}>
                                            Agendar
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item >
                <Button onClick={handleModal2}  variant="contained" 
                    sx={{ width: '90%', fontSize: 13, display: {xs: 'none', md: 'flex'}}}><List sx={{mr: 1}}/>
                    Martes | Jueves 
                </Button>

                <Grid container
                direction="row"
                sx={{width:'90%', boxShadow: 3, p: 1, mt: 2, borderRadius: 2, display: {xs: isOpen2 === true ? 'flex' : 'none'}  }}>
                    <Grid container
                    >
                        <Grid item sx={{p:0.5, mb: 2}}><AccessAlarmsRounded color="white" sx={{ borderRadius: 1}}/></Grid>
                        
                    </Grid>
                    {
                    calisteniaMarJue.map((item, index) =>(
                        <Grid container
                            key={index}
                            justifyContent="space-between"
                            sx={{mb:2}}>
                        <Grid item sx={{p:0.5}}>
                            {item.time}
                        </Grid>
                            <Grid item> 
                            <Button 
                                disabled={numbOfActivities || !suscripted || item.capacity <= 0} 
                                onClick={ ()=> getData(item)} 
                                variant="contained" 
                                >
                                <Typography 
                                    sx={{display:{xs: suscripted ? 'none' : 'block' }}}>
                                    Aun no estas suscripto
                                </Typography>
                                <Typography 
                                    sx={{display:{xs: suscripted ? 'block' : 'none' }}}>
                                    Agendar
                                </Typography>
                            </Button>
                            </Grid>
                        </Grid>
                        ))
                    }
                    

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
                    {
                        calisteniaLunMierVier.map((item, index) =>(
                            <Grid container
                                key={index}
                                justifyContent="space-between"
                                sx={{mb:2}}>
                            <Grid item sx={{p:0.5}}>
                                {item.time}
                            </Grid>
                                <Grid item> 
                                    <Button 
                                        variant="contained" 
                                        disabled>
                                            Agendar
                                    </Button>
                                </Grid>
                            </Grid>
                        ))
                    }
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
                    {
                        calisteniaMarJue.map((item, index) =>(
                            <Grid container
                                key={index}
                                justifyContent="space-between"
                                sx={{mb:2}}>
                            <Grid item sx={{p:0.5}}>
                                {item.time}
                            </Grid>
                                <Grid item> 
                                    <Button 
                                        variant="contained" 
                                        disabled>
                                            Agendar
                                    </Button>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            
          </Grid>
        </Grid>

    </Grid>
</FmaLayout>
)
}


