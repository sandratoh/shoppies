import React, { createContext, useState } from 'react';

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IContext {
  nominations: IMovie[];
  setNominations: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchResult: IMovie[];
  setSearchResult: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<IContext>({} as IContext);

export const DataProvider: React.FC<{}> = props => {
  const [nominations, setNominations] = useState<IMovie[]>([]);

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [open, setOpen] = useState(false);

  const data = {
    nominations,
    setNominations,
    searchResult,
    setSearchResult,
    searchKeyword,
    setSearchKeyword,
    open,
    setOpen,
  };

  // console.log('data', data);

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

export default DataProvider;