import React from 'react'
import AddNCC from './modal/AddNCC';
import NCC from './modal/NCC';

const NhaCungCap = () => {
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
    function onModalAddNCC() {
        document.getElementById('tabAddNCC').style.display = 'unset'
    }
    function onModalNCC() {
        document.getElementById('tabNCC').style.display = 'unset'
    }
    return (
        <div className="page-content">
            <NCC/>
            <AddNCC/>
            <div className="myContainer">
                <div className="row container1">
                    <div className="col-lg-3 h-100" id="leftKH">
                        <div className="card" id="formLeft">
                            <div className="h-100 w-100">
                                <div id="sidebar-menu">
                                    <ul className="list-unstyled" id="side-menu">
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span> Nhóm nhà cung cấp</span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 20px' }}>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <select className="form-select myInputNoBorder">
                                                            <option selected>Chọn nhóm nhà cung cấp</option>
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
                                                <span>Tổng mua </span>
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
                                                <span>Trạng thái </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" defaultChecked name="typeKH" />  Tất cả <br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Đang hoạt động<br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Ngừng hoạt động<br />
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
                                        <h1 className="header-title mb-4"><i className="mdi mdi-menu" style={{ fontSize: '16pt' }} onClick={editMenuKH} />  Danh sách
                                            nhà cung cấp</h1>
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
                                                            <input className="form-check-input" type="checkbox" /> Mã
                                                            nhà cung cấp
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tên
                                                            nhà cung cấp
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Nhóm nhà cung cấp
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Email
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Địa chỉ
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Khu vực giao hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Phường xã
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Công ty
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ghi chú
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Mã số thuế
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> người tạo
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ngày
                                                            tạo
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Nợ cần trả hiện tại
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng mua
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng mua trừ trả hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Trạng
                                                            thái
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary myBtn" onClick={onModalAddNCC}><b>+</b></button>
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
                                                            <th>Mã nhà cung cấp</th>
                                                            <th>Tên nhà cung cấp</th>
                                                            <th>Email</th>
                                                            <th>Nợ cần trả hiện tại</th>
                                                            <th>Tổng mua</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="dataTest">
                                                        <tr onClick={onModalNCC}>
                                                            <td><input className="form-check-input" type="checkbox" />
                                                            </td>
                                                            <td>Tiger Nixon</td>
                                                            <td>System Architect</td>
                                                            <td>Edinburgh</td>
                                                            <td>61</td>
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

export default NhaCungCap
