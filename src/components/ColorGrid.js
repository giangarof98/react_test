import ColorBox from "./ColorBox.js";
import '../style/section4.css'

export default function ColorB({colors}){
    const box = []
    for(let i = 0; i < 25; i++){
        box.push(<ColorBox colors={colors}/>)
    }
    return (
        <>  
            {/* <div className="body"> */}
                <div className="ColorGrid">
                    <div className="box">
                        {box}   
                    </div>
                </div>
            {/* </div> */}
        </>
            
    )

}