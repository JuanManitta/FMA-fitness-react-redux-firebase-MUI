import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import { Navbar, Sidebar } from "../components"


const drawerWidth = 220;

export const FmaLayout = ({ children }) => {


  const [isOpen, setIsOpen] = useState(true)

  return (
    <Box 
        
      sx={{ display: 'flex' }}>

        <Navbar
          setIsOpen={setIsOpen} 
          isOpen={isOpen} 
          drawerWidth={ drawerWidth } />
        <Sidebar drawerWidth={drawerWidth} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}/>
          

        <Box component='main'
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#F3F5FA' }}
        >
            <Toolbar/> 
            { children }

        </Box>

    </Box>
    
  )
}
