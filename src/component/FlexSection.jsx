import React from 'react'
import { Section } from '@component'

const FlexDetails = ({ summary, options = [] }) => (
    <details>
        {summary && <summary>{summary}</summary>}
        <select defaultChecked={options.find((item) => item.checked)}>
            {options.map(({ value, title }, index) => (
                <option key={index} value={value}>
                    {title}
                </option>
            ))}
        </select>
        <div className={style.container}>
            {[...new Array(4).keys()].map((item, index) => (
                <div className={style.element} key={index}>
                    {item}
                </div>
            ))}
        </div>
    </details>
)

export const FlexSection = ({ title, examples = [] }) => {
    console.log('SSSSSSSSSSSSSSSS')
    return (
        <Section title={title}>
            {examples.map((item, index) => (
                <FlexDetails key={index} {...item} />
            ))}
        </Section>
    )
}

export default FlexSection
