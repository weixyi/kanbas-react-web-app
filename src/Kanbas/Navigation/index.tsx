import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaInbox,
    FaHistory,
    FaRegFileVideo, FaRegShareSquare, FaQuestionCircle
} from "react-icons/fa";
import northeasternLogo from '../Images/northeastern-banner-N.png';

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" />, notification: 13 },
        { label: "History", icon: <FaHistory className="fs-2" /> },
        { label: "Studio", icon: <FaRegFileVideo className="fs-2" /> },
        { label: "Commons", icon: <FaRegShareSquare className="fs-2" />, notification: 10 },
        { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li className="nav-logo">
                <a href="https://northeastern.edu" target="_blank" rel="noopener noreferrer">
                    <img src={northeasternLogo} alt="Northeastern Logo" style={{ maxWidth: '80px'}} />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;