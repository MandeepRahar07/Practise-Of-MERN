import { SIGN_UP } from "./actiontype";
import axios from 'axios'

export const postreqsignup = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8080/user`, payload);
    dispatch({ type: SIGN_UP, payload: res.data }); // Dispatch the action
  } catch (err) {
    console.log(err);
  }
}
