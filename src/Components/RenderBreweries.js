import React from 'react';
import {Link} from "react-router-dom";

  function RenderBreweries(props) {
    return props.breweries.map((brewery) => {
      const {id, name, brewery_type, street, city, state, website_url} = brewery;

      return (
        <tr key={id}>
          <Link to={`/breweries/${id}`}><td>{name}</td></Link>
          <td>{brewery_type}</td>
          <td>{street}</td>
          <td>{city}</td>
          <td>{state}</td>
          <td><a href={website_url}>{website_url}</a></td>
        </tr>
      );
    });
  };

  export default RenderBreweries;