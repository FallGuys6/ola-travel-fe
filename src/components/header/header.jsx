import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import OImage from '@components/common/oImage';
import Logo from '@assets/images/logo-ola.jpg';
import { useViewport } from '@hooks/customHooks';
import { SubMenuUser } from './subMenu';
const { SubMenu } = Menu;

const HeaderComponent = ({ infoUser }) => {
  const [activeMenu, setActiveMenu] = useState('');
  const [changeIcon, setChangeIcon] = useState(false);
  const { width } = useViewport();
  const isMobile = width <= 768;
  const isTablet = width <= 992;
  const isDesktop = width > 992;

  function handleSelectItem(e) {
    console.log(e);
    setActiveMenu(e.key);
  }

  function handleClickIcon(e) {
    setChangeIcon(!changeIcon);
  }

  return (
    <React.Fragment>
      <div className="componentHeader">
        {isDesktop ? (
          <Row>
            <Col>
              <div className={`componentHeader__top--TextSlideShow`}>
                <div className="container-1440"></div>
              </div>
            </Col>
          </Row>
        ) : null}

        <Row align="middle">
          <Col xs={24} lg={24}>
            <div className={`componentHeader__top--navigation`}>
              <div className="container-1440">
                <Row justify="start" align="middle">
                  {
                    isMobile ? (
                      <Col lg={3} xs={7} style={{ "lineHeight": "30px" }}>
                        <Button type="text" size="large" icon={changeIcon ? <MenuFoldOutlined style={{ "fontSize": "30px", "color": "#213362" }} /> : <MenuUnfoldOutlined style={{ "fontSize": "30px", "color": "#213362" }} />} onClick={handleClickIcon} />
                      </Col>
                    ) : null
                  }
                  <Col lg={3} xs={17}>
                    <Link to="/">
                      <div className="componentHeader__top--logo">
                        <OImage className="brand-logo" src={Logo} alt="Logo Olatravel" preview={false} />
                      </div>
                    </Link>
                  </Col>
                  {/* {
                    isMobile?(
                      <Col lg={3} style={{"lineHeight":"30px"}}>
                      <Button type="text" size="large" icon={<ShoppingCartOutlined style={{"fontSize":"30px","color":"#213362"}} />}/>
                      </Col>
                    ):null
                  } */}
                  {isDesktop ? (
                    <Col span={21}>
                      <div className="componentHeader__top--menu">
                        <Menu onClick={handleSelectItem} selectedKeys={[activeMenu]} mode="horizontal">
                          <Menu.Item key="home">
                            <Link to="/">
                              <span className="componentHeader__top--link">Trang Chủ</span>
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="promotion">
                            <Link to="/promotion">
                              <span className="componentHeader__top--link">Khuyến Mãi</span>
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="news">
                            <Link to="/news">
                              <span className="componentHeader__top--link">Tin Tức</span>
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="partner">
                            <Link to="/partner">
                              <span className="componentHeader__top--link">Đối Tác</span>
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="about">
                            <Link to="/about">
                              <span className="componentHeader__top--link">Liên Hệ</span>
                            </Link>
                          </Menu.Item>
                          {/* <Menu.Item key="login" className="disable--boder">
                            <Link to="/login">
                              <button className='btn bold'>
                                <UserOutlined className='custom--svg' />
                                <span className='bold'>Đăng Nhập</span>
                              </button>
                            </Link>
                          </Menu.Item> */}
                        </Menu>
                        <SubMenuUser dataUser={{
                          roles: 'admin'
                        }} />
                      </div>
                    </Col>
                  ) : null}
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
