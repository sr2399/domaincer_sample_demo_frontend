import { LOG_OUT, SAVE_USER_DATA } from './actionTypes';

export const saveUserLoginData = (data: any) => {
    return {
        type: SAVE_USER_DATA,
        data
    }
}

export const logOutUser = () => {
    return {
        type: LOG_OUT,
    }
}
