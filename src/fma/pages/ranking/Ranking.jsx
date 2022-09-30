import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { FmaLayout } from '../../layout/FmaLayout'

export const client = [
  {
    name: 'Juan Manitta',
    goldMedall: 2,
    silverMedall: 2,
    bronceMedall: 4,
    startDate: '23/10/2022',
    payDate: '23/10/2022',
    state: 'Activo',
    cuota: '$5000'
  },
  {
    name: 'Marina Mazzocchini',
    goldMedall: 2,
    silverMedall: 2,
    bronceMedall: 4
  },
  {
    name: 'Marcos Antonini',
    goldMedall: 2,
    silverMedall: 2,
    bronceMedall: 4
  },
  {
    name: 'Abel Fernandez',
    goldMedall: 2,
    silverMedall: 2,
    bronceMedall: 4
  },
  {
    name: 'Federico Fernandez',
    goldMedall: 2,
    silverMedall: 2,
    bronceMedall: 4
  },
]
export const Ranking = () => {

  return (
<FmaLayout>

    <Grid
      className='animate__animated animate__fadeIn animate__faster' 
      container
      spacing={0}
      direction="column"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 120px)', padding: 3, backgroundColor:  '#F3F5FA'}}
      >
      <Grid item>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
            <TableHead>
                <TableRow>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>NOMBRE</Typography> </TableCell>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>ORO</Typography> </TableCell>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>PLATA</Typography> </TableCell>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>BRONCE</Typography> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {
                client.map( client => (
                  <TableRow key={client.name} sx={{'&:nth-of-type(odd)': {backgroundColor: 'secondary.main', color:'black' }}}>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.name}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.goldMedall}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.silverMedall}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.bronceMedall}</Typography></TableCell>
                </TableRow>
                ))
              }
                
            </TableBody>
        </Table>
      </TableContainer>
      </Grid>

    </Grid>
</FmaLayout>
  )
}
