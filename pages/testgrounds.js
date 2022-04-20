import React from 'react'
import styles from './testgrounds.module.css'
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import { HeroBanner } from '../components/hero-banner';
import AboutMe from '../components/about-me';
import Expertise from '../components/expertise';
import Portfolio from '../components/portfolio';
import Experience from '../components/experience';
import Education from '../components/education';

export const TestGrounds = () => {
    const parallax1 = useParallax({ speed: 15, translateX: [10, -10], scale: [2.5, 2] });
    const parallax2 = useParallax({
        scale: [1, 2.5], translateX: [0, 10], speed: 5
    });
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <HeroBanner />

                <AboutMe />

                <Expertise />

                <Portfolio />

                <Experience />

                <Education />
            </div>
            <div className={styles.mountainsUpper} ref={parallax1.ref} />
            <div className={styles.mountainsLower} ref={parallax2.ref} />
        </div>
    )
}


export default () => {
    return <ParallaxProvider >
        <TestGrounds />
    </ParallaxProvider>
}