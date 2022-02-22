import React,{useState} from "react";
import Accordion from './Accordion'
import Search  from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const items =[
    {
        title: "What is React?",
        content: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
    {
        title: "Why use React?",
        content: "React is a favourite JS library among engineers."
    },
    {
        title: "How do you use React?",
        content: "You can use react by creating components."
    }
]

const options = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="">
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            {/* <button onClick={(e)=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown ? 
                <div>
                    <Dropdown options={options} label="Select a color" selected={selected} onSelectedChange={setSelected}/>
                    <div style={{color: selected.value}}>This text is {selected.label}</div>
                </div> : null
            } */}
            <Translate/>

            
        </div>
    )
}

export default App