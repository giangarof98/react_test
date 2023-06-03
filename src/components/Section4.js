import '../style/Section4.css'
export default function Section4({arr, color}){

    // console.log(props.arr)
    
    // first way
    // const arr = props.arr.map(n => <li>{n}</li>)
    return(
        <div className='body2'>
            <ul className='ul'>
                {/* first way */}
                {/* {arr} */} 

                {/* both approach are good enough */}

                {/* React way */}
                {arr.map((a) => (
                    <li style={{color}}>{a}</li>
                ))}
            </ul>
        </div>
    )
}