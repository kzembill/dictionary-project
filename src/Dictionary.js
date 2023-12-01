import React, { useState } from "react"; 
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";



export default function Dictionary (props) {
        let [keyword, setKeyword] = useState(props.defaultKeyword);
        let [results, setResults] = useState(null);
        let [loaded, setLoaded] = useState(false);
        let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleDictionResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleDictionResponse);
        let apiKey = "a56bd14t7ad00f6eo465f0e67d3dc8fa";
      }
      function handleSubmit(event){
        event.preventDefault();
        search();
      }
    
      function handleKeywordChange(event) {
        setKeyword(event.target.value);
      }
    
      function load() {
        setLoaded(true);
        search();
      }
    
      if (loaded) {
        return (
          <div className="Dictionary">
            <section>
              <h1>What word do you want to look up?</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
              </form>
              <div className="hint">
                suggested words: sunset, wine, yoga, plant...
              </div>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
          </div>
        );
      } else {
        load();
        return "Loading";
      }
    }