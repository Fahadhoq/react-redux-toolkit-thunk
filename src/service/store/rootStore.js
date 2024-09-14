import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'; // assuming combined reducers

const rootStore = createStore(rootReducer);
export default rootStore;
