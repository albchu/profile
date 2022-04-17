import React from 'react'

export const ExperienceItem = ({ company, role, date, children }) => {
    return (
        <div>
            <h3>{company} // {role}</h3>
            <h4>{date}</h4>
            {children}
        </div>
    )
}
