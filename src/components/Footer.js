import { Container, Grid, Typography, Button, Divider, IconButton, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { fetchAPI, getStrapiMedia } from '../ultis/api';

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
  }} />,
  instagram: <InstagramIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} />,
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

export default function Footer({ personalInfo, footerLogo }) {
  /* -------------------------------- Variable -------------------------------- */
  const url = !footerLogo ? "" : getStrapiMedia(footerLogo)
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
        url: '*'
      },
    }).then((result) => {
      const links = result.data.map(link => {
        return {
          plaftform: link.attributes.name,
          icon: socialMediaIcon[link.attributes.name],
          url: link.attributes.url
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
      <Box
        component="img"
        alt="Hero picture"
        sx={{
          height: '150px', ml: 1,
          display: { lg: 'flex', md: 'block', sm: 'none', xs: 'none' },
        }}
        src={url}
      />
    )
  }

  const secondColumn = () => {
    if (personalInfo === null) {
      return <></>
    }
    const { address, email, phone } = personalInfo
    return (
      <Grid item xs={12} md={5} sm={4}
        container
        direction="column"
        justifyContent="start"
        rowGap={2}
        sx={{ my: 1, pr: 1, mb: 3,mr: { sm: 3, md: 0 } }}>
        <Typography
          variant="h4"
          component="a"
          align='center'
          href={`tel:${phone}`}
        >
          Phone: {phone}
        </Typography>
        <Typography
          variant="h4"
          component="a"
          align='center'
          href={`mailto:${email}`}
        >
          Email: {email}
        </Typography>
        <Typography
          variant="h4"
          component="a"
          align='center'
        >
          Address: {address}
        </Typography>
      </Grid>
    )
  }

  const thirdColumn = () => {
    return (
      <Grid item md={2} xs={5} sm={3}
        container
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
      <Grid item xs={5} md={2} sm={2}
        container
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
    <Container maxWidth="xl" sx={{ backgroundColor: '#232323', color: 'white', display: 'block', pt: 4, pb: 3 }}>
      <Grid container columnGap={2}
        direction="row">
        {firstColumn()}
        {secondColumn()}
        {thirdColumn()}
        {fourthColumn()}
      </Grid>
    </Container>)

  const socialMediaLinks = () => {
    if (socialMedia === null) {
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
            fontSize: 13,
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
    <Container maxWidth="xl" sx={{ backgroundColor: '#232323', color: '#FEEDD9', display: 'block', pt: 3, pb: 2 }}>
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
