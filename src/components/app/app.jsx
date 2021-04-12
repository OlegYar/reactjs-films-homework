import React from 'react';
import Signature from '../signature';
import './app.scss';

const App = () => {
  const person = { name: 'Oleg', sername: 'Yarotskiy' };
  return (
    <div className="signature">
      <Signature name={person.name} sername={person.sername} />
    </div>
  );
};

export default App;
