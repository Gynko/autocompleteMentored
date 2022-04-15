import "./autocomplete.styles.css";
import { useEffect, useState, useRef } from "react";
import { countries } from "../data/countryList.js";

function Autocomplete() {
  const [typed, setTyped] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  let refArrayCountries = useRef([]);

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

  function addToRefs(el) {
    if (el && !refArrayCountries.current.includes(el)) {
      refArrayCountries.current.push(el);
    }
  }

  function onClickCountries(index) {
    setSelectedCountry(refArrayCountries.current[index].innerText);
    setResults([]);
  }

  function renderResults() {
    refArrayCountries.current = [];
    if (results.length > 0)
      return (
        <ul className="autocomplete-list">
          {results.length > 0
            ? results.map((entries, index) => (
                <li
                  ref={addToRefs}
                  onClick={() => onClickCountries(index)}
                  key={`${index}${entries}`}
                >
                  {entries}
                </li>
              ))
            : null}
        </ul>
      );
    else return null;
  }

  return (
    <div className="maincontainer">
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
      <p className="country">
        {selectedCountry === ""
          ? "Nothing selected"
          : `Your favourite country is: ${selectedCountry}`}
      </p>
    </div>
  );
}

export default Autocomplete;
