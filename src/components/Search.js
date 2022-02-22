import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = (props) => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    const handleTermChange = (value) => {
        setTerm(value)
    }

    useEffect(()=>{
        console.log("Setting term")
        const timeoutId = setTimeout(()=>{
            console.log("Setting debounced term")
            setDebouncedTerm(term)
        }, 500)

        return (()=>{
            clearTimeout(timeoutId)
        })
    },[term])

    useEffect(()=>{
            const search = async() => {
            console.log('Searching...')
            const res = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm
                }
            })
            setResults(res.data.query.search)
        }

        if(debouncedTerm){
            search();
        }
    },[debouncedTerm])


    // useEffect( () => {
    //     // defining a temporary async function inside useEffect
    //     const search = async() => {
    //         console.log('Searching...')
    //         const res = await axios.get("https://en.wikipedia.org/w/api.php", {
    //             params: {
    //                 action: "query",
    //                 list: "search",
    //                 origin: "*",
    //                 format: "json",
    //                 srsearch: term
    //             }
    //         })
    //         setResults(res.data.query.search)
    //     }

        
    //     if(term && results.length === 0){ // using this condition to detect initial render
    //         // for initial render, we don't want to set 500ms timeout. 
    //         search();
    //     } else{
    //         // for every subsequent render, we want to set 500ms timeout.
    //         const timeoutId = setTimeout(()=>{
    //             if(term){
    //                 // calling this function if term is not null or empty
    //                 search();
    //             }
    //         }, 500)
    //         return () => {
    //             clearTimeout(timeoutId)
    //         }
    //     }
    // }, [term, results.length])

    const renderedItems = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })
    

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <div className="ui icon input">
                        <input value={term} onChange={(e) => handleTermChange(e.target.value)} type="text" placeholder="Search..."/>
                        <i className="search icon"></i>
                    </div>
                </div>
                <div className="ui celled list">
                {renderedItems}
                </div>
               
            </div>
        </div>
    )
}

export default Search;