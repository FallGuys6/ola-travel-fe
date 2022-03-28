import React from 'react';

function SubmenuUser(props) {

    return (
        <div className='submenu'>
            <div className="submenu__user--triangle"></div>
            <div className='submenu__user'>
                <div className="submenu__user--inner">
                    <div className="submenu__user--your-information">
                        <h3>THÔNG TIN CỦA BẠN</h3>
                        <span className='submenu__user--item'>Tài Khoản</span>
                        <span className='submenu__user--item'>Yêu Thích</span>
                        <span className='submenu__user--item'>Tour đã đặt</span>
                        <h3>QUẢN LÝ</h3>
                        <span className='submenu__user--item'>Danh Sách Công Ty</span>
                        <span className='submenu__user--item'>Danh Sách Tour</span>
                        <span className='submenu__user--item'>Đăng Xuất</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SubmenuUser;


