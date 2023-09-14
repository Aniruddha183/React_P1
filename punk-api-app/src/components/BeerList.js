// src/components/BeerList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`).then((response) => {
      setBeers(response.data);
    });
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Beer List</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={handleSearch}
        value={searchTerm}
      />
      <div className="row">
        {beers.map((beer) => (
          <div key={beer.id} className="col-lg-2 col-md-2 col-sm-4">
            <div className="card">
              <img src={beer.image_url} className="card-img-top beer-imgage" alt={beer.name} />
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">{beer.tagline}</p>
                <p className="card-text">ABV: {beer.abv}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeerList;
