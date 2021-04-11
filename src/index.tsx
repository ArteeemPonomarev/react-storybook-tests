import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Select, {ItemType} from './components/Select/Select';

let items: ItemType[] = [{title: 'Artem', value: 1}, {title: 'Sergei', value: 2}, {title: 'Maxim', value: 3}]

ReactDOM.render(
  <React.StrictMode>
    <Select items={items} value={1} onChange={() => {}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
