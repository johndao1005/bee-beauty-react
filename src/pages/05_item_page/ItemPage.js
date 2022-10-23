import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import IntroSection from './components/IntroSection';
import ContentSection from './components/ContentSection';
import { useLocation } from 'react-router-dom';
import { fetchAPI } from '../../ultis/api';
import model from './model';


export default function ItemPage() {
  const { state, pathname } = useLocation();
  const [item, setItem] = useState(model)

  useEffect(() => {
    getData()
    return () => {

    }
  }, [])

  const getData = async () => {
    if (!state) {
      await fetchAPI(pathname,{
        populate: '*'
      }).then(data => {
        console.log(data)
        const item = data?.data.attributes
        setItem({ ...item })
      })
    } else {
      const item = state?.attributes
      setItem({ ...item })
    }
  }

  return (
    <Grid item container lg={12} direction='column' sx={{ px: 5, maxWidth: "1600px", py: 2, }}>
      <IntroSection item={item} />
      <ContentSection item={item} />
    </Grid>
  )
}
