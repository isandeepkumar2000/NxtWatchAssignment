import React, { useContext, useState } from "react";
import Banner from "../../Components/Banner";
import HeaderNxtwatch from "../../Components/NavBar";
import HomeContent from "../../Components/HomeContact";
import SearchBar from "../../Components/SearchBar";
import SideBar from "../../Components/SideBar";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  HomePage,
  HomePageContent,
  HomePageRightSections,
} from "./styleComponents";
import { NxtwatchContextType } from "../../ComponentsTypes";

export type HomeStyle = {
  darkMode: boolean;
};

const Home = () => {
  const { isDarkMode, showBanner } = useContext<NxtwatchContextType>(
    NxtwatchContext
  );
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };
  const onClearInput = () => {
    setSearchValue("");
  };

  return (
    <>
      <HomePage darkMode={isDarkMode}>
        <HeaderNxtwatch />
        <HomePageContent>
          <SideBar />
          <HomePageRightSections>
            {showBanner && <Banner />}
            <SearchBar
              searchValue={searchValue}
              onChangeSearch={onChangeSearch}
              clearInput={onClearInput}
            />
            <HomeContent searchValue={searchValue} />
          </HomePageRightSections>
        </HomePageContent>
      </HomePage>
    </>
  );
};

export default Home;
