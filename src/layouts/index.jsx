import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '@components/header/header';
const { Header, Footer, Content  } = Layout;



const LayoutAllPages = ({ childrenComponent, className }) => {
  return (
    <React.Fragment>
      <Layout style={typeof window === 'undefined' ? { display: 'none' } : {}}>
        <Header style={{"maxHeight":"161px", "background":"#090D48", "padding":"0", "height":"auto"}}>
          <HeaderComponent/>
        </Header>
        <Content>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </React.Fragment>
  );
};



export default LayoutAllPages;
