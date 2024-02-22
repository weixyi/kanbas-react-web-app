import React, {useEffect, useState} from "react";
import "./index.css";
import {courses, modules} from "../../Database";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle} from "react-icons/fa";
import {useParams} from "react-router";
import {stringify} from "node:querystring";

function ModuleList() {
    const {courseId} = useParams();
    const modulesList = modules.filter((module) => module._id === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    useEffect(() => {
        setSelectedModule(modulesList[0]);
    }, [courseId]);
    const selectedModules = selectedModule?.modules || [];

    return (
        <div className={"wd-courses-home-modules"}>
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
                {selectedModules.map(({week, categories}, index) => (
                    <li key={index} className="list-group-item">
                        <i className="fa fa-ellipsis-v"></i>
                        {week}
                        <span className="float-end">
                          <FaCheckCircle className="text-success"/>
                          <FaPlusCircle className="ms-2"/>
                          <FaEllipsisV className="ms-2"/>
                        </span>
                        <ul className="list-group">
                            {categories.map(({title, items}, categoryIndex) => (
                                <li key={categoryIndex} className="list-group-item">
                                    {title}
                                    <ul className="list-group">
                                        {items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="list-group-item">
                                                {item}
                                                <span className="float-end">
                          <FaCheckCircle className="text-success"/>
                          <FaEllipsisV className="ms-2"/>
                        </span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>

                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ModuleList;

