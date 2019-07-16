import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import AppContext, { defaultContext }  from './context';

ReactDOM.render(
  <AppContext.Provider value={defaultContext}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root')
);
