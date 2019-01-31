import axios from 'axios';

import { FETCH_POSTS } from '../constants/post';
import { REACT_APP_WORD_PRESS_API } from '../env';

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts,
  }
}

export const requestPosts = () => {
  return (dispatch) => {
    axios.get(REACT_APP_WORD_PRESS_API)
      .then(({ data }) => dispatch(fetchPosts(data.posts)))
      .catch(err => {
        throw(err);
      });
  }
}
