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
                <div className="main-content">
                    {props.children}
                    <footer className="footer text-center">
                        ©
                        Foxia <span className="d-none d-sm-inline-block">
                            - Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand.</span>
                    </footer>

                </div>

            </div>


            <RightBar></RightBar>
            <div className="rightbar-overlay" />
        </div>
    )
}

export default AdminLayout

