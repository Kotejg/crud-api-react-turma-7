import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import RegisterCustomer from './pages/RegisterCustomer'
import NotFound from './pages/NotFound' 
import Clients from './pages/Clients/Clients';
import EditClient from './pages/EditClient/EditClient'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register" component={RegisterCustomer} />
            <Route path="/listcustomer" component={Clients} />
            <Route path="/editcustomer/:id" component={EditClient} />
            <Route component={NotFound} />
        </Switch>
    )
}