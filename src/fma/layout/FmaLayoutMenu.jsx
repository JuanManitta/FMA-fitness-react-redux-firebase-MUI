import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import { Navbar, Sidebar } from "../components"


const drawerWidth = 220;

export const FmaLayoutMenu = ({ children }) => {


  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box 
        
      sx={{ display: 'flex' }}>

        <Navbar
          setIsOpen={setIsOpen} 
          isOpen={isOpen} 
           />
        {/* <Sidebar drawerWidth={drawerWidth} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}/> */}
          

        <Box component='main'
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#F3F5FA' }}
        >
            <Toolbar/> 
            { children }

        </Box>

    </Box>
    
  )
}
