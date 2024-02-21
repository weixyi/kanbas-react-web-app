import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

function CoursesNavigation() {
    const coursesLinks = [
        { label: "Home", path: "/Kanbas/Courses/Home" },
        { label: "Modules", path: "/Kanbas/Courses/Modules" },
        { label: "Piazza", path: "/Kanbas/Courses/Piazza" },
        { label: "Zoom Meetings", path: "/Kanbas/Courses/ZoomMeetings" },
        { label: "Assignments", path: "/Kanbas/Courses/Assignments" },
        { label: "Quizzes", path: "/Kanbas/Courses/Quizzes" },
        { label: "Grades", path: "/Kanbas/Courses/Grades" },
        { label: "People", path: "/Kanbas/Courses/People" },
        { label: "Panopto Video", path: "/Kanbas/Courses/PanoptoVideo" },
        { label: "Discussions", path: "/Kanbas/Courses/Discussions" },
        { label: "Announcements", path: "/Kanbas/Courses/Announcements" },
        { label: "Pages", path: "/Kanbas/Courses/Pages" },
        { label: "Files", path: "/Kanbas/Courses/Files" },
        { label: "Rubrics", path: "/Kanbas/Courses/Rubrics" },
        { label: "Outcomes", path: "/Kanbas/Courses/Outcomes" },
        { label: "Collaborations", path: "/Kanbas/Courses/Collaborations" },
        { label: "Syllabus", path: "/Kanbas/Courses/Syllabus" },
        { label: "Settings", path: "/Kanbas/Courses/Settings" },
    ];
    const { pathname } = useLocation();

    return (
        <ul className="wd-courses-navigation courses-sidebar">
            {coursesLinks.map((course, index) => (
                <li key={index} className={pathname.includes(course.path) ? "wd-active" : ""}>
                    <Link to={course.path}>{course.label}</Link>
                </li>
            ))}
        </ul>
    );
}


export default CoursesNavigation;
