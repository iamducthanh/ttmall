import React from 'react'

const RightBar = () => {
  return (
    <div className="right-bar">
      <div data-simplebar className="h-100">
        <div className="rightbar-title px-3 py-4">
          <a href className="right-bar-toggle float-end">
            <i className="mdi mdi-close noti-icon" />
          </a>
          <h5 className="m-0">Settings</h5>
        </div>
        {/* Settings */}
        <hr className="mt-0" />
        <h6 className="text-center mb-0">Choose Layouts</h6>
        <div className="p-4">
          <div className="mb-2">
            <img src="assets/img/layout-1.jpg" className="img-fluid img-thumbnail" alt />
          </div>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" />
            <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
          </div>
          <div className="mb-2">
            <img src="assets/img/layout-2.jpg" className="img-fluid img-thumbnail" alt />
          </div>
          <div className="form-check form-switch mb-3">
            <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css" data-appstyle="assets/css/app-dark.min.css" />
            <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
          </div>
        </div>
      </div> {/* end slimscroll-menu*/}
    </div>

  )
}

export default RightBar
