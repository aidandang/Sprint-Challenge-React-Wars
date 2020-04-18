import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
// import { Container, Row } from "reactstrap";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/?page=${page}`)
      .then(res => {
        setCharacters([...characters, res.data]);
        if (page < 9) {setPage(page + 1)};
        console.log(characters);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [page]);

  return ( 
    <div>
       {characters.forEach(p => p.results.map(c => {return <Character character={c} />} ))}
    </div>
  );
}

export default CharacterList;