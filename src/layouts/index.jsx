import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux'
import { Layout } from 'antd';
import HeaderComponent from '@components/header/header';
import FooterComponent from '@components/footer/footer';

import { useViewport } from '@hooks/customHooks';
import { getInfoUser } from '@features/user/userSelectors';

const LayoutAllPages = ({ childrenComponent = [], className = 'override--layout' }) => {
  const viewPort = useViewport();
  const dispatch = useDispatch();
  
  const service_info_user = useSelector(getInfoUser);

  const [isInfoUser, setIsInfoUser] = useState({});

  useEffect(() => {
    if(service_info_user?.idUser !== ''){
      console.log('service_info_user', service_info_user);
      setIsInfoUser(service_info_user);
    }
    return () => setIsInfoUser({})
  } , [service_info_user]);

  return (
    <React.Fragment>
      <Layout style={typeof window === 'undefined' ? { display: 'none' } : { className }}>
        {viewPort.width >= 992 && <HeaderComponent isLogged={isInfoUser}/>}
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

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

export default connect(mapStateToProps)(LayoutAllPages);
