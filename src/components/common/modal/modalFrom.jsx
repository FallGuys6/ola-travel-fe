import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { ReactComponent as IconClose } from '@assets/images/icon-close-modal.svg';
import CustomButtonFacebook from '../custom/customButtonFacebook';
import CustomButtonGoogle from '../custom/customButtonGoogle';

const FromLogin = props => {
  const [formLogin] = Form.useForm();
  const FuncFacebookLogin = useCallback(() => <CustomButtonFacebook customClass="from-login__body-item-button" responseFacebook={handleResponseFacebook} textButton={'Đăng nhập với Facebook'} />, []);
  const FuncGoogleLogin = useCallback(() => <CustomButtonGoogle customClass="from-login__body-item-button" responseGoogle={handleResponseGoogle} textButton={'Đăng nhập với Google'} />, []);

  const initFromLogin = value => {
    formLogin.resetFields();
  };

  const handleOnFinish = values => {
    console.log('Success:', values);
    props.submitOk(true);
    formLogin.resetFields();
  };

  const handleOnFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleResponseFacebook = response => {
    console.log(response);
    if (!response) {
      return;
    }
  };

  const handleResponseGoogle = response => {
    console.log(response);
  };

  const handleClick = e => {
    e.preventDefault();
    let getDataEvent = e.target.getAttribute("data-event-type");
    console.log(getDataEvent);
    props.activeFrom(getDataEvent);
  };

  return (
    <React.Fragment>
      <div className="from-login">
        <div className="from-login__title">
          <span>Đăng nhập</span>
        </div>
        <div className="from-login__body">
          <div className="from-login__body--item">
            <FuncFacebookLogin />
          </div>
          <div className="from-login__body--item">
            <FuncGoogleLogin />
          </div>
          <div className="from-login__body--item" style={{ marginBottom: '0px' }}>
            <div className="from-login__body-item-title">
              <span className="item-title-line"> Hoặc </span>
            </div>
          </div>
          <Form name="olatravel-login" className="olatravel-login" initialValues={{ remember: true }} onFinish={handleOnFinish} onFinishFailed={handleOnFinishFailed} form={formLogin}>
            <Form.Item name="userName" rules={[{ required: true, message: 'Vui lòng nhập email hoặc số điện thoại!' }]}>
              <Input placeholder="Email hoặc số điện thoại" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="olatravel-login-button-submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
          <div className="from-login__body--item">
            <div className="from-login__body-item-title">
              <p onClick={handleClick} data-event-type="forgot-password">Khôi phục mật khẩu</p>
            </div>
          </div>
          <div className="from-login__body--item">
            <div className="from-login__body-item-title">
              <b>
                Bạn chưa có tài khoản? <span onClick={handleClick} data-event-type="register">Đăng ký tài khoản</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const FromRegister = props => {
  const [formRegister] = Form.useForm();
  const FuncFacebookRegister = useCallback(() => <CustomButtonFacebook customClass="from-register__body-item-button" responseFacebook={handleResponseFacebook} textButton={'Đăng ký với Facebook'} />, []);
  const FuncGoogleRegister = useCallback(() => <CustomButtonGoogle customClass="from-register__body-item-button" responseGoogle={handleResponseGoogle} textButton={'Đăng ký với Google'} />, []);

  const initFromRegister = value => {
    formRegister.resetFields();
  };

  const handleOnFinish = values => {
    console.log('Success:', values);
    props.submitOk(true);
    formRegister.resetFields();
  };

  const handleOnFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleResponseFacebook = response => {
    console.log(response);
    if (!response) {
      return;
    }
  };

  const handleResponseGoogle = response => {
    console.log(response);
  };

  const handleClick = e => {
    e.preventDefault();
    let getDataEvent = e.target.getAttribute("data-event-type");
    console.log(getDataEvent);
    props.activeFrom(getDataEvent);
  };

  return (
    <React.Fragment>
      <div className="from-register">
        <div className="from-register__title">
          <span>Đăng ký</span>
        </div>
        <div className="from-register__body">
          <div className="from-register__body--item">
            <FuncFacebookRegister />
          </div>
          <div className="from-register__body--item">
            <FuncGoogleRegister />
          </div>
          <div className="from-register__body--item" style={{ marginBottom: '0px' }}>
            <div className="from-register__body-item-title">
              <span className="item-title-line"> Hoặc </span>
            </div>
          </div>
          <Form name="olatravel-register" className="olatravel-register" initialValues={{ remember: true }} onFinish={handleOnFinish} onFinishFailed={handleOnFinishFailed} form={formRegister}>
            <Form.Item name="emailOrNumberPhone" rules={[{ required: true, message: 'Vui lòng nhập email hoặc số điện thoại!' }]}>
              <Input placeholder="Email hoặc số điện thoại" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="olatravel-register-button-submit">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
          <div className="from-register__body--item">
            <div className="from-register__body-item-title">
              <b>
                Bạn đã có tài khoản? <span onClick={handleClick} data-event-type="login">Đăng nhập</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const FromForgotPassword = props => {
  const [FromForgotPassword] = Form.useForm();
  const handleOnFinish = values => {
    console.log('Success:', values);
    props.submitOk(true);
    FromForgotPassword.resetFields();
  };

  const handleOnFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <React.Fragment>
      <div className="from-forgot-password">
        <div className="from-forgot-password__title">
          <span>Khôi phục mật khẩu</span>
        </div>
        <div className="from-forgot-password__body">
          <div className="from-forgot-password__body--item">
            <div className="from-forgot-password__body-item-title">
              <span>Để đặt lại mật khẩu của mình, hãy nhập email hoặc số điện thoại mà bạn sử dụng để đăng nhập vào hệ thống.</span>
            </div>
          </div>
          <Form name="olatravel-forgot-password" className="olatravel-forgot-password" initialValues={{ remember: true }} onFinish={handleOnFinish} onFinishFailed={handleOnFinishFailed} form={FromForgotPassword}>
            <Form.Item name="emailOrNumberPhone" rules={[{ required: true, message: 'Vui lòng nhập email hoặc số điện thoại!' }]}>
              <Input placeholder="Email hoặc số điện thoại" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="olatravel-forgot-password-button-submit">
                Tiếp tục
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const OlaModal = props => {
  const [selectFrom, setSelectFrom] = useState();
  const [changeFrom , setChangeFrom] = useState();
  function checkFromOk(value) {
    if (value) {
      props.handleOk();
      setSelectFrom();
    }
    return;
  }

  const handleClickCancel =() => {
    props.handleCancel();
    setSelectFrom();
  };

  const handleSelectFrom = value => {
    setSelectFrom(value);
  };

  useEffect(() => {
    if (typeof props?.selectModal !== 'undefined') {
      console.log('Selected from:', props?.selectModal);
      setSelectFrom(props?.selectModal);
    }
    return () => {
      setSelectFrom();
    };
  }, [props?.selectModal]);

  return (
    <React.Fragment>
      <Modal
        forceRender={true}
        getContainer={document.getElementById('root-modal')}
        title={`${props.titleModal && props.titleModal}`}
        destroyOnClose={true}
        {...props}
        wrapClassName={`override-modal-from-${selectFrom||''}`}
        visible={props.visible}
        onCancel={handleClickCancel}
        onOk={props.handleOk}
        closeIcon={<IconClose className="modal__icon-close" />}
      >
        {/* <FromLogin /> */}
        {selectFrom === 'login' && <FromLogin submitOk={checkFromOk} activeFrom={handleSelectFrom} />}
        {/* <FromRegister /> */}
        {selectFrom === 'register' && <FromRegister submitOk={checkFromOk} activeFrom={handleSelectFrom}/>}
        {/* <FromForgotPassword /> */}
        {selectFrom === 'forgot-password' && <FromForgotPassword submitOk={checkFromOk} />}
      </Modal>
    </React.Fragment>
  );
};

export default OlaModal;
