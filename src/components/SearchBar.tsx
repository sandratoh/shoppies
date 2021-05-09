// Libraries
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Components
import SearchButton from './SearchButton';

// Material UI Components
import SearchIcon from '@material-ui/icons/Search';

// Helpers
import { IMovie, AppContext } from '../Provider/DataProvider';
import useDebounce from './hooks/useDebounce';

// Stylesheet
import './SearchBar.scss';

export const SearchBar: React.FC<{}> = () => {
  const { setSearchResult, setSearchKeyword } = useContext(AppContext);

  const [input, setInput] = useState('');
  const [term, setTerm] = useState('');

  const searchTerm = useDebounce(input, 200);

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?s=${term}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then(res => {
        const movieResult: IMovie[] = res.data.Search;
        if (movieResult) {
          setSearchResult(movieResult);
          setSearchKeyword(term);
        }
      });
  }, [term, setSearchResult, setSearchKeyword]);

  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    setTerm(trimmedTerm);
  }, [searchTerm]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFocus = (event: any) => event.target.select();

  const handleClickIcon = () => {
    document.getElementById('search-input')?.focus();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar--icon">
        <SearchIcon onClick={handleClickIcon} />
      </span>
      <input
        id="search-input"
        className="search-bar--input"
        value={input}
        onChange={event => setInput(event.target.value)}
        onFocus={handleFocus}
      ></input>
      <SearchButton
        onClick={() => console.log('will remove this button soon')}
      />
    </form>
  );
};

export default SearchBar;
