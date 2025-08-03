import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Tours from '../components/Tours'; 
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';

const Home = () => (
   <div className="home-background">
    <Hero />
    <Destinations />
    <Tours />
    <Testimonials />
    <WhyChooseUs />
    <CTA />
    </div>
);

export default Home;
