// Component
import SearchButton from './SearchButton';

// Material UI Component
import SearchIcon from '@material-ui/icons/Search';

// Stylesheet
import './SearchBar.scss';

export const SearchBar = () => {
  const handleClick = (): void => {
    console.log('search button clicked');
  };

  return (
    <form className="search-bar">
      <span className="search-bar--icon">
        <SearchIcon />
      </span>
      <input className="search-bar--input"></input>
      <SearchButton onClick={handleClick} />
    </form>
  );
};

export default SearchBar;
