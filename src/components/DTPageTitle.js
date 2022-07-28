import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 

const DTPageTitle = ({ title, subtitle, section }) => {
  return (
    <div className="dt-page-title-container">
      { subtitle && <h2>{ subtitle }</h2> }
      <h1>{ title }</h1>
    </div>
  );
}

DTPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  section: PropTypes.string,
}

export default DTPageTitle;
