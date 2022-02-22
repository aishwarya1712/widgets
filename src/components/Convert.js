//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({selectedLanguage, debouncedText}) => {
    const [translatedText, setTranslatedText] = useState('');

    useEffect ( () => {
        const getTranslatedText = async() => {
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: selectedLanguage.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            console.log("Result: ", response.data.data.translations[0])
            setTranslatedText(response.data.data.translations[0].translatedText)
        }

        if(debouncedText){
            getTranslatedText();
        }

    },[selectedLanguage, debouncedText])
    return (
        <div>
            <h1 className="header">{translatedText}</h1>
        </div>
    )
}

export default Convert;