import React, { useContext } from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import "./index.css";
import {
  SearchInput,
  SearchInputField,
  SearchLogoContainers,
} from "./styleComponents";
import { NxtwatchContextType, SearchBarProp } from "../../ComponentsTypes";

const SearchBar: React.FC<SearchBarProp> = (props) => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  const { searchValue, onChangeSearch, clearInput } = props;
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearch(e.target.value);
  };
  return (
    <SearchInputField
      darkMode={isDarkMode}
      className="nxtwatch-search-input-field"
    >
      <SearchInput
        placeholder="Search"
        value={searchValue}
        onChange={onChangeInput}
        type="text"
        darkMode={isDarkMode}
      />
      {searchValue.length > 0 && (
        <MdOutlineClear
          className={`nxtwatch-clear-logo ${isDarkMode &&
            "dark-nxtwatch-clear-logo"}`}
          onClick={clearInput}
        />
      )}
      <SearchLogoContainers darkMode={isDarkMode}>
        <BsSearch className="nxtwatch-search-logo" />
      </SearchLogoContainers>
    </SearchInputField>
  );
};

export default SearchBar;
