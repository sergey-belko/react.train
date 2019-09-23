import React from 'react'
import { Header, Main, ReturnBtn } from '@component'
import FlexSection from '@component/FlexSection'
import { addAnchor } from '@util'

const sections = [
    {
        title: 'Flex flow',
        component: FlexSection,
        examples: [
            {
                summary: 'Row/Column',
                options: [
                    {
                        value: 'flexflow__row',
                        title: 'row',
                        checked: true
                    },
                    {
                        value: 'flexflow__row_reverse',
                        title: 'row reverse'
                    },
                    {
                        value: 'flexflow__column',
                        title: 'column'
                    },
                    {
                        value: 'flexflow__column_reverse',
                        title: 'column reverse'
                    }
                ]
            }
        ]
    },
    {
        title: 'Flex flow',
        component: FlexSection,
        examples: [
            {
                summary: 'Row/Column',
                options: [
                    {
                        value: 'flexflow__row',
                        title: 'row',
                        checked: true
                    },
                    {
                        value: 'flexflow__row_reverse',
                        title: 'row reverse'
                    },
                    {
                        value: 'flexflow__column',
                        title: 'column'
                    },
                    {
                        value: 'flexflow__column_reverse',
                        title: 'column reverse'
                    }
                ]
            }
        ]
    },
    {
        title: 'Flex flow',
        component: FlexSection,
        examples: [
            {
                summary: 'Row/Column',
                options: [
                    {
                        value: 'flexflow__row',
                        title: 'row',
                        checked: true
                    },
                    {
                        value: 'flexflow__row_reverse',
                        title: 'row reverse'
                    },
                    {
                        value: 'flexflow__column',
                        title: 'column'
                    },
                    {
                        value: 'flexflow__column_reverse',
                        title: 'column reverse'
                    }
                ]
            }
        ]
    }
].map(addAnchor())

export const FlexboxPage = () => (
    <>
        <Header elements={sections} />
        <Main title="Flexbox" sections={sections} />
        <ReturnBtn />
    </>
)

export default FlexboxPage
