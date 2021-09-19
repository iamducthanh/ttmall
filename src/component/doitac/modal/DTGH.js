import React from 'react'

const DTGH = () => {
    return (
        <div className="swal2-container swal2-center swal2-backdrop-show" style={{ overflowY: 'auto', display: 'none' }} id="tabDTGH">
            <div aria-labelledby="swal2-title" id="thanh1" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{ display: 'flex', width: '80%' }}>
                <button type="button" className="swal2-close" onclick="closeModalDTGH()">×</button>
                <div className="row" style={{ textAlign: 'center', marginBottom: 20 }}>
                    <div className="col-lg-2 menuTabDTGH" onclick="onTabDTGH(0);" id="menuTab1">
                        Thông tin</div>
                    <div className="col-lg-3 menuTabDTGH" onclick="onTabDTGH(1);">Lịch sử giao hàng
                    </div>
                    <div className="col-lg-3 menuTabDTGH" onclick="onTabDTGH(2);">Phí cần trả đối tác giao hàng
                    </div>
                </div>
                <div className="tabDTGH">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Mã đối
                                    tác:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Mã khách hàng" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Tên đối
                                    tác:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Tên khách hàng" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Điện
                                    thoại:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Ngày sinh" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Email:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Địa
                                    chỉ:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Nhóm KH" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Khu vực
                                    giao:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Mã số thuế" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Phường
                                    xã:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Facebook" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-2 col-form-label font-size-14">Nhóm đối
                                    tác:</label>
                                <div className="col-sm-10">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Facebook" />
                                </div>
                            </div>
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
                <div className="tabDTGH">
                    <table className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Mã hóa đơn</th>
                                <th>Mã vận đơn</th>
                                <th>Thời gian</th>
                                <th>Giá trị hoạt động</th>
                                <th>Còn cần thu (COD)</th>
                                <th>Phí trả ĐTGH</th>
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
                        <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-dolly-flatbed" />  Cập nhật giao hàng</button>
                        <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-calculator" />  Thanh toán</button>
                        <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }}><i className="fas fa-file-export" />  Xuất file</button>
                    </div>
                </div>
                <div className="tabDTGH">
                    <table className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Mã phiếu</th>
                                <th>Thời gian</th>
                                <th>Loại</th>
                                <th>Giá trị</th>
                                <th>Nợ cần trả đối tác</th>
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
                        <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }}><i className="fas fa-file-export" />  Xuất file</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DTGH
