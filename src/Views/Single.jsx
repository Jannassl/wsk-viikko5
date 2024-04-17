import React from 'react';
import { useLocation } from 'react-router-dom';

const Single = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div>
      {item && (
        <div>
          <img src={item.filename} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default Single;
