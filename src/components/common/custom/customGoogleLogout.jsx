import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { ReactComponent as IconGoogle } from '@assets/images/icon-google.svg';
const CustomGoogleLogout = ({onSuccess, responseGoogleLogout, customClass}) =>{
    return( <GoogleLogout
        clientId="774238721475-6n8csb4d6iqncn7ip6tcuv79neipjb5u.apps.googleusercontent.com"
        render={renderProps => (
        <button className={customClass} onClick={renderProps.onClick} disabled={renderProps.disabled}><IconGoogle/><span>Đăng xuất với Google</span></button>
          )}
        onLogoutSuccess={responseGoogleLogout}
      >
      </GoogleLogout>)
}  

export default CustomGoogleLogout