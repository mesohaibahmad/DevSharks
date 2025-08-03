import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';

import './AccountMenu.css';

export default function AccountMenu({id, signIn}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let [scrollV, setscrollV] = useState(0);
  let [activeNav, setactiveNav ]= useState(false);
  let getScrollV = function () {
     setscrollV( window.scrollY);
     if(scrollV>200){
      setactiveNav (true);
     }
     else
     {
      setactiveNav(false);
     }
};
  
  window.addEventListener("scroll", getScrollV);
  return (
    <React.Fragment>
      <Box id={id} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',  }}>
        <Typography className='nav-menu-item' sx={{ minWidth: 100, cursor:"pointer", fontSize: '25px', fontWeight: '700', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",  }} ><a href= "https://www.linkedin.com/in/mesohaibahmad" style={activeNav?{color:"#1ECBE1", }:{color: 'white'}}>Contact</a></Typography>
        <Typography className='nav-menu-item' sx={{ minWidth: 100, cursor:"pointer", fontSize: '25px',fontWeight: '700', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", }} onClick={signIn} >Sign In</Typography>
        <Typography className='nav-menu-item' sx={{ minWidth: 100, cursor:"pointer" , fontSize: '25px', fontWeight: '700', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", }}><a href= "/userservice" style={activeNav?{color:"#1ECBE1", }:{color: 'white'}}> Profile</a></Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
