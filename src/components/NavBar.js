import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Catologue', link: '/catologue' },
  { name: 'Blog', link: '/blog' },
  { name: 'Booking', link: '/booking' },
];

export default function NavBar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    navigate(link)
  };

  const logo = (<>
    <AdbIcon
      sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1, color: '#F7D633' }} />
    <Button
      onClick={() => handleCloseNavMenu('/')}
      sx={{
        color: '#F7D633',
        display: { xs: 'none', sm: 'block' },
        fontFamily: 'monospace',
        fontWeight: 800,
        fontSize: 20,
        letterSpacing: '.3rem',
      }}
    >
      LOGO2
    </Button>
  </>)

  const bookingButton = (<>
    <Button
      onClick={() => handleCloseNavMenu('/booking')}
      sx={{
        px: 2,
        color: '#232323',
        backgroundColor: '#F7D633',
        display: { xs: 'none', sm: 'flex' },
        "&:hover": {
          backgroundColor: "black",
          color: '#F7D633',
          cursor: 'pointer'
        }
      }}
    >
      Booking
    </Button>
  </>)

  const mobileLogo = (<>
    <AdbIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 ,color: '#F7D633'}} />
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: 'flex', sm: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        color: '#F7D633'
      }}
    >
      LOGO1
    </Typography>
  </>)

  const mobileNavLink = (<>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, color: '#F7D633' }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.link)}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </>)

  const navLink = (<>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
      {pages.map((page) => {
        if (page.name === 'Booking') {
          return null;
        }
        return (
          <Button
            key={page.name}
            onClick={() => handleCloseNavMenu(page.link)}
            sx={{
              my: 2,
              color: '#F7D633',
              display: 'block',
            }}
          >
            {page.name}
          </Button>
        )
      })}

    </Box>
  </>)

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          maxWidth: '2000px',
          right: 'auto', 
          alignItems: 'center', 
          backgroundColor: '#232323'
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {logo}
            {mobileNavLink}
            {mobileLogo}
            {navLink}
            {bookingButton}
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ height: 55 }} />
    </>
  );
}



          // <Box sx={{ flexGrow: 0 }}>
          //   <Tooltip title="Open settings">
          //     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          //       <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          //     </IconButton>
          //   </Tooltip>
          //   <Menu
          //     sx={{ mt: '45px' }}
          //     id="menu-appbar"
          //     anchorEl={anchorElUser}
          //     anchorOrigin={{
          //       vertical: 'top',
          //       horizontal: 'right',
          //     }}
          //     keepMounted
          //     transformOrigin={{
          //       vertical: 'top',
          //       horizontal: 'right',
          //     }}
          //     open={Boolean(anchorElUser)}
          //     onClose={handleCloseUserMenu}
          //   >
          //     {settings.map((setting) => (
          //       <MenuItem key={setting} onClick={handleCloseUserMenu}>
          //         <Typography textAlign="center">{setting}</Typography>
          //       </MenuItem>
          //     ))}
          //   </Menu>
          // </Box> 
