import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = ()=>{
    return useContext(SearchContext)
}
