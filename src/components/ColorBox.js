import { useState } from "react"
import '../style/section4.css'

export default function ColorBox({colors}){
    const startColor = (arr) => {
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx]

    }
    const [color, setColor] = useState(startColor(colors));
    // color.sort(() => Math.random() - 0.5);
    
    const shuffle = () => {
        const random = startColor(colors)
        setColor(random)
    }
    return(
                <div 
                    className='square' 
                    onClick={shuffle}
                    style={{backgroundColor: color}}>

                </div>
    )
}