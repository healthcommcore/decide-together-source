import React from 'react';
import Container from 'react-bootstrap/Container';
import DTMenu from './DTMenu';
import DTPageTitle from './DTPageTitle';

const DTLayout = ({ title, subtitle, section, children }) => {
  return (
    <div className="dt-page">
      <DTMenu />
      <DTPageTitle title="Test" />
      <div className="dt-content">
        <Container>
          { children }
        </Container>
      </div>
    </div>
  );
}

export default DTLayout;
