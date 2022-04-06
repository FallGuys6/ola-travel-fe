import React from 'react';
import { Layout } from 'antd';

import HeaderComponent from '@components/header/header';
import FooterComponent from '@components/footer/footer';
import { useViewport } from '@hooks/customHooks';

const LayoutAllPages = ({ childrenComponent = [], className = 'override--layout' }) => {
  const viewPort = useViewport();
  return (
    <React.Fragment>
      <Layout style={typeof window === 'undefined' ? { display: 'none' } : { className }}>
        {viewPort.width >= 992 && <HeaderComponent />}
        <Layout.Content>
          {childrenComponent
            ? childrenComponent.map(({ element: Element }, index) => {
              return (
                <div key={index}>
                  <Element />
                </div>
              );
            })
            : null}
        </Layout.Content>
        <Layout.Footer>
          <FooterComponent />
        </Layout.Footer>
      </Layout>
    </React.Fragment>
  );
};

export default LayoutAllPages;
