import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers,compose } from "redux";
import handlereducer from '../reducer/handlereducer'
const initiaState = {};
const middleware = [thunk];

const store = createStore(
    combineReducers({
        // username:handlereducer,
        // oldPwd:handlereducer,
        state:handlereducer
    }),
    initiaState,
    // applyMiddleware(...middleware),
    compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    //谷歌测试工具
);

export default store;