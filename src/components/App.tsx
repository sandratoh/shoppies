// Libraries
import { useContext } from 'react';

// Components
import Alert from './Alert';
import NominationCard from './Nomination/NominationCard';
import ResultCard from './Result/ResultCard';
import SearchBar from './SearchBar';

// Helpers
import { MovieContext } from '../Provider/MovieDataProvider';

// Stylesheet
import './App.scss';

export const App: React.FC<{}> = () => {
  const { nominations } = useContext(MovieContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
      </header>
      <main>
        <div className="App-search">
          <h3>Movie title:</h3>
          <SearchBar />
        </div>
        {nominations.length >= 5 && <Alert />}
        <div className="App-cards">
          <ResultCard />
          <NominationCard />
        </div>
      </main>
    </div>
  );
};

export default App;
