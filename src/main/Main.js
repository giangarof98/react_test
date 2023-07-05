import Nav from "../components/Nav"
import Section from "../components/Section"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import PropertyList from "../components/PropertyList"
import Toggler from "../components/Toggler"
import ColorBox from "../components/ColorBox"
import ColorGrid from "../components/ColorGrid"

// const data = [
//     {id: 1, item:'eggs', qty: 4, completed: true},
//     {id: 2, item:'milk', qty: 2, completed: false},
//     {id: 3, item:'chocolate', qty: 9, completed: true},
//     {id: 4, item:'juice', qty: 7, completed: false}
//   ]

  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150, available: true},
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250, available: true },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300, available: false },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120, available: true },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140, available: false },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96, available: true },
  ];

  const colors = [
    '#006eff',
    '#ff0000', 
    '#32a84e',
    '#7527e3',
    '#e3e027',
    '#5ca180',
    '#ffa6e0',
    '#3cdae8',
    '#edaa1a'
  ];
  

export default function Main(){
    return(
        <>
            <Nav lists={{list1:'About', list2:'AskeMe', list3:'Contact'}}/>
            <Section />
            <Section2 msg={{msg1:'More to Discover', msg2:'More To Learn'}}/>
            <Section3 text='Slot Game' color='purple' winner='green' btn='shuffle' />
            {/* <Section4 arr={['1','2','3']} color='blue'/> */}
            <PropertyList properties={properties}/>
            <Toggler />
            <ColorGrid colors={colors}/>

        </>
    )
}