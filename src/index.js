import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootComponent from './RootComponent';


const element = <h2 className="testReact">Hey React!!</h2>;
ReactDOM.render(
  <RootComponent></RootComponent>,
  document.getElementById('root')
);

