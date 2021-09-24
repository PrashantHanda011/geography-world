import React from "react";
import "./country.css";
const Country = (props) => {

  return (
    <div className="country">
      <img src={props.flag} alt="g.com" />
        <div className="country-data">
            <h1>{props.name}</h1>
        <ul>
          <li>Capital: {props.capital}</li>
          <li>Region: {props.region}</li>
          <li>Population:{props.population}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
