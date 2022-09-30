import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { FmaLayout } from "../../layout/FmaLayout"
import { client } from "../ranking/Ranking"

export const Cuotas = () => {
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
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>FECHA DE INICIO</Typography> </TableCell>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>FECHA DE PAGO</Typography> </TableCell>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>ESTADO</Typography> </TableCell>
                    <TableCell> <Typography sx={{ fontWeight: '700'}}>CUOTA</Typography> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {
                client.map( client => (
                  <TableRow key={client.name} sx={{'&:nth-of-type(odd)': {backgroundColor: 'secondary.main', color:'black' }}}>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.name}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.startDate}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.payDate}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.state}</Typography></TableCell>
                    <TableCell component="th" scope='row'> <Typography sx={{ color: 'inherit', fontWeight: '700' }}>{client.cuota}</Typography></TableCell>
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
