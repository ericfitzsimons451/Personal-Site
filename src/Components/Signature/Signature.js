import React from 'react';
import './Signature.scss';
import favicon from '../../Assets/eric-favicon.png'

const Signature = () => {
  return (
    <div className="signature-section">
      <h4>© Eric Fitzsimons - 2020</h4> 
      <img className="favicon" src={favicon} alt="EF" />
    </div>
  )
};

export default Signature;