import React from 'react';
import Signature from '../signature';
import './app.scss'

const App = () => {
    const person = {name: 'Oleg', sername: 'Yarotskiy'};
    return (
        <div className="signature">
            <Signature person={person}/>
        </div>
    )
}

export default App;