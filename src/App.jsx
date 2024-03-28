import { useState } from "react";
import { SearchField } from "./components/comptesting/SearchField";
import { SearchResultList } from "./components/comptesting/SearchResultList";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
        
            {/* <SearchField setSearchResult = {setSearchResult}/>
        <SearchResultList searchResult = {searchResult}/> */}
            </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
