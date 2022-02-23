import React,{useState, useEffect, useRef} from "react";

const Dropdown = ({options, label, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const dropdownEl = useRef(null);
    const ref = useRef();

    const renderedOptions = options.map((option, key) => {
        return (
            <div key={key} className="item" value={option.value} onClick={(e) => onSelectedChange(option)}>{option.label}</div>
        )
    })

    useEffect(()=>{
        const onBodyClick =  (e)=>{
            if(ref.current.contains(e.target)){
                return;
            } 
            console.log("body outside of dropdown was clicked")
            setOpen(false)  
        };

        document.body.addEventListener('click',onBodyClick,{capture: true})
        return () => {
            console.log("Cleaning up dropdown use effect")
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        } 
    }, [])

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div ref={dropdownEl} className={open ? "ui selection dropdown visible active": "ui selection dropdown"} onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={ open ? "menu transition visible" : "menu transition"}>
                        {renderedOptions}
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Dropdown;