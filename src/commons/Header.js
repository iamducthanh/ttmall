import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header mx-auto">
                <div className="d-flex">
                    <div className="navbar-brand-box d-block d-lg-none">
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/img/logo-sm.png" height={22} />
                            </span>
                        </a>
                    </div>
                    <button type="button" className="btn btn-sm me-2 font-size-24 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                        <i className="mdi mdi-menu" />
                    </button>
                    <ul className="list-inline d-none d-lg-block mb-0">
                        <li className="list-inline-item me-3 help-number">
                            <span className="font-size-13 header-item">Help : +012 3456 789</span>
                        </li>
                        <li className="list-inline-item">
                            <div className="dropdown d-none d-lg-block">
                                <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown">
                                    <img className="me-2" src="assets/img/us_flag.jpg" height={14} />
                                    United States <span className="mdi mdi-chevron-down" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/img/french_flag.jpg" className="me-1" height={12} />
                                        <span className="align-middle"> French </span>
                                    </a>
                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/img/germany_flag.jpg" className="me-1" height={12} /> <span className="align-middle"> German </span>
                                    </a>
                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/img/italy_flag.jpg" className="me-1" height={12} />
                                        <span className="align-middle"> Italian </span>
                                    </a>
                                    <a href="#" className="dropdown-item notify-item">
                                        <img src="assets/img/spain_flag.jpg" className="me-1" height={12} />
                                        <span className="align-middle"> Spanish </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="search-wrap" id="search-wrap">
                    <div className="search-bar">
                        <input className="search-input form-control" placeholder="Search" />
                        <a href="#" className="close-search toggle-search" data-target="#search-wrap">
                            <i className="mdi mdi-close-circle" />
                        </a>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="dropdown d-none d-lg-block">
                        <button type="button" className="btn header-item toggle-search noti-icon waves-effect" data-target="#search-wrap">
                            <i className="mdi mdi-magnify" />
                        </button>
                    </div>
                    <div className="dropdown d-inline-block ms-2">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown">
                            <i className="mdi mdi-bell-outline" />
                            <span className="badge bg-danger rounded-pill">3</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                            <div className="p-3">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="m-0 font-size-16"> Notification (3) </h5>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style={{ maxHeight: 230 }}>
                                <a className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="mdi mdi-cart-outline" />
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mt-0 font-size-15 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-danger rounded-circle font-size-16">
                                                <i className="mdi mdi-message-text-outline" />
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mt-0 font-size-15 mb-1">New Message received</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">You have 87 unread messages</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-info rounded-circle font-size-16">
                                                <i className="mdi mdi-glass-cocktail" />
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mt-0 font-size-15 mb-1">Your item is shipped</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">It is a long established fact that a reader will</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-success rounded-circle font-size-16">
                                                <i className="mdi mdi-message-text-outline" />
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mt-0 font-size-15 mb-1">New Message received</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">You have 87 unread messages</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="text-reset notification-item">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-warning rounded-circle font-size-16">
                                                <i className="mdi mdi-cart-outline" />
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mt-0 font-size-15 mb-1">Your order is placed</h6>
                                            <div className="font-size-12 text-muted">
                                                <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="p-2 border-top">
                                <a className="btn btn-sm btn-link font-size-14 btn-block" href="#">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown d-inline-block ms-2">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown">
                            <img className="rounded-circle header-profile-user" src="assets/img/avatar-6.jpg" />
                            <span className="d-none d-md-inline-block ms-1">Donald T. <i className="mdi mdi-chevron-down" />
                            </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#"><i className="dripicons-user font-size-16 align-middle me-2 text-muted" /> Profile</a>
                            <a className="dropdown-item" href="#"><i className="dripicons-wallet font-size-16 align-middle me-2 text-muted" /> My
                                Wallet</a>
                            <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">5</span><i className="dripicons-gear font-size-16 align-middle me-2 text-muted" /> Settings</a>
                            <a className="dropdown-item" href="#"><i className="dripicons-lock font-size-16 align-middle me-2 text-muted" /> Lock
                                screen</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#"><i className="dripicons-exit font-size-16 align-middle me-2 text-muted" /> Logout</a>
                        </div>
                    </div>
                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                            <i className="mdi mdi-spin mdi-cog" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="topnav">
                <div className="container-fluid">
                    <div className="d-flex">
                        <div className="navbar-brand-box d-none d-lg-block">
                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/img/logo-sm.png" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/img/logo.png" height={20} />
                                </span>
                            </a>
                        </div>
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                            <div className="collapse navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <i className="dripicons-meter me-2" />Tổng quan
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-user-Interface" role="button">
                                            <i className="dripicons-briefcase me-2" />Hàng hóa
                                            <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-advanced-ui">
                                            <Link to="/hang-hoa" className="dropdown-item">Hàng hóa</Link>
                                            <Link to="/van-don" className="dropdown-item">Vận đơn</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button">
                                            <i className="dripicons-view-thumb me-2" />Giao dịch
                                            <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-components">
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email" role="button">
                                                    Email <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-email">
                                                    <a href="email-inbox.html" className="dropdown-item">Inbox</a>
                                                    <a href="email-read.html" className="dropdown-item">Email Read</a>
                                                    <a href="email-compose.html" className="dropdown-item">Email Compose</a>
                                                </div>
                                            </div>
                                            <a href="calendar.html" className="dropdown-item">Calendar</a>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-forms" role="button">
                                                    Forms <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-forms">
                                                    <a href="form-elements.html" className="dropdown-item">Form Elements</a>
                                                    <a href="form-validation.html" className="dropdown-item">Form
                                                        Validation</a>
                                                    <a href="form-advanced.html" className="dropdown-item">Form Advanced</a>
                                                    <a href="form-editors.html" className="dropdown-item">Form Editors</a>
                                                    <a href="form-uploads.html" className="dropdown-item">Form File
                                                        Upload</a>
                                                    <a href="form-mask.html" className="dropdown-item">Form Mask</a>
                                                    <a href="form-xeditable.html" className="dropdown-item">Form
                                                        Xeditable</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons" role="button">
                                                    Icons <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-icons">
                                                    <a href="icons-material.html" className="dropdown-item">Material
                                                        Design</a>
                                                    <a href="icons-ion.html" className="dropdown-item">Ion Icons</a>
                                                    <a href="icons-fontawesome.html" className="dropdown-item">Font
                                                        Awesome</a>
                                                    <a href="icons-themify.html" className="dropdown-item">Themify Icons</a>
                                                    <a href="icons-dripicons.html" className="dropdown-item">Dripicons</a>
                                                    <a href="icons-typicons.html" className="dropdown-item">Typicons
                                                        Icons</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts" role="button">
                                                    Charts <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                                    <a href="charts-morris.html" className="dropdown-item">Morris Chart</a>
                                                    <a href="charts-chartist.html" className="dropdown-item">Chartist
                                                        Chart</a>
                                                    <a href="charts-chartjs.html" className="dropdown-item">Chartjs
                                                        Chart</a>
                                                    <a href="charts-flot.html" className="dropdown-item">Flot Chart</a>
                                                    <a href="charts-c3.html" className="dropdown-item">C3 Chart</a>
                                                    <a href="charts-other.html" className="dropdown-item">Jquery Knob
                                                        Chart</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-tables" role="button">
                                                    Tables <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-tables">
                                                    <a href="tables-basic.html" className="dropdown-item">Basic Tables</a>
                                                    <a href="tables-datatable.html" className="dropdown-item">Data Table</a>
                                                    <a href="tables-responsive.html" className="dropdown-item">Responsive
                                                        Table</a>
                                                    <a href="tables-editable.html" className="dropdown-item">Editable
                                                        Table</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-maps" role="button">
                                                    Maps <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-maps">
                                                    <a href="maps-google.html" className="dropdown-item"> Google Map</a>
                                                    <a href="maps-vector.html" className="dropdown-item"> Vector Map</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-advanced-ui" role="button">
                                            <i className="fas fa-hands-helping"/> Đối tác
                                            <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-advanced-ui">
                                            <Link to="/khach-hang" className="dropdown-item">Khách hàng</Link>
                                            <Link to="/doi-tac-giao-hang" className="dropdown-item">Đối tác giao hàng</Link>
                                            <Link to="/nha-cung-cap" className="dropdown-item">Nhà cung cấp</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button">
                                        <i className="far fa-user" /> Nhân viên
                                            <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu mega-dropdown-menu dropdown-mega-menu-lg  dropdown-menu-end" aria-labelledby="topnav-pages">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div>
                                                        <a href="pages-timeline.html" className="dropdown-item">Timeline</a>
                                                        <a href="pages-invoice.html" className="dropdown-item">Invoice</a>
                                                        <a href="pages-directory.html" className="dropdown-item">Directory</a>
                                                        <a href="pages-login.html" className="dropdown-item">Login</a>
                                                        <a href="pages-register.html" className="dropdown-item">Register</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div>
                                                        <a href="pages-recoverpw.html" className="dropdown-item">Recover
                                                            Password</a>
                                                        <a href="pages-lock-screen.html" className="dropdown-item">Lock
                                                            Screen</a>
                                                        <a href="pages-starter.html" className="dropdown-item">Starter
                                                            Page</a>
                                                        <a href="pages-404.html" className="dropdown-item">Error 404</a>
                                                        <a href="pages-500.html" className="dropdown-item">Error 500</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button">
                                            <i className="dripicons-inbox me-2" />Sổ quỹ <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-layout">
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-layout-verti" role="button">
                                                    Vertical <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-layout-verti">
                                                    <a href="layouts-light-sidebar.html" className="dropdown-item">Light
                                                        Sidebar</a>
                                                    <a href="layouts-compact-sidebar.html" className="dropdown-item">Compact
                                                        Sidebar</a>
                                                    <a href="layouts-icon-sidebar.html" className="dropdown-item">Icon
                                                        Sidebar</a>
                                                    <a href="layouts-boxed.html" className="dropdown-item">Boxed Layout</a>
                                                    <a className="dropdown-item">Colored Sidebar</a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-layout-hori" role="button">
                                                    Horizontal <div className="arrow-down" />
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="topnav-layout-hori">
                                                    <a href="layouts-horizontal.html" className="dropdown-item">Horizontal</a>
                                                    <a href="layouts-hori-full.html" className="dropdown-item">Full
                                                        Width</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-advanced-ui" role="button">
                                            <i className="fas fa-chart-bar" /> Báo cáo
                                            <div className="arrow-down" />
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="topnav-advanced-ui">
                                            <a href="khachhang.html" className="dropdown-item">Khách hàng</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
