// Libraries
import { useContext } from 'react';

// Components
import Alert from './Alert';
import Confirm from './Confirm';
import NominationCard from './Nomination/NominationCard';
import ResultCard from './Result/ResultCard';
import SearchBar from './SearchBar';

// Helpers
import { AppContext } from '../Provider/DataProvider';

// Stylesheet
import './App.scss';

export const App: React.FC<{}> = () => {
  const { nominations } = useContext(AppContext);

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
        <div className="App-alert">
          {nominations.length >= 5 && <Alert />}
          <Confirm />
        </div>
        <div className="App-cards">
          <ResultCard />
          <NominationCard />
        </div>
      </main>
    </div>
  );
};

export default App;
