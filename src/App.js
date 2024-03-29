
import './App.css';
//import MiniDrawer from './components/Main/Main';
import * as React from 'react';
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';

import HomeIcon from '@mui/icons-material/Home';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Contact from './components/Menu/Contact/Contact';
import Requests from './components/requests/Requests';
import Request from './components/requests/Request';
import Home from './components/Main/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import Mails from './components/mail/Mails';
import Mail from './components/mail/mail';
import Login from './components/Login/login';
import Worker from './components/Worker/Workers';
// import CenteredGrid from './components/Gird'
const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  // lehné bech nkabr w nsaghr el widh mta el menu
  width: `calc(${theme.spacing(7)} - 10px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} - 10px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

//const [loggedin, setloggedin] = React.useState(true);
function App() {
  const [all, setAll] = useState(true)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const loggingout = async () =>{
    console.log("hiiiiiiiiiiiiiiiiiiii")
    setAll(false)
    console.log(all)
    this.forceUpdate()
  }
  console.log(all)
  return (
    <div>
      {all &&
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar style={{ backgroundColor: '#343a40' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Router>
            <List>
              <ListItem button onClick={() => Home.forceUpdate()} key='home' component={Link} to="/Home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItem>
              <ListItem button onClick={() => Requests.forceUpdate()} key='Requests' component={Link} to="/Requests">
                <ListItemIcon>
                  <ArticleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Requests' />
              </ListItem>
              <ListItem button onClick={() => this.forceUpdate()} key='Contact' component={Link} to="/Contact">
                <ListItemIcon>
                  <PersonOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Contact' />
              </ListItem>
              <ListItem button onClick={() => this.forceUpdate()} key='Mails' component={Link} to="/Mails">
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary='Mail' />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button key='Worker' onClick={() => this.forceUpdate()} component={Link} to="/Worker">
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary='Workers' />
              </ListItem>

              <ListItem button onClick={loggingout} key='Logout' component={Link} to="/Login">
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItem>
            </List>
          </Router>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Requests" element={<Requests />} />
              <Route exact path="/Request/:id" element={<Request />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Mails" element={<Mails />} />
              <Route exact path="/Mail/:id" element={<Mail />} />
              <Route exact path="/Worker" element={<Worker />} />
            </Routes>
          </Router>
        </Box>
      </Box>
      }
      {!all &&<div>
        <Router>
          <Routes>
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </div>}
    </div>
  );
}

export default App;
