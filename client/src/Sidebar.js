import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from '@material-ui/icons/Search';
import SidebarRooms from './SidebarRooms';
function Sidebar() {

    return (
        <div className="sidebar">
             <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_input">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar_rooms">
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            <SidebarRooms/>
            </div>
        </div>
    );
}

export default Sidebar;