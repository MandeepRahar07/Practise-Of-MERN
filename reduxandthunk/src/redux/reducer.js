import React from 'react';
import { GET_SUCCESS } from './actiontype';

const initialValue = {
  data: [],
  sortOrder : ""
};

function reducer(state = initialValue, { type, payload }) {
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        data:  payload.data,
        sortOrder : payload.sortOrder
      };

    
    default:
      return state; // Return the current state in the default case
  }
}

export default reducer;
