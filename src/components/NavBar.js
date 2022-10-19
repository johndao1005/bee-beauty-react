import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { getStrapiMedia } from '../ultis/api';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Catologue', link: '/catologue' },
  { name: 'Blog', link: '/blog' },
  // { name: 'Booking', link: '/booking' },
];

export default function NavBar({ logo }) {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    if (link) {
      navigate(link)
    }
  };
  // console.log(logo)
  const url = !logo ? "" : getStrapiMedia(logo)

  const logoSection = () => {
    return (
      <Box
        component="img"
        alt="Hero picture"
        sx={{
          display: { xs: 'none', sm: 'flex' },
          height: '60px', mx: 3
        }}
        src={url}
        onClick={() => handleCloseNavMenu('/')}
      />
    )
  }

  const bookingButton = (<>
    <Button
      onClick={() => handleCloseNavMenu('/booking')}
      sx={{
        px: 5,
        color: '#232323',
        backgroundColor: '#F7D633',
        // display: { xs: 'none', sm: 'flex' },
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

  const mobileLogo = () => {
    return (
      <Grid container justifyContent='center'>
        <Box
          component="img"
          alt="Hero picture"
          sx={{
            display: { xs: 'flex', sm: 'none' },
            height: '60px',
          }}
          src={url}
          onClick={() => handleCloseNavMenu('/')}
        />
      </Grid>
    )
  }

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
            <Button  sx={{ color: "#232323" }}>{page.name}</Button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </>)

  const navLink = (<>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
      {pages.map((page) => {

        return (
          <Button
            key={page.name}
            onClick={() => handleCloseNavMenu(page.link)}
            sx={{
              display: { xs: 'flex', sm: 'none' },
              my: 2,
              mx: 1,
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
            {logoSection()}
            {mobileNavLink}
            {mobileLogo()}
            {navLink}
            {bookingButton}
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ height: 55 }} />
    </>
  );
}

