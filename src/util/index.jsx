import React from 'react'

export const addAnchor = (content) => (item) => ({ ...item, content, anchor: item.title.toLowerCase().replace(' ', '') })
export const addKeyToItem = (item, key) => ({ ...item, key })

const standartFilter = (item) => item && Object.keys(item).length !== 0
export const updateArr = ({ arr = [], component, filter = standartFilter }) => {
    if (!component) {
        return null
    }

    const Component = component

    return arr
        .filter(filter)
        .map(addKeyToItem)
        .map(item => <Component key={item.key} {...item} />)
}

