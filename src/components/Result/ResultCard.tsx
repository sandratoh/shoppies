// Libraries
import { useContext } from 'react';

// Components
import Button from '../Button';
import ResultCardList from './ResultCardList';

// Material UI Components
import Card from '@material-ui/core/Card';

// Helpers
import { AppContext } from '../../Provider/DataProvider';

// Stylesheet
import './Result.scss';

export const ResultCard: React.FC<{}> = () => {
  const {
    setNoResult,
    setInput,
    searchResult,
    searchKeyword,
    setSearchResult,
    setSearchKeyword,
  } = useContext(AppContext);

  const cardFooter = (): JSX.Element => {
    const emptyResult = searchResult.length === 0;
    const emptySearch = searchKeyword === '';

    const searchString =
      emptyResult && emptySearch ? 'Search Now' : 'Search Again';

    const searchCTA = (
      <Button variant="text" link onClick={handleSearch}>
        {searchString}
      </Button>
    );

    const clearCTA = (
      <Button variant="text" link onClick={handleClear}>
        Clear Result
      </Button>
    );

    if (emptyResult) {
      return searchCTA;
    }

    return (
      <>
        {clearCTA}
        {searchCTA}
      </>
    );
  };

  const handleSearch = () => document.getElementById('search-input')?.focus();

  const handleClear = () => {
    setNoResult(true);
    setSearchKeyword('');
    setSearchResult([]);
    setInput('');
    handleSearch();
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
