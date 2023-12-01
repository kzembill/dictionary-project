import React, { useState } from "react";
import axios from "axios";
import results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [Results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiKey="a56bd14t7ad00f6eo465f0e67d3dc8fa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return(
    <div className="Dictionary">
            <section>
              <form onSubmit={handleSubmit}>
                <label>What word do you want to look up?</label>
                <input
                  type="search"
                  placeholder="Search for a word"
                  defaultValue={props.defaultKeyword}
                  autoFocus={true}
                  className="form-control search-input"
                  onChange={handleKeywordChange}
                />
              </form>
    
    </section>
    <Results results={results}/>
    <Photos photos={photos}/>
    </div>
    );
    }