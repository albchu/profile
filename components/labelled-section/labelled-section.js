import React from 'react';
import styles from './labelled-section.module.css';

export const LabelledSection = ({ title, children }) => {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.sectionContents}>
                {children}
            </div>
        </section>
    )
}
