import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Menu from './Menu';
import data from './data/recipes';
import Summary from './components/Summary';

//ReactDOM.render(<Menu recipes={data}/>, document.getElementById('root'));


ReactDOM.render(<Summary />,
  document.getElementById('root'));
registerServiceWorker();
