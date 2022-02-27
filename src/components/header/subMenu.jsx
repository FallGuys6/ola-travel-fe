import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Avatar, Typography, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, HeartOutlined, ScanOutlined, LogoutOutlined, TeamOutlined, ProfileOutlined, ScheduleOutlined } from '@ant-design/icons';
import { SliceString } from '@utils/helpers';
import AvatarTu from '@assets/images/avatar.jpg';
const { Title, Text } = Typography;
const { SubMenu } = Menu;

export const SubMenuUser = ({ dataUser }) => {
  return (
    <React.Fragment>
      <div className="subMenu__User">
        <Avatar size={42} src={dataUser.avatar || AvatarTu} alt={dataUser.avatar || AvatarTu} icon={<UserOutlined />} gap={8} crossOrigin="anonymous" />
        <Title level={5} className="email" ellipsis={true}>
          {SliceString(dataUser.email || 'tunguyenhoangminh1401@gmail.com', 14)}
        </Title>
        <div className="modal__User">
          <div className="modal__User--top">
            <Tooltip placement="right" title={dataUser.fullName || 'Nguyễn Hoàng Minh Tú'}>
              <Title className="hello__User" level={5} ellipsis={true}>
                Xin chào: {dataUser.fullName || 'Nguyễn Hoàng Minh Tú'}
              </Title>
            </Tooltip>
            <div className={`roles ${dataUser.roles === 'admin' ? 'isSupperAdmin' : 'isUser'}`}>{dataUser.roles === 'admin' ? 'Supper admin' : 'User'}</div>
          </div>
          <div className="modal__User--body">
            <Title ellipsis={true} level={5} className="title--info">
              Thông Tin Tài Khoản
            </Title>
            <div className="subRouter--info">
              <Link to={`/user/${dataUser.id || ''}`} className="linkTo---info">
                <UserOutlined />
                <span>Tài Khoản Của Tôi</span>
              </Link>
            </div>
            <div className="subRouter--info">
              <Link to={`/my-tour/${dataUser.id || ''}`} className="linkTo---info">
                <HeartOutlined />
                <span>Tour Yêu Thích</span>
              </Link>
            </div>
            <div className="subRouter--info">
              <Link to={`/my-booking/${dataUser.id || ''}`} className="linkTo---info">
                <ScanOutlined />
                <span>Tour Đã Đặt</span>
              </Link>
            </div>
          </div>
          {dataUser.roles === 'admin' ? (
            <div className="modal__User--body">
              <Title ellipsis={true} level={5} className="title--info">
                Quản Lý
              </Title>
              <div className="subRouter--info">
                <Link to={`/business/`} className="linkTo---info">
                  <ProfileOutlined />
                  <span>Danh Sách Công Ty</span>
                </Link>
              </div>
              <div className="subRouter--info">
                <Link to={`/list-user/`} className="linkTo---info">
                  <TeamOutlined />
                  <span>Danh Sách Khách Hàng</span>
                </Link>
              </div>
              <div className="subRouter--info">
                <Link to={`/all-tour/`} className="linkTo---info">
                  <ScheduleOutlined />
                  <span>Danh Sách Tour</span>
                </Link>
              </div>
            </div>
          ) : null}
          <div className="modal__User--footer">
            <div className="subRouter--info">
              <Link to={`/logout/${dataUser.id || ''}`} className="linkTo---info">
                <LogoutOutlined />
                <span>Đăng Xuất</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
