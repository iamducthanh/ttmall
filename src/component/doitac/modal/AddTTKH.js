import React from 'react'

const AddTTKH = () => {
    
    function closeModalAddKH() {
        document.getElementById('tabAddKH').style.display = 'none'
    }
    return (

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
    </div>


    )
}

export default AddTTKH
