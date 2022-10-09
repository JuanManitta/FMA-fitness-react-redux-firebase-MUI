import {  Drawer, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { DrawerSidebar } from './DrawerSidebar'

export const Sidebar = ({ drawerWidth, isDrawerOpen, setIsDrawerOpen }) => {

    
    const handleCloseDrawer = () =>{
        setIsDrawerOpen(false)
    }
   
  return (
    <Box
        component="nav"
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0 } }}
        >
        <Drawer
            component={Paper}
            variant='temporary'
            open={isDrawerOpen}
            onClose={handleCloseDrawer}
            ModalProps={{ keepMounted: true,}}
            sx={{
                display:{xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth , boxShadow: 10 , backgroundColor: 'primary.main' }
            }}
        >
            <DrawerSidebar
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}/>
        </Drawer>
        <Drawer
        variant='permanent'
        open
        sx={{
            display:{xs: 'none', sm: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth , boxShadow: 3 , backgroundColor: 'primary.main' }
        }}>
            <DrawerSidebar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}/>

        </Drawer>

    </Box>
  )
}
