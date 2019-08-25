import React from 'react'
import Section from '@component/Section'
import { AllPineapples } from '@img/pineapple'
import style from './style.css'

const Gallery = (props) => (
    <Section {...props}>
        <div className={style.container}>
            <div className={style.mainImgHolder}>
                <img className={style.mainImg} src={AllPineapples[0]} alt="First captured otter" />
            </div>
            <div className={style.list}>
                {AllPineapples.map((img, index) => (
                    <img key={`#${index}`} className={style.element} src={img} alt="First captured otter" />
                ))}
            </div>
        </div>
    </Section>
)

export default Gallery
