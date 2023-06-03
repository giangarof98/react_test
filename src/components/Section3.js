import '../style/Section3.css'
export default function Section3(props){
    console.log(props)
    
    const rollDie1 = Math.floor(Math.random() * 3) + 1;
    const rollDie2 = Math.floor(Math.random() * 3) + 1;
    const rollDie3 = Math.floor(Math.random() * 3) + 1;

    const ifWinner = rollDie1 === rollDie2 && rollDie2 === rollDie3
    const winnerStyle = {color: ifWinner ? 'yellow' : null}
   
    return(
        <div className='body'>
            <div className='top'>
                <h1 style={{color: props.color}}>{props.text}</h1>
                <div className='bottom'>
                    <div className='bottom-top' style={winnerStyle}>
                        <div className='rolls'>
                            <p>{rollDie1}</p>
                            <p>{rollDie2}</p>
                            <p>{rollDie3}</p>
                        </div>
                    
                        {ifWinner && <h3 style={{color:props.winner}}>Winner</h3>}

                    </div>
                    <div className='btn-bottom'>
                        <button>Try again</button>
                    </div>
                </div>
            </div>

        </div>
    )
}