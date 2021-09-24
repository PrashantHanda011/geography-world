import { IconButton } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import React from 'react';


import { useHistory,useLocation } from 'react-router';
import './detail.css'
const Detail = () => {
    let {state} = useLocation();
    console.log(state)
    const history = useHistory();

    return (

    <div className='detail-box'>
          <IconButton>
    <ArrowBackIos onClick={()=>history.push('/')} style={{color:"white",margin:"20px"}}/>
    </IconButton>
        <div className="detail">
            <img src={state.flags[0]} alt="ooo.c" />
            <div className="detail-data">
                <h1 className="name">{state.name}</h1>
                <h2>Capital: <h3>{state.capital}</h3></h2>
   
                <h2>Region: <h3>{state.region}</h3></h2>
                <h2>demonym: <h3>{state.demonym}</h3></h2>
                <h2 className="language">languages: <h3><ul className="lang"> {state.languages.map((lang,index)=><li>{lang.name}</li>)}</ul></h3></h2>
                <h2 className="bord">borders: <h3> <ul className="borders">{state.borders.map((item,index)=><li>{item}</li>)}</ul></h3></h2>
                <h2>population: <h3> {state.population}</h3></h2>
            </div>
        </div>
        </div>
    );
};

export default Detail;