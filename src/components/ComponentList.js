// import '../style/PropertyList.css';
export default function ComponentList({name, price, rating, available}){
    const isavailable = {color: 'green'}
    const isunavailable = {color: 'red'}
    return (
        <>  
            <p>{name}</p>
            <p>${price}</p>
            <p>Rate:{rating}/5</p>
            {available ? <p style={isavailable}>Available</p> : <p style={isunavailable}>Unavailable</p>}
        {/* <div className='outer'>
            <div className="body3">
                <div className='out'>
                    <div className='inner'>
                        <p>{name}</p>
                        <p>${price}</p>
                        <p>Rate:{rating}/5</p>
                        {available ? <p style={isavailable}>Available</p> : <p style={isunavailable}>Unavailable</p>}
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}