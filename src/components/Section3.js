import '../style/Section3.css'
import { useState } from 'react';

export default function Section3(props){
    // console.log(props)
    const [roll1, setRoll1] = useState(0)
    const [roll2, setRoll2] = useState(0)
    const [roll3, setRoll3] = useState(0)
    const [showRoll, setShowRoll] = useState(false)

    const roll = () => {
        setRoll1(Math.floor(Math.random() * 3) + 1)
        setRoll2(Math.floor(Math.random() * 3) + 1)
        setRoll3(Math.floor(Math.random() * 3) + 1)
        setShowRoll(true)
    }
    
    
    // const shuffle = () => {
    //     const rolls = [roll1, roll2, roll3]
    //     const shuffle = rolls.map(() => Math.floor(Math.random() *3) +1)
    //     setRoll1 = shuffle[0]
    //     setRoll2 = shuffle[1]
    //     setRoll3 = shuffle[2]
    // }
    
    const ifWinner = roll1 === roll2 && roll2 === roll3
    const winnerStyle = {color: ifWinner ? 'yellow' : null}

    return(
        <div className='body'>
            <div className='top'>
                <h1 style={{color: props.color}}>{props.text}</h1>
                <div className='bottom'>
                    <div className='bottom-top' style={winnerStyle}>
                        <div className='rolls'>
                            {showRoll && (
                                <div className='inner-roll'>
                                    <div className='roll'>
                                        <p>{roll1}</p>
                                        <p>{roll2}</p>
                                        <p>{roll3}</p>
                                    </div>
                                    <div className='inner-roll-inner'>
                                        {ifWinner && <h3 style={{color:props.winner}}>Winner</h3>}
                                    </div>
                                </div>
                            )}
                        </div>
                    

                    </div>
                    <div className='btn-bottom'>
                        <button onClick={roll}>{props.btn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}