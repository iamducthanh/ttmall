import React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import KhachHang from './component/KhachHang'

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <AdminLayout {...props}>
                        <KhachHang/>
                    </AdminLayout>
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

export default Router

