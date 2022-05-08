import { userConstants as AC } from '@constants/user';

export const getUserLogged = (idUser) => {
    if(typeof idUser === 'undefined'){
        return {
            type: AC.GET_CURRENT_USER,
        }
    }else{
        return {
            type: AC.GET_CURRENT_USER,
            payload: {id:idUser}
        }
    }
}