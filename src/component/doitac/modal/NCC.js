import React from 'react'

const NCC = () => {
    let tabNCC = document.getElementsByClassName("tabNCC");
    let headNCC = document.getElementsByClassName("menuTabNCC");
    function closeModalNCC() {
        document.getElementById('tabNCC').style.display = 'none'
    }
    function onTabNCC(index) {
        for (let i = 0; i < tabNCC.length; i++) {
            if (i == index) {
                headNCC[i].style.borderBottom = '2px solid #564ab1'
                tabNCC[i].style.display = 'unset';
            } else {
                headNCC[i].style.borderBottom = '0px'
                tabNCC[i].style.display = 'none';
            }
        }
    }
    return (
        <div className="swal2-container swal2-center swal2-backdrop-show" style={{ overflowY: 'auto', display: 'none' }} id="tabNCC">
            <div aria-labelledby="swal2-title" id="thanh1" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{ display: 'flex', width: '80%' }}>
                <button type="button" className="swal2-close" onClick={closeModalNCC}>×</button>
                <div className="row" style={{ textAlign: 'center', marginBottom: 20 }}>
                    <div className="col-lg-2 menuTabNCC" onClick={onTabNCC.bind(this, 0)} id="menuTab1">
                        Thông tin</div>
                    <div className="col-lg-3 menuTabNCC" onClick={onTabNCC.bind(this, 1)}>Lịch sử nhập/trả hàng
                    </div>
                    <div className="col-lg-3 menuTabNCC" onClick={onTabNCC.bind(this, 2)}>Nợ cần trả nhà cung cấp
                    </div>
                </div>
                <div className="tabNCC">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã nhà cung cấp:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Mã nhà cung cấp" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Tên nhà cung cấp:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Tên nhà cung cấp" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Địa chỉ:</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control myInputNoBorder" name id cols={30} rows={3} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Khu vực giao hàng:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Khu vực giao hàng" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Phường xã:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Phường xã" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Số điện
                                    thoại:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Số điện thoại" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Email:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Công ty:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Công ty" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã số thuế:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Mã số thuế" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Nhóm nhà cung cấp:</label>
                                <div className="col-sm-8">
                                    <input className="form-control myInputNoBorder" type="text" placeholder="Nhóm nhà cung cấp" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Người tạo:</label>
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
                            <div className="row">
                                <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ghi chú:</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control myInputNoBorder" style={{ width: '100%' }} id cols={30} rows={5} defaultValue={"Ghi chú"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerAddHH" style={{ textAlign: 'right' }}>
                        <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-check-square" />  Cập
                            nhật</button>
                        <button className="btn btn-primary" style={{ backgroundColor: '#db4e65', border: 'none' }}><i className="fas fa-lock" />  Ngừng hoạt
                            động</button>
                        <button className="btn btn-primary" style={{ backgroundColor: '#db4e65', border: 'none' }}><i className="fas fa-archive" />  Xóa</button>
                    </div>
                </div>
                <div className="tabNCC" style={{ display: 'none' }}>
                    <table className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Mã phiếu</th>
                                <th>Thời gian</th>
                                <th>Người tạo</th>
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
                <div className="tabNCC" style={{ display: 'none' }}>
                    <table className="table table-striped table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Mã phiếu</th>
                                <th>Thời gian</th>
                                <th>Loại</th>
                                <th>Giá trị</th>
                                <th>Nợ cần trả</th>
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

export default NCC
