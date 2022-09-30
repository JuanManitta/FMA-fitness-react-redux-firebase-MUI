import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar, Sidebar } from "../components"


const drawerWidth = 220;

export const FmaLayout = ({ children }) => {
  return (
    <Box 
        
      sx={{ display: 'flex' }}>

        <Navbar drawerWidth={ drawerWidth } />
        <Sidebar drawerWidth={ drawerWidth }/>

        <Box component='main'
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#F3F5FA' }}
        >
            <Toolbar/> 
            { children }

        </Box>

    </Box>
    
  )
}
