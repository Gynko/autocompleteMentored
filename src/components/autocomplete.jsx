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
    console.log("typed", typed);
    if (typed !== "") search(typed);
  }, [typed]);

  // If first input is G, get all elements of array starting with G
  // step2: first 2 letters
  function search(input) {
    var regexLiteral = new RegExp(`^${input.toLowerCase()}`);
    var results = countries.filter((element) =>
      regexLiteral.test(element.toLowerCase())
    );
    setResults(results);
    console.log("results", input, results);
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
        <div className="autocomplete-items">
          <ul className="autocomplete-list">
            {results.length > 0
              ? results.map((entries, index) => <li key={index}>{entries}</li>)
              : null}
          </ul>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Autocomplete;
