import '../style/Nav.css'
export default function Nav({lists}){
    return(
        <>
            <nav>
                <ul>
                    <li>Coder</li>
                </ul>
                <ul className='left'>
                    <li>{lists.list1}</li>
                    <li>{lists.list2}</li>
                    <li>{lists.list3}</li>
                </ul>
            </nav>
        </>
    )
}