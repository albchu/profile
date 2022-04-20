import React from 'react'
import styles from './testgrounds.module.css'
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import { ProfileContent } from '../components/profile-content';

export const TestGrounds = () => {
    const parallax1 = useParallax({ speed: 3, scale: [1.3, 2], translateX: [10, -20] });
    const parallax2 = useParallax({
        scale: [1, 1.8], translateX: [0, 10], speed: 8
    });
    return (
        <div className={styles.container}>
            <ProfileContent className={styles.contentContainer} />

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