import React,{useState} from "react";

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, key) => {
        return <div key={key} className="ui styled accordion">
            <div onClick={(e)=>{onTitleClick(key)}} className={key===activeIndex ? "active title" : "title"}><i className="dropdown icon"></i>{item.title}</div>
            <div className={key === activeIndex ? "active content" : "content"}>{item.content}</div>
        </div>
    })


    return (
        <div><br/>{renderedItems}</div>
    )
}

export default Accordion