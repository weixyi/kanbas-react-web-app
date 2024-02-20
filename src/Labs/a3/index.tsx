import JavaScript from "./JavaScript";
import {Route, Routes} from "react-router-dom";
import Add2 from "./routing/Add2";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return (
        <div>
            <Routes>
                <Route path="add/:a/:b" element={<Add2/>}/>
                {/* Other routes for Assignment3 can be added here */}
            </Routes>
            <h1>Assignment 3</h1>
            <TodoList/>
            <TodoItem/>
            <Add a={33} b={4}/>
            <JavaScript/>
        </div>
    );
}

export default Assignment3;