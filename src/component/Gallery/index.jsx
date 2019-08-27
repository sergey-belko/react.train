import React from 'react'
import Section from '@component/Section'
import { AllPineapples } from '@img/pineapple'
import style from './style.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = { img: AllPineapples[2] }
    }

    handleClick = ({ target = {} }) => {
        const { alt = 0 } = target
        this.setState({ img: AllPineapples[alt] })
    }

    render() {
        const { img: currentImage } = this.state

        return (
            <Section {...this.props}>
                <div className={style.container}>
                    <div className={style.mainImgHolder}>
                        <img className={style.mainImg} src={currentImage} alt="First captured otter" />
                    </div>
                    <div className={style.list}>
                        {AllPineapples.map((img, index) => (
                            <img
                                key={`#${index}`}
                                onClick={this.handleClick}
                                className={style.element}
                                src={img}
                                alt={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>
        )
    }
}

export default Gallery
