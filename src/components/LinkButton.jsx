import React from "react";

const LinkButton = props => {
    const {
        name,
        title,
        link
    } = props

    return (
        <div>
            <a href = {link}>
                <button className="linkList" id = {title}>{name}</button>
            </a>
        </div>
    );
}
export default LinkButton