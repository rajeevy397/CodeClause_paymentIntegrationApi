import React from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import config from './khaltiConfig';
import laptop from '../../img/1.png';
import './khalti.css';

const Khalti = () => {
  let checkout = new KhaltiCheckout(config);
  let buttonStyles = {
    backgroundColor: 'purple',
    padding: '10px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    porder: '1px solid white',
  };
  return (
    <div className="khalti">
      <h1>khalti Integration</h1>
      <p>Apple Laptop</p>
      <img src={laptop} alt="" />
      <button
        onClick={() => checkout.show({ amount: 1000 })}
        style={buttonStyles}
      >
        Buy via Khalti
      </button>
    </div>
  );
};

export default Khalti;
