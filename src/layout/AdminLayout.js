import React from 'react'
import Header from '../component/Header'
import RightBar from '../component/RightBar'

const AdminLayout = (props) => {
    return (
        <div>
            <div id="preloader">
                <div id="status">
                    <div className="spinner" />
                </div>

            </div>
            <div id="layout-wrapper">
                <Header></Header>
            </div>


            <RightBar></RightBar>
            <div className="rightbar-overlay" />
        </div>
    )
}

export default AdminLayout

