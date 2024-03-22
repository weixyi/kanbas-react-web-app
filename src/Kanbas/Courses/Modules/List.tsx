import React, {useEffect, useState} from "react";
import "./index.css";
import {courses, modules} from "../../Database";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaArrowRight} from "react-icons/fa";
import {useParams} from "react-router";
import {stringify} from "node:querystring";

type ModuleType = {
    week: string;
    module_id: string;
    course_id: string;
    categories: {
        title: string;
        items: string[];
    }[];
};
type CategoryType = {
    title: string;
    items: string[];
};

function ModuleList() {
    const {courseId} = useParams();

    const filteredModules = modules.filter((module) => module.course_id === courseId);

    const [moduleList, setModuleList] = useState(filteredModules);
    const [expandedWeeks, setExpandedWeeks] = useState(new Set());

    useEffect(() => {
        const filteredModules = modules.filter(module => module.course_id === courseId);

        // Set the filtered modules to the moduleList state
        setModuleList(filteredModules);
        // Set the first module of the filtered list to the selectedModule state
    }, [courseId]); // Dependency array includes courseId to re-run this effect when courseId changes

    const [isEditing, setIsEditing] = useState(false);
    const [editingModule, setEditingModule] = useState<ModuleType | null>(null); // Only set this state with non-null values
    const [module, setModule] = useState({
        description: "New Description",
        course_id: courseId,
        week: "New Module",
        module_id: new Date().getTime().toString(),
        "categories": []
    });

    const toggleWeek = (week: string)=> {
        setExpandedWeeks((prevExpandedWeeks) => {
            const newExpandedWeeks = new Set(prevExpandedWeeks);
            if (newExpandedWeeks.has(week)) {
                newExpandedWeeks.delete(week);
            } else {
                newExpandedWeeks.add(week);
            }
            return newExpandedWeeks;
        });
    };

    const addModule = (module: any) => {
        const newModule = { ...module,
            module_id: new Date().getTime().toString() };
        setModuleList((prevModuleList) => [ ...prevModuleList, newModule]);
        setModule(
            {
                description: "New Description",
                    course_id: courseId,
                week: "New Module",
                module_id: new Date().getTime().toString(),
                "categories": []
            }
        )
    };

    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module.module_id !== moduleId );
        setModuleList(newModuleList);
    };

    const handleEditClick = (module:any) => {
        setIsEditing(true);
        setEditingModule({ ...module });
        const newExpandedWeeks = new Set();
        newExpandedWeeks.add(module.week);
        setExpandedWeeks(newExpandedWeeks); // Collapse all modules
    };

    const saveEditedModule = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingModule) {
            setModuleList(moduleList.map((mod) =>
                    mod.module_id === editingModule.module_id ? editingModule : mod
                )
            );
            setIsEditing(false);
        }
    };

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
            <button className={"wd-red-button"}>Module</button>
            <hr/>

            <ul className="list-group wd-modules">
                {moduleList.map(({week, module_id, categories, course_id}, index) => (
                    <li key={index} className="list-group-item">
                        <div className = {"wd-week"}>
                            <span onClick={() => toggleWeek(week)}> <FaEllipsisV/></span>
                            {week}
                            <span className="float-end">
                            <button className="wd-edit-button"
                            onClick={(event) => {
                                handleEditClick({ week, module_id, categories, course_id })
                            }}>
                            Edit
                            </button>
                            <button className="wd-edit-button"
                                onClick={() => deleteModule(module_id)}>
                            Delete
                            </button>
                        </span>
                            {expandedWeeks.has(week) && (
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
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {!isEditing && <li className="list-group-item add-modules">
                <div className="input-group">
                    <input
                        value={module.week}
                        onChange={(e) => setModule({...module, week: e.target.value})}
                    />
                    <textarea
                        value={module.description}
                        onChange={(e) => setModule({...module, description: e.target.value})}
                    />
                    <button className="wd-red-button" onClick={() => {
                        addModule(module)
                    }}>Add
                    </button>
                </div>
            </li>}

            {isEditing && editingModule && (
                <div className="module-edit-form">
                    <h4>Edit Current Module</h4>
                    <form onSubmit={saveEditedModule}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="moduleWeek"
                                placeholder="Week"
                                value={editingModule.week}
                                onChange={(e) => setEditingModule({ ...editingModule, week: e.target.value })}
                            />
                        </div>
                        {editingModule.categories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`categoryTitle-${categoryIndex}`}
                                    placeholder="Category Title"
                                    value={category.title}
                                    onChange={(e) => {
                                        const updatedCategories = [...editingModule.categories];
                                        updatedCategories[categoryIndex] = {
                                            ...category,
                                            title: e.target.value,
                                        };
                                        setEditingModule({
                                            ...editingModule,
                                            categories: updatedCategories,
                                        });
                                    }}
                                />
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`item-${categoryIndex}-${itemIndex}`}
                                            placeholder="Item"
                                            value={item}
                                            onChange={(e) => {
                                                const updatedItems = [...category.items];
                                                updatedItems[itemIndex] = e.target.value;
                                                const updatedCategories = [...editingModule.categories];
                                                updatedCategories[categoryIndex] = {
                                                    ...category,
                                                    items: updatedItems,
                                                };
                                                setEditingModule({
                                                    ...editingModule,
                                                    categories: updatedCategories,
                                                });
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="form-actions">
                            <button type="submit" className="btn-save wd-red-button">Save</button>
                            <button type="button" className="btn-cancel wd-red-button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}



        </div>
    );
}


export default ModuleList;

