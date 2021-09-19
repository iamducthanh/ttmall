import React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import KhachHang from './component/doitac/KhachHang'
import DoiTacGiaoHang from './component/doitac/DoiTacGiaoHang'
import TongQuan from './component/tongquan/TongQuan'
import NhaCungCap from './component/doitac/NhaCungCap'

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <AdminLayout {...props}>
                        <TongQuan/>
                    </AdminLayout>
                </Route>
                <Route exact path='/khach-hang'>
                    <AdminLayout {...props}>
                        <KhachHang/>
                    </AdminLayout>
                </Route>
                <Route exact path='/doi-tac-giao-hang'>
                    <AdminLayout {...props}>
                        <DoiTacGiaoHang/>
                    </AdminLayout>
                </Route>
                <Route exact path='/nha-cung-cap'>
                    <AdminLayout {...props}>
                        <NhaCungCap/>
                    </AdminLayout>
                </Route>
            </Switch>
        </BrowserRouter >
    )
}

export default Router

