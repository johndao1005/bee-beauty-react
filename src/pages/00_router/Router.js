import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Homepage from '../01_home_page/HomePage'
import BlogPage from '../02_blog_page/BlogPage'
import PostPage from '../03_post_page/PostPage'
import CatologuePage from '../04_catologue_page/CatologuePage'
import ItemPage from '../05_item_page/ItemPage'
import AboutPage from '../06_about_page/AboutPage'
import BookingPage from '../07_booking_page/BookingPage'


export default function Router({personalInfo, logo , footerLogo}) {
    //Can spit route later for authentication
    return (<>
        <BrowserRouter>
            <NavBar logo={logo} />
            <Routes>
                <Route path="/" element={<Homepage />} exact={true} />
                <Route path="/about" element={<AboutPage />} exact={true} />
                {/* <Route path="/booking" element={<BookingPage/>} exact={true}/> */}
                <Route path="/booking" element={<BookingPage />} exact={true} />
                <Route path="/blog" element={<BlogPage />} exact={true} />
                <Route path="/article/:id" element={<PostPage />} exact={true} />
                <Route path="/catologue" element={<CatologuePage />} exact={true} />
                <Route path="/services/:id" element={<ItemPage />} exact={true} />
                <Route path="/products/:id" element={<ItemPage />} exact={true} />
                {/* Route guard */}
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<Homepage />} exact={true} />
            </Routes >
            <Footer footerLogo={footerLogo} personalInfo={personalInfo}/>
        </BrowserRouter>
    </>
    )
}
