import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI } from '../../ultis/api';
import Carosuel from './components/Carosuel';
import CTA_component from './components/CTA';
import Hero from './components/Hero';
import model from './model';

export default function Homepage() {
    //TODO update to murder
    const navigator = useNavigate()
    const [hero, setHero] = useState(model.hero)
    const [carousel, setCarousel] = useState(model.carousel)
    const [CTA, setCTA] = useState(model.CTA)

   useEffect(() => {
    getData()
    return () => {
    }
  }, [])

  const getData = async () => {
    await fetchAPI("/homepage", {
      // decide on what data should populate
      populate: {
        CTA: {
          populate: "*",
        },
        carousel: {
          populate: "*",
        },
        hero: {
          populate: "*",
        },
        title: {
          populate: "*",
        }
      },
    }).then((result) => {
      if (result != null) {
        
        const {CTA, carousel, hero} = result.data.attributes
        setCTA(CTA)
        setCarousel(carousel)
        setHero(hero)
      } else {
        throw new Error("cant connect")
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  const navigate = (location)=>{
    navigator(location)
  }
  return (
    <>
      <Hero data={hero} navigate={navigate}/>
      <Carosuel data={carousel}/>
      <CTA_component data={CTA} navigate={navigate}/>
    </>
  )
}
