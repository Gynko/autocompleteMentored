import "./autocomplete.styles.css";
import { useState } from "react";
import { countries } from "../data/countryList.js";

function Autocomplete() {
  const [inputed, setInputed] = useState("");

  function onEnteringInput(event) {
    setInputed(event.target.value);
    search(event.target.value);
  }

  // If first input is G, get all elements of array starting with G
  function search(firstLetter) {
    var results = countries.filter(
      (element) => element[0].toLowerCase() === firstLetter.toLowerCase()
    );
    console.log(results);
  }

  return (
    <form autocomplete="off" id="countryForm">
      <div class="autocomplete">
        <input
          type="text"
          class="autocomplete-input"
          placeholder="Country"
          onChange={onEnteringInput}
        />
        <div class="autocomplete-items">
          <ul class="autocomplete-list">
            <li>{inputed}</li>
          </ul>
        </div>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Autocomplete;
