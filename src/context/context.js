import CountContext from './store';
import React from 'react';
import App from '../routes/route';

const Provider = () => {
  const [count, setCount] = React.useState(0);

  const data = {
    count,
    setCount,
  };

  return (
    <CountContext.Provider value={data}>
      <App></App>
    </CountContext.Provider>
  );
};

export default Provider;
