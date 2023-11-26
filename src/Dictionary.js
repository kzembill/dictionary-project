import React, { useState } from "react"; 
import axios from "axios";
import "./Dictionary.css";



export default function Dictionary () {
    let [keyword, setKeyword] = useState("");


    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        
    let apiUrl = 'https://api.shecodes.io/dictionary/v1/define?word={keyword}&key={a56bd14t7ad00f6eo465f0e67d3dc8fa}';
    console.log(apiUrl);
    axios.get(api.Url).then(handleResponse);
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