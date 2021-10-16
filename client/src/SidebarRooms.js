import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarRooms.css';

function SidebarRooms() {
    return (
        <div className="sidebarRooms">
             <Avatar/>
                <div className="sidebarRooms_details">
                    <h2>Name</h2>
                    <p>Last message</p>
                </div>
                <div className="sideRooms_timestamp">
                    <p> 03:15 AM</p>
                </div>
        </div>
    )
}

export default SidebarRooms
