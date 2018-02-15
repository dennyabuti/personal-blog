import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import 'typeface-roboto'
// import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
