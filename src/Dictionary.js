import React, { useState } from "react"; 
import axios from "axios";
import Dictionary from "./Dictionary.css";



export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
      
        
    let apiUrl = 'https://api.shecodes.io/dictionary/v1/define?word={keyword}&key={a56bd14t7ad00f6eo465f0e67d3dc8fa}';
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
    </div>
    );
}