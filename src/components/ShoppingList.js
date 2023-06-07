import '../style/Section4.css'
import Shopping from './Shopping'
export default function ShoppingList({items}){

    // console.log(props.arr)
    
    // first way
    // const arr = props.arr.map(n => <li>{n}</li>)
    return(
        <div className='body2'>
            <ul className='ul'>
                {items.map((i) => 
                    <Shopping 
                        key={i.id}
                        {...i}
                        // item={i.item} 
                        // qty={i.qty} 
                        // completed={i.completed}
                    />
                )}
            </ul>
        </div>
    )
}