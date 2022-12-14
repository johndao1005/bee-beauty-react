import React, { useEffect, useState } from 'react'
import Router from "./pages/00_router/Router";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./App.css";
import { fetchAPI, getStrapiMedia } from './ultis/api'
// import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

function App() {
  const [siteName, setSiteName] = useState('Bee-Beauty')
  const [logoLink, setLogoLink] = useState('')
  const [footerLogo, setFooterLogo] = useState('')
  const [favicon, setFavicon] = useState('')
  const [defaultSeo, setDefaultSeo] = useState(null)
  const [personalInfo, setPersonalInfo] = useState(null)
  useEffect(() => {
    getData()
    return () => {
    }
  }, [])

  const getData = async () => {
    await fetchAPI("/global", {
      // decide on what data should populate
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
        personal: "*",
        logo: "*",
        logo2: "*",
      },
    }).then((result) => {
      if (result != null) {
        const { siteName, favicon, defaultSeo, personal, logo, logo2 } = result?.data?.attributes
        // update to global context or using model
        setSiteName(siteName)
        setDefaultSeo(defaultSeo)
        setFavicon(getStrapiMedia(favicon))
        setPersonalInfo(personal)
        setLogoLink(logo)
        setFooterLogo(logo2)
      } else {
        throw new Error("cant connect")
      }
    }).catch((err) => {
      console.log(err)
    });
  }
  // TODO Apply theme and later on state manager if needed
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Router personalInfo={personalInfo} logo={logoLink} footerLogo={footerLogo} />
          </LocalizationProvider>
        </ThemeProvider>
        <Helmet
          defaultTitle="Bee Beauty">
          <html lang="en" amp />
          <body className="root" />
          <title>{siteName}</title>
          <link rel="icon" type="image/png" href={!favicon ? '/favicon' : favicon} />
          <meta name="title" content={!defaultSeo?.metaTitle ? defaultSeo?.metaTitle : "Bee-Beauty"} />
          <meta name="description" content={!defaultSeo?.metaDescription ? defaultSeo?.metaDescription : "A community page"} />
        </Helmet>
      </HelmetProvider>
    </>
  );
}
export default App;
