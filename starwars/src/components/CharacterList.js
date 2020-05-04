import { useState, useEffect } from "react";
import axios from "axios";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isReturn, setReturn] = useState(false);
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setCharacters([...characters, ...res.data.results]);
        if (page < res.data.info.pages) { setPage(page + 1) };
        if (page === res.data.info.pages) { setReturn(true) }
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (isReturn) return characters;
}

export default CharacterList;