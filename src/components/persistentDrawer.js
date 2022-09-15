import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Sidebar from './Sidebar';
import { PersistentDrawerMainContent } from './persistentDrawerMainContent'
import { SideMenu } from './SideMenu';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  // alignItems: 'center',
  padding: theme.spacing(0, 1.2),
  //necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  paddingTop: '10px',
  paddingBottom: '10px',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: '#2d445d',}}>
          <IconButton
            color="inherit" //ハンバーガーメニュー白黒
            aria-label="open drawer"
            onClick={handleDrawerOpen} //trueで開く
            edge="start"//左の隙間
            sx={{ mr: 2, ...(open && { display: 'none' }) }} //デザインの問題
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Webdemo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{backgroundColor: '#2d445d'}}>
          <IconButton  onClick={handleDrawerClose} 
          sx={{border: '1px solid #ffffff'}}
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color: '#ffffff'}}/> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <SideMenu/>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <PersistentDrawerMainContent/>
      </Main>
    </Box>
  );
}