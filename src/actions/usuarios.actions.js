import axios from "axios"

export const getUsers = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: 'GET_USERS',
    payload: res.data
  })
}