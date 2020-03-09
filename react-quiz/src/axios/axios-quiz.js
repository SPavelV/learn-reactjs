import axios from 'axios';

export default axios.create( {
  baseURL: 'https://quiz-react-ce508.firebaseio.com/'
})