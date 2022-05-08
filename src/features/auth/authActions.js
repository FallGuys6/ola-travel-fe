import { authenticationConstants as AC } from '@constants/auth';
export const loginAction = (dataPayload)=>{
    // todo: validate params dataPayload fields {type: 'string', email: 'string', password: 'string'}
    if(typeof dataPayload === "undefined") return {
        type: AC.AUTH_LOGIN,
    }
    return {
        type: AC.AUTH_LOGIN,
        payload: dataPayload,
    }
}

export const logoutAction = (dataPayload)=>{
    if(typeof dataPayload === "undefined") return {
        type: AC.AUTH_LOGOUT,
    }
    return {
        type: AC.AUTH_LOGOUT,
        payload: dataPayload,
    }
}