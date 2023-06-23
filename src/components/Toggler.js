import { useState } from "react"
import '../style/Toggler.css'
export default function Toggler(){

    const [isCool, setIsCool] = useState(true);

    const toggler = () => {
        setIsCool(!isCool)
    }
    return(
        <>
            <div className="body4">
                <div className="emoji">
                    <p className="face" onClick={toggler}>
                        {isCool ? '😎' : '😡'}
                    </p>
                </div>
            </div>
        </>
    )
}