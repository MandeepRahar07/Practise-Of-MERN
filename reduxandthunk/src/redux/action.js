import { GET_SUCCESS } from './actiontype';
import axios from 'axios';

export const getsuccess = (sortOrder) => {
 return async (dispatch) =>{
    try {
        console.log(sortOrder);
        
        const response = await axios.get(` http://localhost:3000/mandy?_sort=age&_order=${sortOrder}`);

        dispatch({
          type: GET_SUCCESS,
          payload: { data : response.data, sortOrder }
        });
      } catch (error) {
        console.error(error);
      }
 }
};
