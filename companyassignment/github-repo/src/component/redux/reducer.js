
import { GET_REQUEST } from './actiontype'

const initialState = {
    data: [],
    isLoading: false
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_REQUEST:
            return{
                ...state,
                data : payload,
                isLoding : false
            }
        default:
          return state
        }
}
export default reducer;
