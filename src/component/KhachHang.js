import React from 'react'

const KhachHang = () => {
    let tabTTKH = document.getElementsByClassName("tabTTKH");
let headTTKH = document.getElementsByClassName("menuTabKH");
    const onModalAddKH = () => {
        document.getElementById('tabAddKH').style.display = 'unset'
    }
    const onModalTTKH = () => {
        document.getElementById('tabTTKH').style.display = 'unset'
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
    function closeModalTTKH() {
        document.getElementById('tabTTKH').style.display = 'none'
    }
    function closeModalAddKH() {
        document.getElementById('tabAddKH').style.display = 'none'
    }
    function onTabTTKH(index) {
        for (let i = 0; i < tabTTKH.length; i++) {
            if (i == index) {
                headTTKH[i].style.borderBottom = '2px solid #564ab1'
                tabTTKH[i].style.display = 'unset';
            } else {
                headTTKH[i].style.borderBottom = '0px'
                tabTTKH[i].style.display = 'none';
            }
        }
    }
    return (
        <div className="page-content">
            <div>
                <div className="swal2-container swal2-center swal2-backdrop-show" style={{ overflowY: 'auto', display: 'none' }} id="tabTTKH">
                    <div aria-labelledby="swal2-title" id="thanh1" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" style={{ display: 'flex', width: '80%' }}>
                        <button type="button" className="swal2-close" onClick={closeModalTTKH}>×</button>
                        <div className="row" style={{ textAlign: 'center', marginBottom: 20 }}>
                            <div className="col-lg-2 menuTabKH" onClick={onTabTTKH.bind(this, 0)} id="menuTab1">
                                Thông tin</div>
                            <div className="col-lg-3 menuTabKH" onClick={onTabTTKH.bind(this, 1)}>Lịch sử bán trả hàng
                            </div>
                            <div className="col-lg-3 menuTabKH" onClick={onTabTTKH.bind(this, 2)}>Nợ cần thu từ
                                khách
                            </div>
                        </div>
                        <div className="tabTTKH">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img style={{ width: '100%', marginBottom: 30 }} src="https://th.bing.com/th/id/R.9635afcaa4e199c0980ecba1c9224535?rik=ehll7i3Ht4sB3w&pid=ImgRaw&r=0" />
                                </div>
                                <div className="col-lg-5">
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã khách
                                            hàng:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Mã khách hàng" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Tên khách
                                            hàng:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Tên khách hàng" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ngày
                                            sinh:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="date" placeholder="Ngày sinh" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Nhóm
                                            KH:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Nhóm KH" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã số
                                            thuế:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Mã số thuế" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Email:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Facebook:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Facebook" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Số điện
                                            thoại:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Số điện thoại" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Địa
                                            chỉ:</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control myInputNoBorder" cols={30} rows={3} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Khu vực
                                            giao:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Khu vực giao" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Phường
                                            xã:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Phường xã" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Người
                                            tạo</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="text" placeholder="Người tạo" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ngày
                                            tạo:</label>
                                        <div className="col-sm-8">
                                            <input className="form-control myInputNoBorder" type="date" placeholder="Ngày tạo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3" />
                                <div className="col-lg-9">
                                    <textarea className="form-control" style={{ width: '100%' }} cols={30} rows={5} />
                                </div>
                            </div>
                            <div className="footerAddHH" style={{ textAlign: 'right' }}>
                                <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-user-check" />  Cập
                                    nhật</button>
                                <button className="btn btn-primary" style={{ backgroundColor: '#db4e65', border: 'none' }}><i className="fas fa-user-lock" />  Ngừng hoạt
                                    động</button>
                                <button className="btn btn-primary" style={{ backgroundColor: '#db4e65', border: 'none' }}><i className="fas fa-user-slash" />  Xóa</button>
                            </div>
                        </div>
                        <div className="tabTTKH">
                            <table className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Mã hóa đơn</th>
                                        <th>Thời gian</th>
                                        <th>Người bán</th>
                                        <th>Tổng cộng</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="footerAddHH" style={{ textAlign: 'right' }}>
                                <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }}><i className="fas fa-file-export" />  Xuất file</button>
                            </div>
                        </div>
                        <div className="tabTTKH">
                            <table className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Mã phiếu</th>
                                        <th>Thời gian</th>
                                        <th>Loại</th>
                                        <th>Giá trị</th>
                                        <th>Dư nợ khách hàng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="footerAddHH" style={{ textAlign: 'right' }}>
                                <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-cog" />  Điều chỉnh</button>
                                <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-calculator" />  Thanh toán</button>
                                <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }}><i className="fas fa-file-export" />  Xuất file công nợ</button>
                                <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }}><i className="fas fa-file-export" />  Xuất file</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swal2-container swal2-center swal2-backdrop-show" style={{ overflowY: 'auto', display: 'none' }} id="tabAddKH">
                    <div aria-labelledby="swal2-title" id="thanh1" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" style={{ display: 'flex', width: '90%' }}>
                        <button type="button" className="swal2-close" onClick={closeModalAddKH}>×</button>
                        <div className="head">
                            <h5>Thêm khách hàng</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <img width="100%" src="https://th.bing.com/th/id/R.9635afcaa4e199c0980ecba1c9224535?rik=ehll7i3Ht4sB3w&pid=ImgRaw&r=0" />
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã khách hàng:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Mã khách hàng" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Tên khách hàng:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Tên khách hàng" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Điện thoại:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Điện thoại" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ngày sinh:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="date" placeholder="Ngày sinh" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Giới tính:</label>
                                    <div className="col-sm-8">
                                        <input className="form-check-input" type="radio" defaultChecked name="gioiTinh" /> <p className="font-size-14" style={{ display: 'inline' }}>Nam</p>
                                        <input className="form-check-input" type="radio" name="gioiTinh" /> <p className="font-size-14" style={{ display: 'inline' }}>Nữ</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Địa chỉ:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Địa chỉ" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Khu vực:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Khu vực" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Phường xã:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Phường xã" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Loại khách:</label>
                                    <div className="col-sm-8">
                                        <input className="form-check-input" type="radio" defaultChecked name="type" /> <p className="font-size-14" style={{ display: 'inline' }}>Cá nhân</p>
                                        <input className="form-check-input" type="radio" name="type" /> <p className="font-size-14" style={{ display: 'inline' }}>Công ty</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã số thuế:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Mã số thuế" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Email:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Facebook:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Facebook" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Nhóm:</label>
                                    <div className="col-sm-8">
                                        <input className="form-control myInputNoBorder" type="text" placeholder="Nhóm" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ghi chú:</label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control myInputNoBorder" cols={30} rows={5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footerAddHH" style={{ textAlign: 'right' }}>
                            <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-user-check" />  Lưu</button>
                            <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }} onClick={closeModalAddKH}><i className="fas fa-ban" />  Bỏ qua</button>
                        </div>
                    </div>
                </div></div>


            <div className="myContainer">
                <div className="row container1">
                    <div className="col-lg-3 h-100" id="leftKH">
                        <div className="card" id="formLeft">
                            <div className="h-100 w-100">
                                <div id="sidebar-menu">
                                    <ul className="list-unstyled" id="side-menu">
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span> Nhóm khách hàng </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 20px' }}>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <select className="form-select myInputNoBorder">
                                                            <option>Chọn nhóm khách hàng</option>
                                                            <option value="1">Thêm nhóm</option>
                                                            <option value="2">Nhóm 1</option>
                                                            <option value="3">Nhóm 2</option>
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
                                                <span>Ngày tạo </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <div className="row">
                                                    <label className="col-sm-4 col-form-label font-size-14">Bắt đầu:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="date" placeholder="Ngày sinh" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label className="col-sm-4 col-form-label font-size-14">Kết thúc:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="date" placeholder="Ngày sinh" />
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Người tạo </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <select className="form-select myInputNoBorder">
                                                    <option>Chọn người tạo</option>
                                                    <option value="2">Người 1</option>
                                                    <option value="3">Người 2</option>
                                                </select>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Tổng bán </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <div className="row">
                                                    <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Từ:</label>
                                                    <div className="col-sm-8">
                                                        <input className="form-control myInputNoBorder" type="number"/>
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
                                                        <input className="form-control myInputNoBorder" type="number" />
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
                                                <span>Loại khách hàng </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" defaultChecked name="typeKH" />  Tất cả <br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Công ty<br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Cá nhân<br />
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="has-arrow waves-effect">
                                                <span>Giới tính </span>
                                            </a>
                                            <ul className="sub-menu" style={{ padding: '0 10px 0 30px' }}>
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" defaultChecked name="typeKH" />  Tất cả <br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Nam<br />
                                                <input className="form-check-input" style={{ marginBottom: 10 }} type="radio" name="typeKH" />  Nữ<br />
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
                                            khách hàng</h1>
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
                                                            khách hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tên
                                                            khách hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Loại
                                                            khách
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Điện
                                                            thoại
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Nhóm
                                                            khách hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Giới
                                                            tính
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ngày
                                                            sinh
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Email
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" />
                                                            Facebook
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Công ty
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Mã số
                                                            thuế
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Địa chỉ
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Khu vực
                                                            giao hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" />
                                                            Phường/Xã
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Người
                                                            tạo
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ngày
                                                            tạo
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ghi chú
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Ngày
                                                            giao dịch chuỗi
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Nợ hiện
                                                            tại
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng
                                                            bán
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Tổng
                                                            bán trừ hàng
                                                        </div>
                                                        <div className="loc">
                                                            <input className="form-check-input" type="checkbox" /> Trạng
                                                            thái
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary myBtn" onClick={onModalAddKH}><b>+</b></button>
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
                                                            <th>Mã khác hàng</th>
                                                            <th>Tên khách hàng</th>
                                                            <th>Điện thoại</th>
                                                            <th>Nợ hiện tại</th>
                                                            <th>Tổng bán</th>
                                                            <th>Tổng bán trừ trả hàng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="dataTest">
                                                        <tr onClick={onModalTTKH}>
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

export default KhachHang

