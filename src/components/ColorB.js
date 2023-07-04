// import { useState } from "react"
// import '../style/section4.css'
import ColorBox from "./ColorBox.js";

export default function ColorB(){
    return (
        <>  
            <div className="outer-box">
                <ColorBox key='1' />
                
            </div>
        </>
            
    )
    // const [color, setColor] = useState(['#000']);
    // const colors = ['#006eff','#ff0000', '#32a84e'];
    // // color.sort(() => Math.random() - 0.5);
    
    // const shuffle = () => {
    //     const r = colors[Math.floor(Math.random() * colors.length)]
    //     setColor(r)
    // }
    // return(
    //     <>
    //         <div className="body">
    //             <div 
    //                 className='square' 
    //                 onClick={shuffle}
    //                 style={{backgroundColor: color}}>

    //             </div>
    //         </div> 
    //     </>
    // )
}