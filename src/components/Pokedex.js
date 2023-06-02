import '../style/Pokedex.css'

export default function Pokedex(){
    const random = Math.floor(Math.random() * 151) + 1
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`
    return(
        <>  
            <div className='Pokemon'>
                <img src={url}  width='250px'/>
                <h1>Pokemon #{random}</h1>
            </div>
        </>
    )
}