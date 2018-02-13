import axios from 'axios';
import { convertNodeToElement } from 'react-html-parser';

const apiBaseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/dennisnyabuti.wordpress.com/posts/';
// const apiBaseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/agelgel84.wordpress.com/posts/';
export const fetchPosts = (callback) => {
  axios.get(apiBaseUrl)
    .then(({ data }) => callback(null, data))
    .catch(err => callback(err));
}

export const transform = (node, index) => {
  if (node.type === 'tag' && node.name === 'a') {
    node.attribs.target = '_blank';
    return convertNodeToElement(node, index, transform);
  }
  if (node.type === 'tag' && node.name === 'p') {
    node.name = 'p';
    node.attribs.class = 'MuiTypography-root-30 MuiTypography-body1-39 MuiTypography-paragraph-48';
    return convertNodeToElement(node, index, transform);
  }
}