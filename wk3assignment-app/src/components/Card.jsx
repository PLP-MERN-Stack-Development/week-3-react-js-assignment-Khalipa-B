import React from 'react';

const Card = ({ title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{content}</p>
  </div>
);

export default Card;
