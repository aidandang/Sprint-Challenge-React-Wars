import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchData(arg) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(arg)
    .then(response => {
      // get the data
      setData(response.data);
    })
    .catch(err => {
      // deal with the error in here
      console.log("Error: ", err);
    })
  }, [arg])

  return data 
}