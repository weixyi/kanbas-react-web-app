import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./variables/IfElse";
import TernaryOperator from "./variables/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturns from "./functions/ImpliedReturns";
import FunctionsParenthesisAndParameters from "./functions/FunctionsParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading"
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    console.log('Hello World');
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturns/>
            <FunctionsParenthesisAndParameters/>
            <WorkingWithArrays/>
            <JsonStringify/>
            <TemplateLiterals/>
            <House/>
            <Spreading/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
}
export default JavaScript