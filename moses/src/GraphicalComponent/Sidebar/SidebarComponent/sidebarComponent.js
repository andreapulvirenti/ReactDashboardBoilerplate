import React from 'react';
import './sidebarComponent.css'
import { Link } from "react-router-dom";

export default function SidebarComponent(props) {
    return (
        <>
            <Link className="sidebarComponent"  to={props.element.linkTo.toString()}>
 
                    <span className={props.element.iconClass}></span>
                    {props.element.elementName}
            </Link>
        </>

    )
}