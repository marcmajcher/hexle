import {useEffect, useRef} from 'react'

export default function MapCanvas() {
    const ref = useRef(null)

function draw(ctx) {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()

}


useEffect(() => {
const canvas = ref.current;
const context = canvas.getContext('2d')

draw(context)

}, [])

    return <canvas ref={ref} />
}