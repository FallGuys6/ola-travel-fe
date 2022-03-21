import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { ReactComponent as IconFacebook } from '@assets/images/icon-facebook.svg';


const CustomButtonFacebook = ({ responseFacebook, customClass, textButton },props) =>{
    return (
        <FacebookLogin
            appId="680203450080539"
            callback={responseFacebook}
            cssClass={customClass}
            onFailure={responseFacebook}
            fields="name,email,picture"
            // scope='PublicProfile,email'
            {...props}
            autoLoad={true}
            textButton={<span>{textButton}</span>}
            icon={<IconFacebook />}
        />
    )
}

export default CustomButtonFacebook;