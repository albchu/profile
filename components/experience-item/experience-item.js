import React from 'react'
import styles from './experience-item.module.css'

export const ExperienceItem = ({ company, role, date, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleBlock}>
                <div className={styles.company}>{company}</div>
                <div className={styles.role}>{role}</div>
            </div>
            <div className={styles.date}>{date}</div>
            {children}
        </div>
    )
}
