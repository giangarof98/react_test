import Nav from "../components/Nav"
import Section from "../components/Section"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
// import Section4 from "../components/Section4"
import ShoppingList from "../components/ShoppingList"
import PropertyList from "../components/PropertyList"

const data = [
    {id: 1, item:'eggs', qty: 4, completed: true},
    {id: 2, item:'milk', qty: 2, completed: false},
    {id: 3, item:'chocolate', qty: 9, completed: true},
    {id: 4, item:'juice', qty: 7, completed: false}
  ]

  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];
  

export default function Main(){
    return(
        <>
            <Nav lists={{list1:'About', list2:'AskeMe', list3:'Contact'}}/>
            <Section />
            <Section2 msg={{msg1:'More to Discover', msg2:'More To Learn'}}/>
            <Section3 text='Slot Game' color='purple' winner='green'/>
            {/* <Section4 arr={['1','2','3']} color='blue'/> */}
            <ShoppingList items={data}/>
            <PropertyList properties={properties}/>

        </>
    )
}