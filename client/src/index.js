import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskStore from './store/TaskStore';
import UserStore from './store/UserStore';
import jQuery from 'jquery'
import './scss/custom.css'

export const Context = createContext();

jQuery.htmlPrefilter = function( html ) {
	return html;
};

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      tasks: new TaskStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


