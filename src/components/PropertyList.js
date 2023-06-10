import '../style/PropertyList.css'
export default function PropertyList({properties}){
    
    return (
        <>
        <div className="body3">
            {properties.map((i) => {
                return (<div className='inner'>
                        <p>{i.name}</p>
                        <p>${i.price}</p>
                        <p>{i.rating}</p>
                    </div>)
            })}
        </div>
        </>
    )
}