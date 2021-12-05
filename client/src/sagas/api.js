import axios from 'axios'

export const fetchEmployees = () => {
  return axios.get({
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },

    url: 'http://localhost:4000/api/employee',
  })
}
