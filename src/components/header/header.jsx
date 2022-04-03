import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Icon from '@ant-design/icons';
import OlaModal from '@components/common/modal/modalFrom';
import Logo from '@assets/images/logo-ola.jpg';
import { ReactComponent as IconCart } from '@assets/images/icon-cart.svg';
import { ReactComponent as IconBell } from '@assets/images/icon-bell.svg';
import { ReactComponent as IconUser } from '@assets/images/icon-user.svg';
import { ReactComponent as IconDown } from '@assets/images/icon-down.svg';

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

const HeaderComponent = ({infoUser, infoBusiness}) => {
  const [notification, setNotification] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

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

  return (
    <React.Fragment>
    <OlaModal
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
      />
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
                    <a href=".">
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
                  <li onClick={handleClickUser}>
                    <p>
                      <Icon component={IconUser} className="icon--menu"/>
                      <Icon component={IconDown} className="icon--menu"/>
                    </p>
                  </li>
                </ul>
                <PopupLogin activeModal={handleActiveModal} />
              </div>
            </div>
          </div>
        </div>
      </Layout.Header>
    </React.Fragment>
  );
};

export default HeaderComponent;
