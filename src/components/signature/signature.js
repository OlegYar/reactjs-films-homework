import React from 'react';
import './signature.scss'

const Signature = ({person}) => {
    return <p className='signature-name'>{person.name} {person.sername}</p>;
};

export default Signature;