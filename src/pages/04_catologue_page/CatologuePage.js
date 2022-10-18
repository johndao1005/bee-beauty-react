import React, { useEffect, useState } from 'react'
import {
  Grid,
} from '@mui/material'
import DisplaySection from './component/DisplaySection';
import { fetchAPI } from '../../ultis/api';
import model from './model';

export default function CatologuePage() {
  const {service,product} = model
  const [productData, setProductData] = useState([])
  const [serviceData, setServiceData] = useState([])

  useEffect(() => {
    getData()
    return () => {
    }
  }, [])

  const getData = async () => {
    await fetchAPI("/products", {
      populate: '*'
    }).then(result => {
      if (result != null) {
        setProductData(result)
      }
    }).catch(e => {
      throw new Error(e)
    })

    await fetchAPI("/services", {
      populate: '*'
    }).then(result => {
      if (result != null) {
        setServiceData(result)
      }
    }).catch(e => {
      throw new Error(e)
    })
  }

  return (
    <Grid container direction="column" alignContent='center' justifyContent='center' sx={{ mb: 10 }}>
      <DisplaySection title={product.title} description={product.description} data={productData} />
      <DisplaySection title={service.title} description={service.description} data={serviceData} />
    </Grid>
  )
}
