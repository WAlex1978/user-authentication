import { getToken, setToken, removeToken } from './localStorage';

const initState = {
    token: getToken(),
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            setToken(action.token);
            return {
                token: action.token,
            }

        case 'LOG_OUT':
            removeToken();
            return {
                token: null,
            }

        default:
            return state;
    }
}

export default Reducer;