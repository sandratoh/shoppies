// Component
import SearchButton from './SearchButton';

// Stylesheet
import './SearchBar.scss';

export const SearchBar = () => {
  const handleClick = (): void => {
    console.log('search button clicked');
  };

  return (
    <form className="search-bar">
      <input className="search-bar--input"></input>
      <SearchButton onClick={handleClick} />
    </form>
  );
};

export default SearchBar;
