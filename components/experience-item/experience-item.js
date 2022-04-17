import React from 'react'
import styles from './experience-item.module.css'

export const ExperienceItem = ({ company, role, date, children }) => {
    return (
        <div>
            <h3>{company} // {role}</h3>
            <div className={styles.date}>{date}</div>
            {children}
        </div>
    )
}
