import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Menu from './Menu';
import data from './data/recipes';

const elements = (
  <div>
    <Menu recipes={data}/>
  </div>
);

ReactDOM.render ( elements, document.getElementById ( 'root' ) );

registerServiceWorker ();
