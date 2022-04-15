import "./autocomplete.styles.css";
import { useEffect, useState } from "react";
import { countries } from "../data/countryList.js";
import { render } from "@testing-library/react";

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

  // If first input is G, get all elements of array starting with G
  // step2: first 2 letters
  function search(input) {
    var regexLiteral = new RegExp(`^${input.toLowerCase()}`);
    var matches = countries.filter((element) =>
      regexLiteral.test(element.toLowerCase())
    );
    setResults(matches);
    if (input !== "") renderResults();
  }

  function renderResults() {
    if (results.length > 0)
      return (
        <ul className="autocomplete-list">
          {results.length > 0
            ? results.map((entries, index) => <li key={index}>{entries}</li>)
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
