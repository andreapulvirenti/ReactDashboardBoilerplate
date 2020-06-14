import React from 'react';
import SidebarComponent from './SidebarComponent/sidebarComponent';
import elements from './SidebarConfig.json';
import './sidebar.css';

export default function Sidebar(props){
    return(
        <>
            <nav className="sidebar">

                {
                    elements.map(function(item){
                        return(
                            <SidebarComponent  key={item.key} element={item}>
                                   {props.children}
                            </SidebarComponent>
                        )
                    })
                }


            </nav>
        </>

    )
}