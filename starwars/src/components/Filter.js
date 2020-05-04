import React, { useState } from 'react';

export default function Filter(props) {
  const [formData, setFormData] = useState({
    status: 'All',
    gender: 'All'
  })

  const onSubmit = event => {
    event.preventDefault();
    props.filter(formData);
  }

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <label htmlFor="status" className="mr-2">Status:</label>
        <select 
          name="status" 
          onChange={onInputChange}
        >
          <option value="All">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
        <label htmlFor="gender" className="mx-2">Gender:</label>
        <select 
          name="gender" 
          onChange={onInputChange}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button className="mx-3">Filter</button>
      </form>
    </div> 
  )
}