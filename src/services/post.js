import axios from 'axios';
import Typography from 'material-ui/Typography';
import { convertNodeToElement } from 'react-html-parser';

const apiBaseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/dennisnyabuti.wordpress.com/posts/';

export const fetchPosts = (callback) => {
  axios.get(apiBaseUrl)
    .then(({ data }) => callback(null, data))
    .catch(err => callback(err));
}

export const transform = (node, index) => {
  // switch(node.type === 'tag') {
  //   // case node.name === 'p':
  //   //   node.name = 'Typography';
  //   //   console.log(node);
  //   //   // node.attribs.paragraph = true;
  //   //   break;
  //   case node.name = 'a':
  //     node.attribs.target = '_blank';
  //     break;
  //   default:
  //     break;
  // return convertNodeToElement(node, index, transform);
  // }
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