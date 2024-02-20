import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function CountryDropdown() {
  const [countries, setCountries] = useState(['France', 'Italy', 'Brazil']);
  const [selectedCountry, setSelectedCountry] = useState("France");

  useEffect(() => {
    // Function to read query parameters from the URL
    const getQueryParam = (name) => {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    };

    // Read the 'param' query parameter from the URL on component mount
    const initialParamValue = getQueryParam('team');

    // Set the state with the initial value
    if (initialParamValue !== null) {
      setSelectedCountry(initialParamValue);
    }
  }, []);

  const handleSelect = (event) => {
    setSelectedCountry(event.target.innerText);
    window.location.href = window.location.pathname + '?team='+event.target.innerText;
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      {selectedCountry}
      </Dropdown.Toggle>    
      <Dropdown.Menu>
        {
            countries.map((country, index) => (
              <Dropdown.Item onClick={handleSelect} key={index}>{country}</Dropdown.Item>
            ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CountryDropdown;
