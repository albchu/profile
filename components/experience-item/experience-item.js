import React from 'react'
import styles from './experience-item.module.css'

export const ExperienceItem = ({ company, companyUrl, role, date, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.titleBlock}>
                    <div className={styles.company}>{
                        companyUrl ?
                            <a href={companyUrl}>
                                {company}
                            </a> :
                            company
                    }</div>
                    <div className={styles.role}>{role}</div>
                </div>
                <div className={styles.date}>{date}</div>
            </div>
            {children}
        </div>
    )
}
