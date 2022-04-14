import "./autocomplete.styles.css";
import { useState } from "react";
import { countries } from "../data/countryList.js";

function Autocomplete() {
  const [inputed, setInputed] = useState("");
  function onEnteringInput(event) {
    setInputed(event.target.value);
    console.log(countries);
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
