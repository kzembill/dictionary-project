import React, { useState } from "react"; 
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";



export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
      
        
   let apiKey = "a56bd14t7ad00f6eo465f0e67d3dc8fa";
   let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange=
            {handleKeywordChange} />
        </form>
        {keyword}
        <Results  results={results}/>
    </div>
    );
}