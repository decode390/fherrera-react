import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar, SideBar } from '../components'

const drawerWidth = 280;

export const JournalLayout = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>

        <Navbar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>

        <Box 
          component={'main'}
          sx={{ flexGrow: 1, padding: 3 }}
        >
          <Toolbar/>
          <Outlet/>
        </Box>

      </Box>
    </>
  )
}
