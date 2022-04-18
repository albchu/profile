import React from 'react'
import { ArrowUpRightFromSquareIcon } from '../arrow-up-right-from-square-icon'
import styles from './experience-item.module.css'

export const ExperienceItem = ({ logoPath, company, companyUrl, role, date, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {logoPath && <img src={logoPath} />
                }
                <div className={styles.headerContents}>
                    <div className={styles.titleBlock}>
                        <div className={styles.company}>{
                            companyUrl ?
                                <a href={companyUrl} className={styles.companyLink}>
                                    {company}
                                    <ArrowUpRightFromSquareIcon />
                                </a> :
                                company
                        }</div>
                        <div className={styles.role}>{role}</div>
                    </div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
            <div className={styles.details}>
                {children}
            </div>
        </div>
    )
}
