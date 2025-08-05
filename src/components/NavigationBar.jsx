// import SearchBox from "./SearchBox";
// import './NavigationBar.css';
// import Logo from "./Logo";
// import AccountMenu from "./AccountMenu";
// import { useState } from "react";
// import { Margin } from "@mui/icons-material";

// export default function NavigationBar({signIn}){
//     let [scrollV, setscrollV] = useState(0);
//     let [activeNav, setactiveNav ]= useState(false);
//      const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);


//     let getScrollV = function () {
//        setscrollV( window.scrollY);
//        if(scrollV>200){
//         setactiveNav (true);
//        }
//        else
//        {
//         setactiveNav(false);
//        }
// };
    
//     window.addEventListener("scroll", getScrollV);
//     let searchFor= (evt, searched)=>{
//     }

//     useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 1024) {
//         setIsMobileMenuActive(true);
//         setIsSticky(false);
//       } else {
//         setIsMobileMenuActive(false);
//         setIsSticky(true);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//    return (
//     <nav id="nav-bar" style={activeNav?{backgroundColor: "white",color:"#1ECBE1", }:{}}>
//         <div id="nav-left">
//         <Logo />
//        {activeNav && <SearchBox handleSubmit={searchFor}  id="nav-search"/>}
//        </div>
// <AccountMenu id="nav-menu" signIn= {signIn}/>
//     </nav>
//    );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import logoIcon from '../assets/Icons/shark-dorsal-fin-svgrepo-com.svg';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';



const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavigationBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Important Links
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
     <Box sx={{ display: 'block', position: 'sticky', top: 0, zIndex: 1100 }}>
    <AppBar position="sticky" sx={{ top: 0 , zIndex: 1100}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
<MuiLink
  component={RouterLink}
  to="/"
  sx={{
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none', // Optional: removes underline
  }}
>  <Box
    component="img"
    src={logoIcon}
    alt="Shark Icon"
    sx={{
      display: { xs: 'none', md: 'flex' },
      width: { xs: '100%', md: '32px' },
      height: 'auto',
      mr: 1
    }}
  />
  <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
        textDecoration: 'none',
    }}
  >
    devSharks
  </Typography>
</MuiLink>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
      
          </Box>
<MuiLink
  component={RouterLink}
  to="/"
  sx={{flexGrow: 1,
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none', // Optional: removes underline
  }}
>          <Box
  component="img"
  src={logoIcon}
  alt="Shark Icon"
  sx={{ display: { xs: 'flex', md: 'none' },
        width: { xs: '32px', md: '32px' },
        height: 'auto', mr: 1 }}
/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit', 
            }}
          >
            devS
          </Typography>
          </MuiLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem onClick={handleCloseUserMenu}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default NavigationBar;
