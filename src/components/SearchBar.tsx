// Libraries
import { useState } from 'react';

// Component
import SearchButton from './SearchButton';

// Material UI Component
import SearchIcon from '@material-ui/icons/Search';

// Stylesheet
import './SearchBar.scss';

export const SearchBar = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    console.log('search button clicked');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar--icon">
        <SearchIcon />
      </span>
      <input
        className="search-bar--input"
        value={input}
        onChange={event => setInput(event.target.value)}
      ></input>
      <SearchButton onClick={handleClick} />
    </form>
  );
};

export default SearchBar;
