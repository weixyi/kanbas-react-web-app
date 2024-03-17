import React from 'react';
import "./index.css"
import {FaClipboardList, FaHome, FaStream, FaBell, FaChartLine, FaClock} from 'react-icons/fa';

const statusItems = [
    { icon: <FaClipboardList />, text: 'Import Existing Content' },
    { icon: <FaHome />, text: 'Choose Home Page' },
    { icon: <FaStream />, text: 'View Course Stream' },
    { icon: <FaBell />, text: 'New Announcement' },
    { icon: <FaChartLine />, text: 'New Analytics' },
    // ... other status items
];

const toDoItems = [
    { text: 'Grade A1 - Env HTML', time: 'Sep 15 at 11:59pm' },
    { text: 'Grade A2 - CSS', time: 'Oct 2 at 11:59pm' },
    // ... other to-do items
];


function Status() {
    return (
        <div className="wd-status-bar">
            <ul className="wd-status-list">
                {statusItems.map((item, index) => (
                    <li key={index} className="wd-status-item">
                        {item.icon}
                        <span className={"wd-todo-text"}>{item.text}</span>
                    </li>
                ))}
            </ul>
            <br/>
            <div className="wd-todo-list">
                <h4>To Do</h4>
                {toDoItems.map((item, index) => (
                    <div key={index} className="wd-todo-item">
                        <FaClock  />
                        <span className={"wd-todo-text"}> {item.text}</span>
                        <span className="wd-todo-time">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Status;
