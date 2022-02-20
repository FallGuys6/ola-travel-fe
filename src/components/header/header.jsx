import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Avatar, Typography, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import OImage from '@components/common/oImage';
import Logo from '@assets/images/logo-ola.jpg';
import { SliceString } from '@utils/helpers';
import AvatarTu from '@assets/images/avatar.jpg';
const { Title, Text } = Typography;



const HeaderComponent = props => {
  const [activeMenu, setActiveMenu] = useState('');

  function handleSelectItem(e) {
    console.log(e);
    setActiveMenu(e.key);
  }

  const SubMenuUserInfo = () => {

    return (
      <React.Fragment>
        <div className="subMenu__User">
          <Avatar
            // shape="square"
            size={42}
            src={AvatarTu}
            gap={8}
            crossOrigin="anonymous"
          />
          <Link to="/user/213123123ass" target="_blank">
            <Title level={5} className="email" ellipsis={true}>
              {SliceString('tunguyenhoangminh1401@gmail.com', 14)}
            </Title>
          </Link>
          <div className="modal__User">
            <div className="modal__User--top">
              <Tooltip placement="right" title={'Nguyễn Hoàng Minh Tú'}>
                <Title className="hello__User" level={5} ellipsis={true}>
                  Xin chào: Nguyễn Hoàng Minh Tú
                </Title>
              </Tooltip>
              <div className="roles isSupperAdmin">Supper admin</div>
            </div>
            <div className="modal__User--body">
              <Title ellipsis={true} level={5} className="title--info">
                Thông tin cá nhân
              </Title>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="componentHeader">
        <Row>
          <Col span={24}>
            <div className={`componentHeader__top--TextSlideShow`}>
              <div className="container-1440"></div>
            </div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={24}>
            <div className={`componentHeader__top--navigation`}>
              <div className="container-1440">
                <Row>
                  <Col span={3}>
                    <Link to="/">
                      <div className="componentHeader__top--logo">
                        <OImage className="brand-logo" src={Logo} alt="Logo Olatravel" preview={false} />
                      </div>
                    </Link>
                  </Col>
                  <Col span={21}>
                    <div className="componentHeader__top--menu">
                      <Menu onClick={handleSelectItem} selectedKeys={[activeMenu]} mode="horizontal">
                        <Menu.Item key="home">
                          <Link to="/">Trang Chủ</Link>
                        </Menu.Item>
                        <Menu.Item key="promotion">
                          <Link to="/promotion">Ưu Đãi Cho Hôm Nay</Link>
                        </Menu.Item>
                        <Menu.Item key="news">
                          <Link to="/news">Tin Tức</Link>
                        </Menu.Item>
                        <Menu.Item key="partner">
                          <Link to="/partner">Đối Tác Của Chúng Tôi</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                          <Link to="/about">Liên Hệ Với Doanh Nghiệp</Link>
                        </Menu.Item>
                        {/* <Menu.Item key="login" className="disable--boder">
                          <Link to="/login" className="custom--button-login">
                          <UserOutlined/>
                          Đăng Nhập / Đăng Ký
                          </Link>
                        </Menu.Item> */}
                      </Menu>
                      <SubMenuUserInfo />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;