import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getInfoUser } from '@features/user/userSelectors';
import { Layout, Menu, Breadcrumb } from 'antd';
import { toast } from 'react-toastify';

const { Header, Content, Footer } = Layout;
const Admin = () => {
  const service_info_user = useSelector(getInfoUser);
  const [isInfoUser, setIsInfoUser] = useState();

  useEffect(()=>{
    if(service_info_user?.idUser !== ''){
      setIsInfoUser(service_info_user);
    }
    return () => setIsInfoUser({})
  },[service_info_user])

  if(typeof isInfoUser === 'undefined'){
    // toast.warn('Vui lòng đăng nhập để truy cập trang này');
    return <Redirect to="/"/>
  }else{
    return (
      <React.Fragment>
     <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" style={{float:'left', width:'120px',height:'31px',margin:'16px 24px 16px 0',backgroundColor:'rgba(225,225,225,0.2)'}} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380,backgroundColor:'#fff' }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
          
      </React.Fragment>
    )
  }
  
}

export default Admin