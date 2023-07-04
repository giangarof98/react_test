import { useState } from "react"
import '../style/Toggler.css'
export default function Toggler(){

    const [isCool, setIsCool] = useState(true);
    const [count, setCount] = useState(0)

    const toggler = () => {
        setIsCool(!isCool)
    }

    const increment = () => {
        // setCount(100)
        setCount(count + 1)
        console.log(count)
    }

    return(
        <>
            <div className="body4">
                <div className="emoji">
                    <p className="face" onClick={toggler}>
                        {isCool ? '😎' : '😡'}
                    </p>
                    <div>
                        <p>{count}</p>
                        <button onClick={increment}>Click me</button>
                    </div>
                </div>
            </div>
        </>
    )
}