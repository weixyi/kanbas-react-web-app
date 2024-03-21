import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";
import ParentStateComponent from "./ParentStateComponent";
import AddRedux from "./ReduxExamples/AddRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import HelloRedux from "./ReduxExamples/HelloRedux";
import {useSelector} from "react-redux";
import {LabState} from "../store";
import TodoList from "./ReduxExamples/todos/TodoList";

const Assignment4 = () => {
    function sayHello(){
        alert("Hello")
    }

    const {todos} = useSelector((state: LabState) => state.todosReducer);
    return(
        <>
            <h1>Labs</h1>
            <TodoList/>
            <h2>Todos list provider</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>

            <ReduxExamples/>
            <AddRedux/>
            <CounterRedux/>
            <HelloRedux/>

            <ParentStateComponent/>
            <ArrayStateVariable/>
            <ObjectStateVariable/>
            <DateStateVariable/>
            <StringStateVariables/>
            <BooleanStateVariables/>
            <Counter/>
            <EventObject/>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <h1>Assignment 4</h1>
        </>
    );
};
export default Assignment4;
