import React from 'react'
import Matter from 'matter-js'
import { View } from 'react-native'

/**
 * Need to render a Car object with props.
 */
const Car = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    // getting the center of the body
    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2

    const color = props.color

    return (
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}/>
    )
}

export default(world, color, pos, size) => {
    const initCar = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {label: 'Car'}
    )
  return {
    body: initCar,
    color, 
    pos,
    renderer: <Car />
  }
}

