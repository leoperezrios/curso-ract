import React from 'react';
import './TodoSearch.css';

function TodoSerch({ searchValue, setSearchValue }) {
  
  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <input
      className='todo-search'
      placeholder='Cebolla'
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSerch };