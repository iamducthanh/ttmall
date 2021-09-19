import React from 'react'
import AddDTGH from './modal/AddDTGH'
import DTGH from './modal/DTGH'

const NhaVanChuyen = () => {
    function onModalDTGH() {
        document.getElementById('tabDTGH').style.display = 'unset'
    }
    function onModalAddDTGH() {
        document.getElementById('tabAddDTGH').style.display = 'unset'
    }
    function editMenuKH() {
        let left = document.getElementById("leftKH");
        let right = document.getElementById("rightKH");
        if (left.style.display == 'none') {
            left.style.display = 'unset';
            right.className = 'col-lg-9';
        } else {
            left.style.display = 'none';
            right.className = 'col-lg-12';
        }
    }
    return (
        <div className="page-content">
            <AddDTGH />
            <DTGH />
            <div className="myContainer">
                <div className="row container1">
                    <div className="col-lg-3 h-100" id="leftKH">
                        <div className="card" id="formLeft">
                            <div className="h-100 w-100">
                                <div id="sidebar-menu">
                                    <ul className="list-unstyled" id="side-menu">
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span> Nhóm đối tác giao hàng </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 20px' }}>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <select className="form-select myInputNoBorder">
                                                            <option value={0}>Tất cả nhóm</option>
                                                            <option value={1}>Thêm nhóm</option>
                                                            <option value={2}>Nhóm 1</option>
                                                            <option value={3}>Nhóm 2</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <i className="fas fa-edit" />
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Tổng phí giao hàng </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Từ:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="number" defaultValue={0} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Tới:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="number" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Bắt đầu:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="date" placeholder="Ngày sinh" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Kết thúc:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="date" placeholder="Ngày sinh" />
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Nợ hiện tại </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Từ:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="number" defaultValue={0} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Tới:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="number" />
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Lựa chọn hiển thị </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" defaultChecked name="typeKH" />  Tất cả <br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Đang hoạt động<br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Ngưng hoạt động<br />
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Sidebar */}
                            </div>
                            <div className="card-body">
                                <div id="morris-donut-example" className="dash-chart morris-charts text-center" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9" id="rightKH">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h1 className="header-title mb-4"><i className="mdi mdi-menu" style={{ fontSize: '16pt' }} onClick={editMenuKH} />  Đối tác giao hàng</h1>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="dropdown myDropdown myBtn">
                                            <button className="btn btn-primary" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-filter" />
                                                <i className="mdi mdi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" style={{ width: '650%' }}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Mã đối tác
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tên đối tác
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Điện
                                                            thoại
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Email
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" />
                                                            Tổng đơn hàng
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Cần thu hộ
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng trọng lượng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Nợ cần trả hiện tại
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng phí giao hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Trạng
                                                            thái
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary myBtn"><i className="fas fa-file-export" /> Export</button>
                                        <button className="btn btn-primary myBtn"><i className="fas fa-file-import" /> Import</button>
                                        <button className="btn btn-primary myBtn" onClick={onModalAddDTGH}><b>+ Thêm đối tác</b></button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                                    <thead>
                                                        <tr>
                                                            <th><input className="form-check-input" type="checkbox" />
                                                            </th>
                                                            <th>Mã đối tác</th>
                                                            <th>Tên đối tác</th>
                                                            <th>Số điện thoại</th>
                                                            <th>Tổng đơn hàng</th>
                                                            <th>Nợ cần trả hiện tại</th>
                                                            <th>Tổng phí giao hàng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="dataTest">
                                                        <tr onClick={onModalDTGH}>
                                                            <td><input className="form-check-input" type="checkbox" />
                                                            </td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
                                                            <td>2011/04/25</td>
                                                            <td>$320,800</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div id="morris-bar-stacked" class="morris-chart-height morris-charts"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NhaVanChuyen
