import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers,compose } from "redux";
import userreducer from '../reducer/userreducer'
import weatherreducer from '../reducer/weatherreducer'
const initiaState = {};
const middleware = [thunk];

const store = createStore(
    combineReducers({
        // username:handlereducer,  
        // oldPwd:handlereducer,
        user:userreducer,//取决于state的目录结构
        weather:weatherreducer
    }),
    initiaState,
    // applyMiddleware(...middleware),
    compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    //谷歌测试工具
);

export default store;