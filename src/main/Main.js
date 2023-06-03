import Nav from "../components/Nav"
import Section from "../components/Section"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"

export default function Main(){
    return(
        <>
            <Nav lists={{list1:'About', list2:'AskeMe', list3:'Contact'}}/>
            <Section />
            <Section2 msg={{msg1:'More to Discover', msg2:'More To Learn'}}/>
            <Section3 text='Slot Game' color='purple' winner='green'/>
            <Section4 arr={['1','2','3']} color='blue'/>
        </>
    )
}