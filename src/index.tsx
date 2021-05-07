// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Helpers
import MovieDataProvider from './Provider/MovieDataProvider';

// Stylesheet
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <MovieDataProvider>
      <App />
    </MovieDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
