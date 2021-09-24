import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Country";
import { Link } from "react-router-dom";

const CountryList = () => {
  const [data, setdata] = useState([]);

  const fetch = async () => {
    try {
      let res = await axios.get("https://restcountries.com/v2/continent/asia");
      console.log(res.data);
      await setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return <Link style={{textDecoration:"none"}} to={{pathname : '/detail', state : item}} key={index}>
                <Country 
                id = {index}    
                key={index}
                name = {item.name}
                flag={item.flags[0]}
                capital = {item.capital}
                region = {item.region}
                demonym = {item.demonym}
                lang={item.languages}
                border={item.borders}
                population = {item.population}

            /></Link>;
      })}
    </>
  );
};

export default CountryList;