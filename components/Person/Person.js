import React from 'react';
import { human } from './Person.module.scss';

const Person = ({ person }) => {
  const { name, thumbnail, src } = person;
  return (
    <a className={human} rel='noopener noreferrer' href={src} target='_blank'>
      <figure>
        <img src={thumbnail} alt={`Photo of ${name}`} />
      </figure>
      <figcaption>{name}</figcaption>
    </a>
  );
};

export default Person;
