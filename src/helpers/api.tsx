import axios from 'axios'

const apiurl = process.env.REACT_APP_API_URL

const getSession = () =>
  axios
    .get(`${apiurl}/api/gamingsession`, {
      headers: { Authorization: 'Basic YWRtaW46b21lbmE=' }
    })
    .then(res => res.data)

export default { getSession }
