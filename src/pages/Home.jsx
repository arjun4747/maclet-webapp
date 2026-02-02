import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import LaptopCarousel from '../components/LaptopCarousel';
import AccessoriesTeaser from '../components/AccessoriesTeaser';
import PageTransition from '../components/PageTransition';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <PageTransition>
            <Hero />
            <Brands />
            <LaptopCarousel />
            <AccessoriesTeaser />
            <Services />
            <Footer />
        </PageTransition>
    );
}
