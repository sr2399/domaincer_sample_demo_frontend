import { LOG_OUT, SAVE_USER_DATA } from '../actions/actionTypes';


const initialState:any = null;

export default function gLoginAuthReducer(state = initialState, action: any) {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case LOG_OUT: return null;
        default: return state;

    }
}