import { courses } from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CoursesNavigation from "./Navigation";
import Modules from "./Home/Modules";
import "./index.css"
import Breadcrumb from "./Breadcrumb";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <div className={""}>
                <div className="">
                    <Breadcrumb/>
                    <div className="row">
                        <CoursesNavigation/>
                        <div className="col-12 col-lg-7">
                            <div className="wd-courses-home-modules">
                                <button>Collapse All</button>
                                <button>View Progress</button>
                                <label>
                                    <select>
                                        <option>Publish All</option>
                                        <option>Unpublish All</option>
                                        <option>Unpublish All</option>
                                    </select>
                                </label>
                                <button>Module</button>
                                <hr/>
                                <ul className="list-group wd-modules">
                                    <li className="list-group-item ">
                                        <i className="fa fa-ellipsis-v"></i>
                                        Week 0 - INTRO
                                        <span className="float-end">
        <i className="fa fa-check-circle text-success"></i>
        <i className="fa fa-plus ms-2"></i>
        <i className="fa fa-ellipsis-v ms-2"></i>
        </span>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                LEARNING
                                                <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Introduction to the course
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Learn what is Web Development
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Creating an environment
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Creating a Web Application
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Getting started with the 1st
                                                        assignment
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="list-group-item">
                                                READING
                                                <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Full Stack Developer - Chapter 1 -
                                                        Introduction
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Full Stack Developer - Chapter 2 -
                                                        Creating User Interfaces With HTML
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="list-group-item">
                                                SLIDES
                                                <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                <ul className="list-group">
                                                    <li className="list-group-item"><a className="wd-home-links"
                                                                                       href="#">Introduction to Web
                                                        Development</a>
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item"><a className="wd-home-links"
                                                                                       href="#">Creating an HTTP server
                                                        with Node.js</a>
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item"><a className="wd-home-links"
                                                                                       href="#">Creating a React
                                                        Application</a>
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="fa fa-ellipsis-v"></i>
                                        Week 1 - HTML
                                        <span className="float-end">
        <i className="fa fa-check-circle text-success"></i>
        <i className="fa fa-plus ms-2"></i>
        <i className="fa fa-ellipsis-v ms-2"></i>
        </span>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                LEARNING OBJECTIVES
                                                <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Learn how to create user interfaces
                                                        with HTML
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Keep working on assignment 1
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Deploy the assignment to Netlify
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="list-group-item">
                                                READING
                                                <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Full Stack Developer - Chapter 1 -
                                                        Introduction
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                    <li className="list-group-item">Full Stack Developer - Chapter 2 -
                                                        Creating User Interfaces With HTML
                                                        <span className="float-end">
                <i className="fa fa-check-circle text-success"></i> <i className="fa fa-ellipsis-v ms-2"></i></span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 last-column d-none d-xl-block">
                            <br/>
                            <div className="wd-courses-home-status">
                                <h4>Course Status</h4>
                                <div className="btn-group">
                                    <a href="#" className="btn btn-default wd-grey">Unpublish</a>
                                    <a href="#" className="btn btn-default">Published</a>
                                </div>
                                <br/>
                                <div className="wd-status-box ">
                                    <ul>
                                        <li><a href="#">Import Existing Content</a></li>
                                        <li><a href="#">Import From Commons</a></li>
                                        <li><a href="#">Choose Home Page</a></li>
                                        <li><a href="#">View Course Stream</a></li>
                                        <li><a href="#">New Announcement</a></li>
                                        <li><a href="#">New Analytics</a></li>
                                        <li><a href="#">View Course Notifications</a></li>
                                    </ul>
                                </div>
                                <br/>
                                <div className="wd-status-box">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4>Coming Up</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <a href="#" className="calender-btn">
                                                    <i className="far fa-calendar-alt"></i> View Calendar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <ul>
                                        <li><a href="#">Lecture CS4550 Sep 7 at 11:45am</a></li>
                                        <li><a href="#">Lecture CS4550 Sep 11 at 11:45am</a></li>
                                        <li><a href="#">CS5610 Lecture Sep 11 at 6 pm</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;