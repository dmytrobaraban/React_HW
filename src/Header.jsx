import React from 'react';

const Header = ({ handleInputOnChange, handleSortOnChange }) => {

  return (
    <>
      <input
        type="text"
        placeholder="Enter name..."
        className="header_input"
        onChange={handleInputOnChange}
      />
      <select onChange={handleSortOnChange}>
        <option value="default">Default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </>
  );
};

export default Header;
