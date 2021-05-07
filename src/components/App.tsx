// Components
import SearchBar from './SearchBar';

// Stylesheet
import './App.scss';
import NominationCard from './Nomination/NominationCard';
import ResultCard from './Result/ResultCard';

function App() {
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
        <ResultCard />
        <NominationCard />
      </main>
    </div>
  );
}

export default App;
