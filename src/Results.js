import React from "react";

export default function Result () {
    if (props.results) {
    return <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function(meaning, index) {
        })}
        </div>;
    } else {
        return null;
    }
}