import { Email, Facebook, FormatQuote, Instagram, Twitter, WhatsApp } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster' 
      container
      spacing={0}
      direction="column"
      alignItems="center"  
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 120px)', padding: 0, backgroundColor:  '#F3F5FA'}}
    >
        <Grid item xs={ 12 }>
            <Typography 
                align="center" 
                sx={{mb: 2}}
            >
                <FormatQuote fontSize="large"/>
            </Typography>

            <Typography align="center" variant="h2"><b>You can't be wrong <br />with strong</b></Typography>
        </Grid>
        <Grid item
            sx={{ mt: 6}}    
        >
            <IconButton>
                <Instagram fontSize="large"/>
            </IconButton>
            <IconButton>
                <Facebook fontSize="large"/>
            </IconButton>
            <IconButton>
                <Twitter fontSize="large"/>
            </IconButton>
            <IconButton>
                <WhatsApp fontSize="large"/>
            </IconButton>
            <IconButton>
                <Email fontSize="large"/>
            </IconButton>
        </Grid>
    </Grid>
  )
}
