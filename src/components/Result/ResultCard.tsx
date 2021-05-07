// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';
import ResultCardList from './ResultCardList';

// Material UI Component
import Card from '@material-ui/core/Card';

// Helper
import { MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './Result.scss';

export const ResultCard: React.FC<{}> = () => {
  const { searchResult, searchKeyword, setSearchResult } = useContext(
    MovieContext
  );

  const searchCTA =
    searchResult && searchResult.length !== 0 ? 'Search Again' : 'Search Now';

  const handleSearch = () => {
    document.getElementById('search-input')?.focus();
  };

  const handleClear = () => setSearchResult([]);

  const cardHeadingBySearch = (search: string) => {
    return search !== '' ? `Result for "${searchKeyword}"` : 'Result';
  };

  return (
    <Card className="result-card">
      <div className="result-card--header">
        <h2>{cardHeadingBySearch(searchKeyword)}</h2>
      </div>
      <ResultCardList />
      <div className="result-card--footer">
        <Button variant="text" link onClick={handleClear}>
          Clear Result
        </Button>
        <Button variant="text" link onClick={handleSearch}>
          {searchCTA}
        </Button>
      </div>
    </Card>
  );
};

export default ResultCard;
