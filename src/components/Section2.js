import '../style/Section2.css'
export default function Section2({msg}){
    return (
        <>
            <section className='center2'>
                <h2>{msg.msg1}</h2>
                <h3>{msg.msg2}</h3>
            </section>
            <img src='https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' alt='' />
        </>
    )

}