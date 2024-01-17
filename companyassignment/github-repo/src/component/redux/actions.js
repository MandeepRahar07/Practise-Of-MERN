import { GET_REQUEST } from "./actiontype";
import axios from 'axios';

export const getrequest = (username) => async (dispatch) => {
  try {
    console.log(username);
    const datafetch = await axios.get(`https://api.github.com/users/${username}/repos`);
    const payload = datafetch.data;
    console.log(payload);
    dispatch({
      type: GET_REQUEST, // Correctly specify the action type
      payload: payload,  // Provide the payload
    });
  } catch (err) {
    console.log(err);
  }
}

