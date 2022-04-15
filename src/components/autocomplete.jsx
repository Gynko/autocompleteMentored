import "./autocomplete.styles.css";
import { useEffect, useState } from "react";
import { countries } from "../data/countryList.js";

function Autocomplete() {
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState([]);

  function onEnteringInput(event) {
    setTyped(event.target.value);
  }

  useEffect(() => {
    if (typed !== "") search(typed);
    else if (typed === "") setResults([]);
  }, [typed]);

  function search(input) {
    var regexLiteral = new RegExp(`^${input.toLowerCase()}`);
    var matches = [];
    var gotFirstMatch = false;
    // Looping until getting a match
    for (let i = 0; i < countries.length; i++) {
      if (regexLiteral.test(countries[i].toLowerCase()) === true) {
        matches.push(countries[i]);
        gotFirstMatch = true;
      } else if (
        regexLiteral.test(countries[i].toLowerCase()) === false &&
        gotFirstMatch === true
      ) {
        setResults(matches);
        return;
      }
    }
  }

  function renderResults() {
    if (results.length > 0)
      return (
        <ul className="autocomplete-list">
          {results.length > 0
            ? results.map((entries, index) => (
                <li key={`${index}${entries}`}>{entries}</li>
              ))
            : null}
        </ul>
      );
    else return null;
  }

  return (
    <form autoComplete="off" id="countryForm">
      <div className="autocomplete">
        <input
          type="text"
          className="autocomplete-input"
          placeholder="Country"
          onChange={onEnteringInput}
        />
        <div className="autocomplete-items">{renderResults()}</div>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Autocomplete;
