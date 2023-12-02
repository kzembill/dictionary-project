import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <div className="defintion">{props.meaning.definition}</div>
          <br />
          <div className="example"><em>{props.meaning.example}</em></div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}