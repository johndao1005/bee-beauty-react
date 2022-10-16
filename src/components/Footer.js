import { Container, Grid, Typography, Button, Divider, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { fetchAPI } from '../ultis/api';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Catologue', link: '/catologue' },
  { name: 'Blog', link: '/blog' },
];

const socialMediaIcon = {
  facebook: <FacebookIcon sx={{
    color: '#F7D633',
      display: 'block',
      mx: 1,
      "&:hover": {
        color: '#F7D633',
        cursor: 'pointer'
      }
    }}/>,
    instagram: <InstagramIcon sx={{
      color: '#F7D633',
      display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }}/>,
  linkedin: <LinkedInIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} />,
  twitter: <TwitterIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} />
}

export default function Footer( {personalInfo}) {
  /* -------------------------------- Variable -------------------------------- */
  
  const navigator = useNavigate()
  const [socialMedia, setSocailMedia] = useState([])
  useEffect(() => {
    getUrl()
    return () => {
    }
  }, [])

  const getUrl = async () => {
    await fetchAPI("/links", {
      // decide on what data should populate
      populate: {
        name: '*',
        url : '*'
      },
    }).then((result) => {
      const links = result.data.map(link => {
        return {
          plaftform : link.attributes.name,
          icon : socialMediaIcon[link.attributes.name],
          url : link.attributes.url
        }
      })
      setSocailMedia(links)
    }).catch((err) => {
      console.log(err)
    });
  }
  /* -------------------------------- COMPONENT ------------------------------- */

  const link = (page) => {
    return (
      <Button
        key={page.name}
        onClick={() => navigator(page?.link)}
        sx={{
          color: '#F7D633',
          display: 'block',
          letterSpacing: '.3rem',
        }}
      >
        {page?.name}
      </Button>
    )
  }

  const firstColumn = () => {
    return (
      <Grid item md={3} sm={0}
        justifyContent="center"
        sx={{ my: 'auto', mx: 'auto', display: { xs: 'none', sm: 'flex' } }}>
        <AdbIcon sx={{ ml: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            ml: 1,
            mb: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO2
        </Typography>
      </Grid>
    )
  }

  const secondColumn = () => {
    if(personalInfo === null) {
      return <></>
    }
    const {address, email, phone} = personalInfo
    return (
      <Grid item xs={12} md={3} sm={6}
        container spacing={3}
        direction="column"
        justifyContent="center"
        sx={{ my: 2, }}>
            <Typography
              variant="h6"
              component="a"
              sx={{
                ml: 5,
                mb: 1,
                fontSize: 15,
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: '#F7D633',
                textDecoration: 'none',
                lineHeight: "1.3rem"
              }}
              href={`tel:${phone}`}
            >
              Phone: {phone}
            </Typography>
            <Typography
              variant="h6"
              component="a"
              sx={{
                ml: 5,
                mb: 1,
                fontSize: 15,
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: '#F7D633',
                textDecoration: 'none',
                lineHeight: "1.3rem"
              }}
              href={`mailto:${email}`}
            >
              Email:{email}
            </Typography>
            <Typography
              variant="h6"
              component="a"
              sx={{
                ml: 5,
                mb: 1,
                fontSize: 15,
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: '#F7D633',
                textDecoration: 'none',
                lineHeight: "1.3rem"
              }}
            >
              Address: {address}
            </Typography>
      </Grid>
    )
  }

  const thirdColumn = () => {
    return (
      <Grid item md={3} xs={6}
        container spacing={2}
        direction="column"
        justifyContent="center" >
        {pages.map((page) => {
          return (
            link(page)
          )
        })}
      </Grid>
    )
  }

  const fourthColumn = () => {
    return (
      <Grid item xs={6} md={3}
        container spacing={2}
        direction="column"
        justifyContent="center" >
        {pages.map((page) => {
          return (
            link(page)
          )
        })}
      </Grid>
    )
  }

  const topSection = (
    <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: 'white', display: 'block', pt: 4, pb: 3 }}>
      <Grid container spacing={3}
        direction="row">
        {firstColumn()}
        {secondColumn()}
        {thirdColumn()}
        {fourthColumn()}
      </Grid>
    </Container>)

  const socialMediaLinks = () => {
    if(socialMedia === null) {
      return <></>
    }
    return (
      <Grid item xs={12}
        container direction='row'
        alignItems="center"
        justifyContent="center">
        {socialMedia.map((platform, i) => {
          return (
            <IconButton key={i} href={platform.url}>
              {platform.icon}
            </IconButton>
          )
        })}
      </Grid>
    )
  }

  const copyRight = () => {
    return (
      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: '#F7D633',
            textDecoration: 'none',
          }}
        >
          ©Copyright 2022, Bee Beauty ,Created by John Dao
        </Typography>
      </Grid>
    )
  }
  const bottomSection = (
    <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: '#FEEDD9', display: 'block', pt: 3, pb: 2 }}>
      <Grid
        container spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center">
        {socialMediaLinks()}
        {copyRight()}
      </Grid>
    </Container>)

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <>
      {topSection}
      <Divider />
      {bottomSection}
    </>
  )
}
