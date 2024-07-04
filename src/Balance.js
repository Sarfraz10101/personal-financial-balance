import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div>
      <h3>Your Balance</h3>
      <h1>${balance}</h1>
    </div>
  );
}

export default Balance;
