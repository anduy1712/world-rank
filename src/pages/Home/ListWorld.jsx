import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const ListWorld = ({ shortName, img, name, population, area, gini }) => {
  return (
    <Link to={`/country/${shortName}`}>
      <li className={style['list__words-item']}>
        <div className={`${style['img-box']} ${style['text-item']}`}>
          <img src={img} alt="" />
          <span>{name}</span>
        </div>
        <p className={`${style['text-item']}`}>{population}</p>
        <p className={`${style['text-item']}`}>{area}</p>
        <p className={`${style['text-item']}`}>{gini}%</p>
      </li>
    </Link>
  );
};

export default ListWorld;
