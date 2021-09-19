import React from 'react'

const AddDTGH = () => {
    return (
  <div className="swal2-container swal2-center swal2-backdrop-show" style={{overflowY: 'auto', display: 'none'}} id="tabAddDTGH">
  <div aria-labelledby="swal2-title" id="thanh1" aria-describedby="swal2-content" className="swal2-popup swal2-modal swal2-show" tabIndex={-1} role="dialog" aria-live="assertive" aria-modal="true" style={{display: 'flex', width: '70%'}}>
    <button type="button" className="swal2-close" onclick="closeModalAddDTGH()">×</button>
    <div className="head">
      <h5>Thêm đối tác giao hàng</h5>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="row">
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Loại đối
            tác:</label>
          <div className="col-sm-8">
            <input className="form-check-input myInputNoBorder" type="radio" defaultChecked name="type" />
            <p className="font-size-14" style={{display: 'inline'}}>Cá nhân</p>  
            <input className="form-check-input myInputNoBorder" type="radio" name="type" />
            <p className="font-size-14" style={{display: 'inline'}}>Công ty</p>
          </div>
        </div>
        <div className="row">
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Mã đối tác:</label>
          <div className="col-sm-8">
            <input className="form-control myInputNoBorder" type="text" placeholder="Mã đối tác" />
          </div>
        </div>
        <div className="row">
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Tên đối
            tác:</label>
          <div className="col-sm-8">
            <input className="form-control myInputNoBorder" type="text" placeholder="Tên đối tác" />
          </div>
        </div>
        <div className="row">
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Điện thoại:</label>
          <div className="col-sm-8">
            <input className="form-control myInputNoBorder" type="text" placeholder="Điện thoại" />
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
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Nhóm đối
            tác:</label>
          <div className="col-sm-8">
            <input className="form-control myInputNoBorder" type="text" placeholder="Nhóm đối tác" />
          </div>
        </div>
        <div className="row">
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Địa chỉ:</label>
          <div className="col-sm-8">
            <textarea className="form-control myInputNoBorder" name id cols={30} rows={3} defaultValue={"Địa chỉ"} />
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
        <div className="row">
          <label htmlFor="example-text-input" className="col-sm-4 col-form-label font-size-14">Ghi chú:</label>
          <div className="col-sm-8">
            <textarea className="form-control myInputNoBorder" name id cols={30} rows={3} defaultValue={"Ghi chú"} />
          </div>
        </div>
      </div>
    </div>
    <div className="footerAddHH" style={{textAlign: 'right'}}>
      <button className="btn btn-primary" style={{backgroundColor: '#4bac4d', border: 'none'}}><i className="fas fa-user-check" />  Lưu</button>
      <button className="btn btn-primary" style={{backgroundColor: '#656565', border: 'none'}} onclick="closeModalAddDTGH()"><i className="fas fa-ban" />  Bỏ qua</button>
    </div>
  </div>
</div>

    )
}

export default AddDTGH
