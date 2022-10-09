import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import { Navbar, Sidebar } from "../components"


const drawerWidth = 220;

export const FmaLayout = ({ children }) => {


  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Box 
        
      sx={{ display: 'flex' }}>

        <Navbar
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          drawerWidth={ drawerWidth } />
        <Sidebar drawerWidth={drawerWidth} 
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}/>
          

        <Box component='main'
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#F3F5FA' }}
        >
            <Toolbar/> 
            { children }

        </Box>

    </Box>
    
  )
}
