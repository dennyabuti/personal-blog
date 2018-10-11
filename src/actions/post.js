import axios from 'axios';

import { FETCH_POSTS } from '../constants/post';

const apiBaseUrl = `https://public-api.wordpress.com/rest/v1.1/sites/dennisnyabuti.wordpress.com/posts/`;

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts,
  }
}

export const requestPosts = () => {
  return (dispatch) => {
    axios.get(apiBaseUrl)
      .then(({ data }) => dispatch(fetchPosts(data.posts)))
      .catch(err => {
        throw(err);
      });
  }
}
