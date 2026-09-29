import React from 'react';
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Stats from "./src/components/Stats";
import Categories from "./src/components/Categories";
import Features from "./src/components/Features";
import Testimonials from "./src/components/Testimonials";
import FAQ from "./src/components/FAQ";

import CTA from "./src/components/CTA";
import BackToTop from "./src/components/BackToTop";
import Footer from "./src/components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";


export default function home() {
  return (
    <>
          <Navbar />
          <Hero />
          <Stats/>
          <Categories/>
          <Features />
          <Testimonials/>
          <FAQ />
          <CTA/>
          <Footer />
          <BackToTop/>
           
         
    </>
  )
}
