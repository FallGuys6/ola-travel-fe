import React from 'react';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import IconVector from '@assets/images/Vector.png';
import { UserOutlined } from '@ant-design/icons';
import AvatarUser from '@assets/images/avatar.jpg';

function CustomersComment(props) {
    return (
        <div className="container-1200">
            <div className="customersComment">
                <h1 className='title'>Khách hàng nói gì về chúng tôi?</h1>
                <p className='slug'>Đối với Olatravel, nụ cười và sự tin tưởng của các bạn là niềm tự hào của chúng tôi</p>

                <Row>
                    <Col span={8}>
                        <div className='customersComment_card'>
                            <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus quos quo deleniti. Rerum, nulla iusto? Sed optio exercitationem totam ea nisi distinctio, dolores consequatur ex inventore maxime similique eveniet?</p>
                            <div className='customersComment_inner'>
                                <div className="customersComment_info">
                                    <Avatar size="large" src={AvatarUser} icon={<UserOutlined />} />
                                    <div className='customersComment_infoUser'>
                                        <p>David Warner</p>
                                        <span>Tour Đà Nẵng 7 ngày</span>
                                    </div>
                                </div>
                                <img src={IconVector} alt="" />
                            </div>
                        </div>

                    </Col>
                    <Col span={8}>
                        <div className='customersComment_card'>
                            <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus quos quo deleniti. Rerum, nulla iusto? Sed optio exercitationem totam ea nisi distinctio, dolores consequatur ex inventore maxime similique eveniet?</p>
                            <div className='customersComment_inner'>
                                <div className="customersComment_info">
                                    <Avatar size="large" src={AvatarUser} icon={<UserOutlined />} />
                                    <div className='customersComment_infoUser'>
                                        <p>David Warner</p>
                                        <span>Tour Đà Nẵng 7 ngày</span>
                                    </div>
                                </div>
                                <img src={IconVector} alt="" />
                            </div>
                        </div>

                    </Col>
                    <Col span={8}>
                        <div className='customersComment_card'>
                            <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus quos quo deleniti. Rerum, nulla iusto? Sed optio exercitationem totam ea nisi distinctio, dolores consequatur ex inventore maxime similique eveniet?</p>
                            <div className='customersComment_inner'>
                                <div className="customersComment_info">
                                    <Avatar size="large" src={AvatarUser} icon={<UserOutlined />} />
                                    <div className='customersComment_infoUser'>
                                        <p>David Warner</p>
                                        <span>Tour Đà Nẵng 7 ngày</span>
                                    </div>
                                </div>
                                <img src={IconVector} alt="" />
                            </div>
                        </div>

                    </Col>
                    <Col span={8}>
                        <div className='customersComment_card'>
                            <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus quos quo deleniti. Rerum, nulla iusto? Sed optio exercitationem totam ea nisi distinctio, dolores consequatur ex inventore maxime similique eveniet?</p>
                            <div className='customersComment_inner'>
                                <div className="customersComment_info">
                                    <Avatar size="large" src={AvatarUser} icon={<UserOutlined />} />
                                    <div className='customersComment_infoUser'>
                                        <p>David Warner</p>
                                        <span>Tour Đà Nẵng 7 ngày</span>
                                    </div>
                                </div>
                                <img src={IconVector} alt="" />
                            </div>
                        </div>

                    </Col>
                    <Col span={8}>
                        <div className='customersComment_card'>
                            <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus quos quo deleniti. Rerum, nulla iusto? Sed optio exercitationem totam ea nisi distinctio, dolores consequatur ex inventore maxime similique eveniet?</p>
                            <div className='customersComment_inner'>
                                <div className="customersComment_info">
                                    <Avatar size="large" src={AvatarUser} icon={<UserOutlined />} />
                                    <div className='customersComment_infoUser'>
                                        <p>David Warner</p>
                                        <span>Tour Đà Nẵng 7 ngày</span>
                                    </div>
                                </div>
                                <img src={IconVector} alt="" />
                            </div>
                        </div>

                    </Col>
                    <Col span={8}>
                        <div className='customersComment_card'>
                            <p className='comment'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repellendus quos quo deleniti. Rerum, nulla iusto? Sed optio exercitationem totam ea nisi distinctio, dolores consequatur ex inventore maxime similique eveniet?</p>
                            <div className='customersComment_inner'>
                                <div className="customersComment_info">
                                    <Avatar size="large" src={AvatarUser} icon={<UserOutlined />} />
                                    <div className='customersComment_infoUser'>
                                        <p>David Warner</p>
                                        <span>Tour Đà Nẵng 7 ngày</span>
                                    </div>
                                </div>
                                <img src={IconVector} alt="" />
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default CustomersComment;