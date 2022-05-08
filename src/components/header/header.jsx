import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Layout, Avatar } from 'antd';
import Icon, { UserOutlined } from '@ant-design/icons';

import { logoutAction } from '@features/auth/authActions';
import OlaModal from '@components/common/modal/modalFrom';
import SubmenuUser from './submenuUser';



import { ReactComponent as IconCart } from '@assets/images/icon-cart.svg';
import { ReactComponent as IconBell } from '@assets/images/icon-bell.svg';
import { ReactComponent as IconUser } from '@assets/images/icon-user.svg';
import { ReactComponent as IconDown } from '@assets/images/icon-down.svg';
import { ReactComponent as IconRight } from '@assets/images/icon-right.svg';
import AvatarUser from '@assets/images/avatar.jpg';
import Logo from '@assets/images/logo-ola.jpg';

const PopupLogin = props => {
  function handleSelectModalLogin() {
    props.activeModal({
      title: '',
      key: 'login',
      active: true,
      widthModal: 410,
    });
  }

  function handleSelectModalRegister() {
    props.activeModal({
      title: '',
      key: 'register',
      active: true,
      widthModal: 410,
    });
  }

  return (
    <React.Fragment>
      <div className="popup--login">
        <span onClick={handleSelectModalLogin}>Đăng nhập</span>
        <span onClick={handleSelectModalRegister}>Đăng ký</span>
      </div>
    </React.Fragment>
  );
};

const HeaderComponent = ({ isLogged, infoBusiness }) => {

  const dispatch = useDispatch();

  const [notification, setNotification] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [showInformation, setShowInformation] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);
  const [user, setUser] = useState('Tú');
  const [dataUser, setDataUser] = useState({});


  useEffect(() => {
    if (typeof isLogged !== 'undefined') {
      setDataUser(isLogged);
    }
  }, [isLogged]);

  function handleClickUser() {
    setShowPopup(!showPopup);
  }

  function handleActiveModal(ObjectModal) {
    setDataModal(ObjectModal);
    setShowModal(ObjectModal?.active);
    setShowPopup(!showPopup);
  }

  function handleCancelModal() {
    setShowModal(false);
  }

  function handleOkModal() {
    setShowModal(false);
  }

  function handleClickAvatar() {
    setShowInformation(!showInformation);
    setIconRotate(!iconRotate);
  }

  function handleLogout(e) {
    if(!e) return
    console.log(e);
    dispatch(logoutAction({refresh:true}));
  }

  return (
    <React.Fragment>
      {
        !dataUser?.idUser && (<OlaModal
        titleModal={dataModal?.title}
        selectModal={dataModal?.key}
        visible={showModal}
        handleCancel={handleCancelModal}
        handleOk={handleOkModal}
        footer={null}
        maskClosable={false}
        width={dataModal?.widthModal}
        centered={true}
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      />)
      }
      <Layout.Header className="container__full--header">
        <div className="container-1200">
          <div className="container-1200__header">
            <div className="header__navigate">
              <div className="navigate__item--logo">
                <img src={Logo} alt="Olatravel-logo" className="logo__element" />
              </div>
              <div className="navigate__item--menu">
                <ul>
                  <li>
                    <a href="">
                      <span>Trang chủ</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Khuyến mãi</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cẩm nang du lịch</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Hợp tác với chúng tôi</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`navigate__item--right ${showPopup ? 'showPopup' : ' '}`}>
                <ul>
                  <li>
                    <p>
                    <Icon component={IconCart} className="icon--menu"/>
                      {notification > 0 && (
                        <div className="count-cart-item">
                          <span>1</span>
                        </div>
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      <Icon component={IconBell} className="icon--menu"/>
                    </p>
                  </li>
                  {
                    !dataUser?.idUser && (<li onClick={handleClickUser}>
                    <p>
                      <Icon component={IconUser} className="icon--menu"/>
                      <Icon component={IconDown} className="icon--menu"/>
                    </p>
                  </li>)
                  }
                  {
                    dataUser?.idUser && (<li onClick={handleClickAvatar}>
                    <p>
                      <Avatar size={20} src={dataUser.avatarUrl} icon={<UserOutlined />} />
                      <span className="nameUser">{user}</span>
                      <Icon
                        component={IconDown}
                        className={`icon--menu ${iconRotate ? 'iconRotate--90' : 'iconRotate-0'}`}
                      />
                    </p>
                  </li>)
                  }
                </ul>
                {
                  !dataUser?.idUser && (<PopupLogin activeModal={handleActiveModal} />)
                }
                {
                  dataUser?.idUser && (<div className={`submenu-user ${showInformation ? 'showInformation' : ''}`}>
                  <SubmenuUser logout={handleLogout} isLogged={dataUser}/>
                </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </Layout.Header>
    </React.Fragment>
  );
};

export default HeaderComponent;
