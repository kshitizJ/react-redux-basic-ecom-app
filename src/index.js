import React from 'react';
import ReactDOM from 'react-dom';
// importing the Provider component which helps to use the store in the application
import { Provider } from 'react-redux';
import App from './App';
// importing the store form the redux folder
import store from './redux/store'

ReactDOM.render(
   <React.StrictMode>
      {/* passing the store as a prop */}
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);
