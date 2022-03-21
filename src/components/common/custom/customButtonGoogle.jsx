import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { ReactComponent as IconGoogle } from '@assets/images/icon-google.svg';


const CustomButtonGoogle = ({onSuccess, responseGoogle, customClass, textButton},props) =>{
    return(
        <GoogleLogin
            clientId="774238721475-6n8csb4d6iqncn7ip6tcuv79neipjb5u.apps.googleusercontent.com"
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            {...props}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
      <button className={customClass} onClick={renderProps.onClick} disabled={renderProps.disabled}><IconGoogle/><span>{textButton}</span></button>
    )}
        />
    )
}

export default CustomButtonGoogle