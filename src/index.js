import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
// import './index.css';
import 'font-awesome/css/font-awesome.css';
import storeConfig from './store/store'
import App from './App';
import 'typeface-roboto'
// import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';
const store = storeConfig();
ReactDOM.render(
  <Provider store={store}> 
    < App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
