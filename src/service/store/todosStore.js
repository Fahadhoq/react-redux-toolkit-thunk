import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "../reducers/todosReducer";

const todosStore = createStore(todosReducer, applyMiddleware(thunk))

export default todosStore;