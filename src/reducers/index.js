import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';
import { routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    courses: courseReducer,
    router: routerReducer
});

export default rootReducer;