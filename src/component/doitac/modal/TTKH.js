import React from 'react'

const TTKH = () => {
    let tabTTKH = document.getElementsByClassName("tabTTKH");
    let headTTKH = document.getElementsByClassName("menuTabKH");
    function closeModalTTKH() {
        document.getElementById('tabTTKH').style.display = 'none'
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
                <div className="tabTTKH" style={{display: 'none'}}>
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
                <div className="tabTTKH" style={{display: 'none'}}>
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
    )
}

export default TTKH
