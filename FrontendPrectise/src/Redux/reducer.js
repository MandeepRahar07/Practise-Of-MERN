import React from 'react'
import { SIGN_UP } from './actiontype'

const initialValue = {
    signupdata: [],
}

function reducer(state = initialValue, { type, payload }) {

    switch (type) {
        case SIGN_UP: { // Use the imported action type
            return {
                ...state,
                signupdata: payload
            }
        }

        default:
            return state;
    }
}

export default reducer;
