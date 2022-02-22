import React, {useState, useEffect} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect( () => {
        const timeoutId = setTimeout(()=>{
            console.log("Setting debounced input text")
            setDebouncedText(text)
        }, 500);

        return (()=>{
            clearTimeout(timeoutId);
        })
    }, [text])


    return (
        <div className="ui form">
            <div className="field">
            <label className="label">Enter text</label>
            <div className="ui fluid input">
                <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
            </div>
            <Dropdown options={options} label="Select a Language" selected={selectedLanguage} onSelectedChange={setSelectedLanguage}/>
            </div>
            <Convert selectedLanguage={selectedLanguage} debouncedText={debouncedText}/>
        </div>
    )
}

export default Translate