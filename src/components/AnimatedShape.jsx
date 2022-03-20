import React from 'react'
import styled from 'styled-components'
const Square = styled.div`
width: 60px;
overflow: hidden;
height: 60px;
background-color:red;
opacity: 0.7;
position: absolute;
top:-60px;
left: -60px;
z-index: -1;
animation: square 5s linear alternate infinite;

@keyframes square {
    to{

        transform: translate(100vw,100vh)
    }
}
`
const Rect = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
opacity: 0.7;
position: absolute;
background-color:green;
top:200px;
left: -90px;
z-index: -1;
animation: rectanle 10s linear alternate infinite;

@keyframes rectanle {
    to{

        transform: translate(90vw,-90vh)
    }
}
overflow: hidden;
`
const Circle = styled.div`

width: 60px;
height: 100px;
/* border-radius: 50%; */
opacity: 0.9;
position: absolute;
background-color:yellow;
top:400px;
left: -60px;
z-index: -1;
animation: circle 10s linear alternate infinite;

@keyframes circle {
    to{

        transform: translate(90vw,-50vh)
    }
}
overflow: hidden;
 `
const AnimatedShape = () => {
    return (<>
        <Square />
        <Circle />
        <Rect />

    </>
    )
}

export default AnimatedShape