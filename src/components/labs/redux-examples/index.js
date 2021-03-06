import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./hello";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import todos from "./todos-reducer";
import Todos from "./todos-component"

const reducers = combineReducers({hello, todos});
const store = createStore(reducers);

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2> Redux Examples </h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
}; 
export default ReduxExamples;