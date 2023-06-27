import React, { useState } from 'react';
import './App.css';

import RecipeList from './components/RecipeList';

import{SearchBar} from "./components/SearchBar";
import{SearchResultsList} from "./components/SearchResultsList";

const App = () => {

 const[results,setResults] = useState([]);

  return (
  
    <div className="App">
        <h1>Recipes Finder </h1>
        <SearchBar/>
      <div className = "search-bar-container">
      
<SearchResultsList results = {results}/>
     <RecipeList /> 
      </div>
    
    </div>
  );
};

export default App;