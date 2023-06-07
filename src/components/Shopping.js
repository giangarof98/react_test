export default function Shopping({item, qty, completed}){
    const styles = {
        color: completed ? "green" : 'gray',
        textDecoration: completed ? 'line-through' : 'none'
    }
    return (
        <>
            <li style={styles}>
                {/* style={{
                color: completed ? "green" : 'gray',
                textDecoration: completed ? 'line-through' : 'none'
                }} */}
                    {item} - {qty}
            </li>
        </>
    )
}