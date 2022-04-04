import React from 'react';


const yourInformation = [
    {
        display: 'Tài Khoản',
        path: '#'
    }, {
        display: 'Yêu Thích',
        path: '#'
    }, {
        display: 'Tour đã đặt',
        path: '#'
    }
]

const manage = [
    {
        display: 'Danh Sách Công Ty',
        path: '#'
    }, {
        display: 'Danh Sách Tour',
        path: '#'
    }
]

function SubmenuUser(props) {

    return (
        <div className='submenu'>
            <div className="submenu__user--triangle"></div>
            <div className='submenu__user'>
                <div className="submenu__user--box">
                    <h3>THÔNG TIN CỦA BẠN</h3>
                    {
                        yourInformation.map((e, i) => (
                            <a href={e.path} key={i} className="submenu__user--item">
                                {e.display}
                            </a>
                        ))
                    }
                </div>
                <div className="submenu__user--box">
                    <h3>QUẢN LÝ</h3>
                    {
                        manage.map((e, i) => (
                            <a href={e.path} key={i} className="submenu__user--item">
                                {e.display}
                            </a>
                        ))
                    }
                </div>
                <div className="submenu__user--box">
                    <a href="#" className="submenu__user--item">Đăng xuất</a>
                </div>
            </div>
        </div>
    );
};

export default SubmenuUser;


