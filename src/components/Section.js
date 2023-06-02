import '../style/Section.css'
export default function Section({props={msg1:'React App', msg2:'Landing Page'}}){
    console.log(props)
    return (
        <>
            <section className='center'>
                <h1>{props.msg1}</h1>
                <h2>{props.msg2}</h2>
            </section>
            <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt=''/>
        </>
    )
}