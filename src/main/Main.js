import Nav from "../components/Nav"
import Section from "../components/Section"
import Section2 from "../components/Section2"
export default function Main(){
    return(
        <>
            <Nav lists={{list1:'About', list2:'AskeMe', list3:'Contact'}}/>
            <Section />
            <Section2 msg={{msg1:'More to Discover', msg2:'More To Learn'}}/>
        </>
    )
}