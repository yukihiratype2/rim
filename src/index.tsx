import PouchDB from 'pouchdb';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const db = new PouchDB('kittens');

db.info().then((i) => {
  console.log(i);
  db.put({
    _id: Math.random().toString(),
    name: 'random',
  });
});

const remoteDB = new PouchDB('http://admin:admin@localhost:5984/testdb', {});

remoteDB.info().then((i) => {
  console.log('r', i);
});

db.sync(remoteDB, { live: true }).on('change', (e) => {
  console.log(e);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
