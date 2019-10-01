import { createStore } from 'redux';
import { rootReducers } from '../reducers/rootReducer';


const store = createStore(rootReducers);

export default store;