import React, {useState} from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
export const SearchBar = ()=>{
    const [input, setInput] = useState("");

    const fetchData = (value) =>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((json)=> { //this link holds results for search bar
          const results = json.filter((user)=>{
            return 
            value &&
            user && 
            user.name  && 
            user.name.toLowerCase().includes(value)
          });
          console.log(results);
    });
};

    const handleChange =(value)=>{
        setInput(value);
        fetchData(value);
    }

    return (
    <div className = "input-wrapper">
        <FaSearch id = "search-icon"/>
        <input placeholder = "type to search..."
        value = {input} 
        onChange= {(e) => setInput(e.target.value)}
        />
    </div>
    );
    };

    export default SearchBar;