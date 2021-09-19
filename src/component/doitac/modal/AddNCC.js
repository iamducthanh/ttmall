import React from 'react'

const AddNCC = () => {
    function closeModalAddNCC() {
        document.getElementById('tabAddNCC').style.display = 'none'
    }
    return (
        <div className="swal2-container swal2-center swal2-backdrop-show" style={{ overflowY: 'auto', display: 'none' }} id="tabAddNCC">
            <div aria-labelledby="swal2-title" id="thanh1" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{ display: 'flex', width: '80%' }}>
                <button type="button" className="swal2-close" onClick={closeModalAddNCC}>×</button>
                <div className="head">
                    <h5>Thêm nhà cung cấp</h5>
                </div>
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
                            <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Điện thoại:</label>
                            <div className="col-sm-8">
                                <input className="form-control myInputNoBorder" type="text" placeholder="Điện thoại" />
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Địa chỉ:</label>
                            <div className="col-sm-8">
                                <textarea className="form-control myInputNoBorder" name id cols={30} rows={3} defaultValue={""} />
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
                    <div className="col-lg-6">
                        <div className="row">
                            <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Email:</label>
                            <div className="col-sm-8">
                                <input className="form-control myInputNoBorder" type="text" placeholder="Email" />
                            </div>
                        </div>
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
                            <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ghi chú:</label>
                            <div className="col-sm-8">
                                <textarea className="form-control myInputNoBorder" name id cols={30} rows={5} defaultValue={"Ghi chú"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerAddHH" style={{ textAlign: 'right' }}>
                    <button className="btn btn-primary" style={{ backgroundColor: '#4bac4d', border: 'none' }}><i className="fas fa-user-check" />  Lưu</button>
                    <button className="btn btn-primary" style={{ backgroundColor: '#656565', border: 'none' }} onClick={closeModalAddNCC}><i className="fas fa-ban" />  Bỏ qua</button>
                </div>
            </div>
        </div>

    )
}

export default AddNCC
