import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import AttachFileIcon from "@material-ui/icons/AttachFile";
function Chat() {
  const [input, setInput] = useState("");
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_details">
          <h3>Room Name</h3>
          <p> 03:15 AM</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message chat_sender">
          <span className="chat_name">Test</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message chat_sender">
          <span className="chat_name">Test</span>
          <span className=".chat_message">Hi</span>
          <span className="chat_timestemp">12:18 AM</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message chat_sender">
          <span className="chat_name">Test</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Pranay</span>
          <span className=".chat_message">Hello</span>
          <span className="chat_timestemp">12:08 AM</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
        
      </div>
    </div>
  );
}

export default Chat;
