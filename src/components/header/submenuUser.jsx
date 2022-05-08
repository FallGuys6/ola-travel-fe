import React from 'react';

import { userConstants as AC } from '@constants/user';
import {setLocalStorage, removeLocalStorage} from '@utils/helpers';
const yourInformation = [
  {
    display: 'Tài Khoản',
    path: '#',
  },
  {
    display: 'Yêu Thích',
    path: '#',
  },
  {
    display: 'Tour đã đặt',
    path: '#',
  },
];

const manage = [
  {
    display: 'Danh Sách Công Ty',
    path: '#',
  },
  {
    display: 'Danh Sách Tour',
    path: '#',
  },
];

function SubmenuUser(props) {
  const { isLogged } = props;



  return (
    <div className="submenu">
      <div className="submenu__user--triangle"></div>
      <div className="submenu__user">
        <div className="submenu__user--box">
          <h3>THÔNG TIN CỦA BẠN</h3>
          {yourInformation.map((e, i) => (
            <a href={e.path} key={i} className="submenu__user--item">
              {e.display}
            </a>
          ))}
        </div>
        {!isLogged?.roles === 2 && (
          <div className="submenu__user--box">
            <h3>QUẢN LÝ</h3>
            {manage.map((e, i) => (
              <a href={e.path} key={i} className="submenu__user--item">
                {e.display}
              </a>
            ))}
          </div>
        )}

        <div className="submenu__user--box">
          <p onClick={()=>props.logout(true)} className="submenu__user--item">
            Đăng xuất
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubmenuUser;
