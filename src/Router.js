import React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <AdminLayout></AdminLayout>
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

export default Router

