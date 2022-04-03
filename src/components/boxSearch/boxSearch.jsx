import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Select, Tabs, message, DatePicker, Dropdown } from 'antd';
import moment from 'moment';
import Icon from '@ant-design/icons';
import { ReactComponent as IconBus } from '@assets/images/icon-bus.svg';
import { ReactComponent as IconAirplane } from '@assets/images/icon-airplane.svg';
import { ReactComponent as IconHotel } from '@assets/images/icon-hotel.svg';
import { ReactComponent as IconMoon } from '@assets/images/icon-moon.svg';
import { ReactComponent as IconPing } from '@assets/images/icon-ping.svg';
import { ReactComponent as IconTicket } from '@assets/images/icon-ticket.svg';
import { ReactComponent as IconSearch } from '@assets/images/icon-search.svg';
const { TabPane } = Tabs;
const { Option } = Select;

const initialFormValues = (form, values = {}) => {
  if (!form || !values) return;
  return f.setFieldsValue({
    'tour-in-country': {
      location: values?.location,
      destination: values?.destination,
      gestNumber: values?.gestNumber,
    },
  });
};

const ComponentSeparate = props => {
  return (
    <div className="TimeTotal">
      <div className="setDay">
        <p>
          {props.calculatorDay || 1} <Icon component={IconMoon} />
        </p>
      </div>
    </div>
  );
};

const DropdownSelect = props => {
  return (
    <div className="dropdown-select">
      <div className="dropdown-select__item">
        {/** Tìm kiếm gần đây */}
        <div className="dropdown-select__item--title">
          <h6>Tìm kiếm gần đây</h6>
        </div>
        <div className="dropdown-select__item--content">
          <div className="logo">
            <Icon component={IconPing} />
          </div>
          <div className="location">
            <p>Bà Rịa - Vũng Tàu</p>
            <span>Địa điểm</span>
          </div>
          <div className="totalTours">
            <span>2103</span>
            <Icon component={IconTicket} />
          </div>
        </div>
      </div>
      {/** Địa điểm nổi bật */}
      <div className="dropdown-select__item">
        <div className="dropdown-select__item--title">
          <h6>Địa điểm nổi bật</h6>
        </div>
        <div className="dropdown-select__item--content">
          <div className="logo">
            <Icon component={IconPing} />
          </div>
          <div className="location">
            <p>Bà Rịa - Vũng Tàu</p>
            <span>Địa điểm</span>
          </div>
          <div className="totalTours">
            <span>2103</span>
            <Icon component={IconTicket} />
          </div>
        </div>
        <div className="dropdown-select__item--content">
          <div className="logo">
            <Icon component={IconPing} />
          </div>
          <div className="location">
            <p>Bà Rịa - Vũng Tàu</p>
            <span>Địa điểm</span>
          </div>
          <div className="totalTours">
            <span>2103</span>
            <Icon component={IconTicket} />
          </div>
        </div>
        <div className="dropdown-select__item--content">
          <div className="logo">
            <Icon component={IconPing} />
          </div>
          <div className="location">
            <p>Bà Rịa - Vũng Tàu</p>
            <span>Địa điểm</span>
          </div>
          <div className="totalTours">
            <span>2103</span>
            <Icon component={IconTicket} />
          </div>
        </div>
        <div className="dropdown-select__item--content">
          <div className="logo">
            <Icon component={IconPing} />
          </div>
          <div className="location">
            <p>Bà Rịa - Vũng Tàu</p>
            <span>Địa điểm</span>
          </div>
          <div className="totalTours">
            <span>2103</span>
            <Icon component={IconTicket} />
          </div>
        </div>
      </div>
    </div>
  );
};
const FromSearch = props => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (typeof props.tabsName !== 'undefined') {
      setNameForm(props.tabsName);
    }
  }, [props.tabsName]);

  const handleOnFinish = values => {};

  const showErrorMessage = async () => {
    await message.error('Please check for the error fields!');
  };

  return (
    <React.Fragment>
      <Form form={form} name={'searchTour'} onFinish={handleOnFinish} layout={'inline'} onFinishFailed={showErrorMessage} >
        <Row justify="start" wrap={false} align="middle">
          <Col span={9}>
            <Form.Item label="Địa điểm" name={['searchTour', 'location']} colon={false} className="separate">
              <Dropdown overlay={<DropdownSelect />} placement="bottom" arrow trigger={['click']}>
                <Input placeholder="Thành phố, điểm đến" bordered={false} style={{ width:"100%",height: '40px' }} />
              </Dropdown>
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item label={[<span key={'startDay'}>Ngày đi</span>, <span key={'endDay'}>Ngày về</span>]} className="layout-label separate" name={['searchTour', 'destination']} colon={false}>
              <DatePicker.RangePicker
                style={{ width:"100%",height: '40px' }}
                allowClear={false}
                format={['DD-MM-YYYY', 'DD-MM-YYYY']}
                bordered={false}
                disabledDate={current => current < moment()}
                suffixIcon={null}
                separator={<ComponentSeparate calculatorDay={8} />}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={'Số khách'} name={['searchTour', 'gestNumber']} colon={false}>
              <Select bordered={false} placeholder={'2 người lớn, 1 trẻ em'} suffixIcon={null}>
                <Option value={1}>1 khách</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button type="default" className="button-search" htmlType="submit" style={{width:"90px", height:"56px",backgroundColor: "#2D16FC", borderRadius:"12px"}}>
                <Icon component={IconSearch}/>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

const BoxSearch = props => {
  return (
    <React.Fragment>
      <div className="container__full--boxSearch">
        <div className="container-1200">
          <div className="container-1200__boxSearch">
            <Tabs defaultActiveKey="tour-in-country" centered>
              <TabPane
                tab={
                  <div><Icon component={IconBus} /><span>
                    Du lịch trong nước
                  </span></div>
                }
                key="tour-in-country"
                forceRender={true}
              >
                <FromSearch />
              </TabPane>
              <TabPane
                tab={
                  <div><Icon component={IconAirplane} /><span>
                    Du lịch nước ngoài
                  </span></div>
                }
                key="overseas-tour"
                forceRender={true}
              >
                Coming soon
              </TabPane>
              <TabPane
                tab={
                  <div>
                  <Icon component={IconHotel} />
                  <span> Khách sạn</span>
                  </div>
                }
                key="hotel"
                forceRender={true}
              >
                Coming soon
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BoxSearch;
