// Libraries
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Material UI Components
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

// Helpers
import { IMovie, AppContext } from '../Provider/DataProvider';
import useDebounce from './hooks/useDebounce';

// Stylesheet
import './SearchBar.scss';

export const SearchBar: React.FC<{}> = () => {
  const { setSearchResult, setSearchKeyword, setNoResult } = useContext(
    AppContext
  );

  const [input, setInput] = useState('');
  const [term, setTerm] = useState('');

  const searchTerm = useDebounce(input, 200);

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?s=${term}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then(res => {
        setSearchKeyword(term);

        const movieResult: IMovie[] = res.data.Search;

        if (!movieResult) {
          setSearchResult([]);
          setNoResult(true);
          return;
        }

        setSearchResult(movieResult);
        setNoResult(false);
      });
  }, [term, setSearchResult, setSearchKeyword, setNoResult]);

  useEffect(() => {
    const trimmedTerm = searchTerm.trim();
    setTerm(trimmedTerm);
  }, [searchTerm]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const handleSearchIcon = () => {
    document.getElementById('search-input')?.focus();
  };

  const handleClearIcon = () => setInput('');

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar--icon">
        <SearchIcon onClick={handleSearchIcon} />
      </span>
      <input
        id="search-input"
        className="search-bar--input"
        placeholder="Enter a movie title"
        value={input}
        onChange={event => setInput(event.target.value)}
        onFocus={handleFocus}
      ></input>
      <span className="search-bar--icon">
        <ClearIcon onClick={handleClearIcon} />
      </span>
    </form>
  );
};

export default SearchBar;
