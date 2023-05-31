export default function Roll(){
    const rollDie = Math.floor(Math.random() * 6) + 1
    let msg;
    if (rollDie === 4){
        msg = 'winner'
    }
    return <>
        <h1>{rollDie}</h1>
        <p>{msg}</p>
        
    </>
}