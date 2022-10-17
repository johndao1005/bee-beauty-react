import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../ultis/api'
import Hero from './components/Hero'
import Feature from './components/Feature'
import ShowCase from './components/ShowCase'
import model from './model'

const AboutPage = () => {
  const [hero, setHero] = useState(model.hero)
  const [feature, setFeature] = useState(model.features)
  const [skill, setSkill] = useState(model.skills)

  useEffect(() => {
    getData()
    return () => {
    }
  }, [])

  const getData = async () => {
    await fetchAPI("/about", {
      // decide on what data should populate
      populate: {
        hero: {
          populate: "*",
        },
        skills: {
          populate: "*",
        },
        features: {
          populate: "*",
        }
      },
    }).then((result) => {
      if (result != null) {
        const { hero, skills, features } = result.data.attributes
        setHero(hero)
        setFeature(features)
        setSkill(skills)
      } else {
        throw new Error("cant connect")
      }
    }).catch((err) => {
      console.log(err)
    });
  }



  /* --------------------------------- RENDER --------------------------------- */
  return (
    <>
      <Hero data={hero}/>
      <Feature data={feature} />
      <ShowCase data={skill}/>
    </>
  )
}

export default AboutPage