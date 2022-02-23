import React from "react";

const Link = ({href, className, children}) => {
    const onClick = (event) => {
        // metaKey -> Mac, ctrlKey -> Windows
        if(event.metaKey || event.ctrlKey){
            // open in new tab
            return;
        }
        event.preventDefault();
        window.history.pushState({},'', href);

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <div>
            <a onClick={onClick} href={href} className={className}>{children}</a>
        </div>
    )
}

export default Link;