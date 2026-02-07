import React from 'react';
import './BiCoLogo.css';

function BiCoLogo({ size = 'medium' }) {
  return (
    <div className={`bico-logo ${size}`}>
      <div className="logo-shield">
        <div className="shield-top">
          <div className="shield-section haverford">
            <span className="shield-letter">H</span>
          </div>
          <div className="shield-section bryn-mawr">
            <span className="shield-letter">B</span>
          </div>
        </div>
        <div className="shield-bottom">
          <span className="shield-text">Bi-Co Bites</span>
        </div>
      </div>
    </div>
  );
}

export default BiCoLogo;
