import React from 'react'

const VanDon = () => {
    return (
        <div className="page-content">
            <div className="myContainer">
                <div className="row container1">
                    <div className="col-lg-3 h-100" id="leftKH">
                        <div className="card" id="formLeft">
                            <div className="h-100 w-100">
                                <div id="sidebar-menu">
                                    <ul className="list-unstyled" id="side-menu">
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Thời gian tạo </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
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
                                                <span>Thời hoàn thành </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
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
                                                <span>Trạng thái giao hàng </span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Chờ xử lí </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="has-arrow waves-effect" style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Lấy hàng </span>
                                                    </a>
                                                    <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Đang lấy hàng </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Chờ lấy lại </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Đã lấy hàng </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="has-arrow waves-effect" style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Giao hàng </span>
                                                    </a>
                                                    <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Đang giao hàng </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Chờ giao lại </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Giao thành công </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="has-arrow waves-effect" style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Chuyển hoàn </span>
                                                    </a>
                                                    <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Chờ chuyển hoàn </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Đang chuyển hoàn </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a style={{ marginLeft: '-5%' }}>
                                                                <input type="checkbox" className="form-check-input" /> <span>Chờ chuyển hoàn lại </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Đã chuyển khoản </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className style={{ marginLeft: '-5%' }}>
                                                        <input type="checkbox" className="form-check-input" /> <span>Đã hủy </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Đối tác giao hàng </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <select className="form-select myInputNoBorder">
                                                    <option selected>Chọn người giao</option>
                                                    <option value={2}>Người 1</option>
                                                    <option value={3}>Người 2</option>
                                                </select>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Khu vực giao </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <select className="form-select myInputNoBorder">
                                                    <option selected>Chọn khu vực giao</option>
                                                    <option value={2}>Người 1</option>
                                                    <option value={3}>Người 2</option>
                                                </select>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Thu hộ tiền (COD) </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" defaultChecked name="typeKH" />  Tất cả <br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Có COD<br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Không COD<br />
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
                                        <h1 className="header-title mb-4"><i className="mdi mdi-menu" style={{ fontSize: '16pt' }} onclick="editMenuKH();" />  Vận đơn</h1>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="dropdown myDropdown myBtn">
                                            <button className="btn btn-primary" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-filter" />
                                                <i className="mdi mdi-chevron-down" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" style={{ width: '700%' }}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Mã vận đơn
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Thời gian tạo
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Thời gian hoàng thành
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Người tạo
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Mã hóa đơn
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Khách hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Chi nhánh
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Nhân viên bán
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Người nhận
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Điện thoại
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Địa chỉ
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Khu vực
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" />
                                                            Phường xã
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Đối tác giao hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ghi chú giao hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Trạng thái giao hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Dịch vụ
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Cần thu hộ (COD)
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng cước phí
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Mã đối soát
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Phí trả ĐTGH
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ghi chú trạng thái giao hàng
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary myBtn"><i className="fas fa-file-export" /> Export</button>
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
                                                            <th>Mã vận đơn</th>
                                                            <th>Thời gian tạo</th>
                                                            <th>Mã hóa đơn</th>
                                                            <th>Khách hàng</th>
                                                            <th>Nhân viên bán</th>
                                                            <th>Người nhận</th>
                                                            <th>Địa chỉ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="dataTest">
                                                        <tr onclick="onModalTTKH()">
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

export default VanDon
