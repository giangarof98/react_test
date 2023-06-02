import '../style/RollDie.css'

export default function Die(){
    // const rollDie = Math.floor(Math.random() * 5) + 1
    let roll1 = Math.floor(Math.random() * 5) + 1
    let roll2 = Math.floor(Math.random() * 5) + 1
    let roll3 = Math.floor(Math.random() * 5) + 1
    
    let msg;

    if (roll1 === roll2 && roll2 === roll3){
        msg = 'winner! Jackpot';
    }
    return (
        <div className='rollDie'>
            <h1>{roll1}</h1>
            <h1>{roll2}</h1>
            <h1>{roll3}</h1>
            <p>{msg}</p>
        </div>
    )
}