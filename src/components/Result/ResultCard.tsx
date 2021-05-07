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
  const {
    searchResult,
    searchKeyword,
    setSearchResult,
    setSearchKeyword,
  } = useContext(MovieContext);

  const cardFooter = () => {
    const emptyResult = searchResult.length === 0;

    const searchCTA = emptyResult ? 'Search Now' : 'Search Again';

    if (emptyResult) {
      return (
        <Button variant="text" link onClick={handleSearch}>
          {searchCTA}
        </Button>
      );
    }

    return (
      <>
        <Button variant="text" link onClick={handleClear}>
          Clear Result
        </Button>
        <Button variant="text" link onClick={handleSearch}>
          {searchCTA}
        </Button>
      </>
    );
  };

  const handleSearch = () => {
    document.getElementById('search-input')?.focus();
  };

  const handleClear = () => {
    setSearchKeyword('');
    setSearchResult([]);
  };

  const cardHeadingBySearch = (search: string) => {
    return search !== '' ? `Result for "${searchKeyword}"` : 'Result';
  };

  return (
    <Card className="result-card">
      <div className="result-card--header">
        <h2>{cardHeadingBySearch(searchKeyword)}</h2>
      </div>
      <ResultCardList />
      <div className="result-card--footer">{cardFooter()}</div>
    </Card>
  );
};

export default ResultCard;
