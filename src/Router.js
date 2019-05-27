import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Main from './page/Main/Main'
import Alter from './page/Alter/Alter'
import { Provider } from "react-redux";
import store from './store/store'

const BaseRouter=()=>(
    <Provider store={store}>
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path='/Alter' component={Alter} />
        </Switch>
    </HashRouter>
    </Provider>
)

export default BaseRouter;