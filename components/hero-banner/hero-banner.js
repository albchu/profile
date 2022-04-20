import React from 'react'
import { EnvelopeLogo } from '../envelope-logo';
import { GitHubLogo } from '../github-logo';
import { LinkedinLogo } from '../linkedin-logo';
import styles from './hero-banner.module.css';

export const HeroBanner = () => {
    return (
        <div className={styles.banner}>
            <img src="/face.png" alt="mugshot" className={styles.heroImage} />
            <div className={styles.bannerContent}>
                <div className={styles.heroName}>Albert Chu</div>
                <div className={styles.heroTitle}>Web Developer</div>
                <div className={styles.socials}>

                    <a href="https://github.com/albchu">
                        <GitHubLogo />
                    </a>

                    <a href="https://www.linkedin.com/in/albchu/">
                        <LinkedinLogo />
                    </a>

                    <a href="mailto:albertchu539@gmail.com">
                        <EnvelopeLogo />
                    </a>
                </div>
            </div>
        </div>

    )
}
