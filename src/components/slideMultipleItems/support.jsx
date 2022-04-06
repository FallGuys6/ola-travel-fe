import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as IconTick } from '@assets/images/icon-suport-tick.svg';
import { ReactComponent as IconSearch } from '@assets/images/icon-suport-search.svg';
import { ReactComponent as IconChat } from '@assets/images/icon-support-chat.svg';
import { ReactComponent as IconCard } from '@assets/images/icon-suport-credit-card.svg';
function Support(props) {
    return (
        <div className="support">
            <Row>
                <Col span={6}>
                    <div className="support__card">
                        <Icon component={IconTick} className="support__card-icon" />
                        <div className="support__card--inner">
                            <h3>Sản Phẩm chất lượng</h3>
                            <p className='pt100'>Tất cả đối tác và tour điều được, chọn lọc và thẩm định chặc chẽ.</p>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="support__card">
                        <Icon component={IconSearch} className="support__card-icon" />
                        <div className="support__card--inner">
                            <h3>Tìm kiếm, so sánh thông tin thuận tiện</h3>
                            <p>Dễ dàng tìm kiếm, so sánh, lựa chọn sản phẩm phù hợp nhất.</p>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="support__card">
                        <Icon component={IconChat} className="support__card-icon" />
                        <div className="support__card--inner">
                            <h3>Đội ngũ nhân viên nhiệt tình, hỗ trợ 24/7</h3>
                            <p>Chat là có, gọi là nghe, không quản đêm hôm, ngày nghỉ và lễ.</p>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="support__card">
                        <Icon component={IconCard} className="support__card-icon" />
                        <div className="support__card--inner">
                            <h3>Thanh toán dễ dàng, an toàn đa dạng</h3>
                            <p>Hỗ trợ thanh toán trực tuyến qua ví điện tử MOMO... bảo mật an toàn tuyệt đối..</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Support;