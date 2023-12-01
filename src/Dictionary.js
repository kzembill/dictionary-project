import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
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
        <div className="Results">
          <section>
            <h1>sunset</h1>
            <div className="Phonetics">
              <h2>suhn-set</h2>
            </div>
          </section>
          <section>
            <div className="Meaning">
              <h3>noun</h3>
              <p>the time in the evening at which the sun begins to fall below the horizon</p>
            </div>
            <div className="Synonyms">
              <strong>Similar:</strong>
              <ul>
                <li>
                  sundown
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="Meaning">
              <h3>adjective</h3>
              <p>of a declining indistry or technology</p>
              <em>sunset industries</em>
            </div>
          </section>
       
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}