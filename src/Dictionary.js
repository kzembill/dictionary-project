import React, { useState } from "react"; 
import axios from "axios";
import "./Dictionary.css";



export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
      
        
   let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
   let apiUrl = 'https://api.shecodes.io/dictionary/v1/define?word={keyword}&key={apiKey}';
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