// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Helpers
import DataProvider from './Provider/DataProvider';

// Stylesheet
import './index.scss';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
);
