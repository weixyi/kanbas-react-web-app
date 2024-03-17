import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
const Assignment4 = () => {
    function sayHello(){
        alert("Hello")
    }

    return(
        <>
            <h1>Labs</h1>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <h1>Assignment 4</h1>
        </>
    );
};
export default Assignment4;
