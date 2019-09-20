import { Section } from '@component'
import { addKeyToItem, updateArr } from '@util'
import React from 'react'
import style from './style.css'

const Option = ({ title, ...rest }) => <option {...rest}>{title}</option>

const Element = ({ key, ...rest }) => <div className={style.element} key={key}>{console.log({ rest })}</div>

const FlexDetails = ({ summary, options = [] }) => (
    <details>
        {summary && <summary>{summary}</summary>}
        <select defaultChecked={options.find((item) => item.checked)}>{options.map(addKeyToItem).map(Option)}</select>
        <div className={style.container}>{updateArr({ arr: [...new Array(4).keys()], component: Element })}</div>
    </details>
)

export const FlexSection = ({ title, examples = [] }) => (
    <Section title={title}>
        {updateArr({ arr: examples, component: FlexDetails })}
    </Section>
)

export default FlexSection
