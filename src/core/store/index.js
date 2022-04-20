import { combineReducers, createStore } from 'redux';
import userInfo from './reducer/userInfo';

const rootReducer = combineReducers({
    userInfo
});

export default createStore(rootReducer);
