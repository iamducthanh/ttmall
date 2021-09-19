import React from 'react'
import Footer from '../commons/Footer'
import Header from '../commons/Header'
import RightBar from '../commons/RightBar'

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
                <div className="main-content">
                    {props.children}
                    <Footer/>
                </div>
            </div>
            <RightBar></RightBar>
            <div className="rightbar-overlay" />
        </div>
    )
}

export default AdminLayout

