import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const notes =[
    {
        id :1,
        content:'hi every one',
        important: true
    },
    {
      id :2,
      content:'welcome every one',
      important: false
  },
  {
    id :3,
    content:'ok guys ',
    important: true
},

  ]
ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes ={notes}/>);
