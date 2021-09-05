import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router';
import style from './Detail.module.css';
const Detail = ({ theme }) => {
  const [data, setData] = useState([]);
  const [borders, setBorders] = useState([]);

  const { slug } = useParams();
  //Fetch Api
  const FetchData = async (id) => {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${id.toLowerCase()}`
    );
    const data = await response.data;
    setData(data);
  };
  const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

    const country = await res.json();

    return country;
  };
  //ERROR
  const getBorders = async () => {
    if (data.length === 0) return;
    const borders = await Promise.all(
      data.borders.map((border) => getCountry(border))
    );
    console.log(borders);
    setBorders(borders);
  };
  useEffect(() => {
    getBorders();
  }, [data]);
  useEffect(() => {
    FetchData(slug);
  }, []);
  if (data.length === 0) return <div>data is not found</div>;
  return (
    <div className={`${style.detail} ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="container">
        <div className={style.content}>
          <div className={style.avatar}>
            <img src={data.flag} alt="" />
            <h1>{data.name}</h1>
            <p>{data.region}</p>
            <div className={style.desc}>
              <div className={style.desc__left}>
                {data.population} <span>Population</span>
              </div>
              <div className={style.desc__right}>
                {data.area} <span>Area</span>
              </div>
            </div>
          </div>
          <div className={style.profile}>
            <h2>Detail</h2>
            <ul className={style.list}>
              <li className={style.list__item}>
                <p>Capital</p>
                <span className={style.list__item_txt}>{data.capital}</span>
              </li>
              <li className={style.list__item}>
                <p>Languages</p>
                <span className={style.list__item_txt}>
                  {data.languages.map((item) => {
                    return item.name + ', ';
                  })}
                </span>
              </li>
              <li className={style.list__item}>
                <p>Currencies</p>
                <span className={style.list__item_txt}>
                  {data.currencies.map((item) => item.name)}
                </span>
              </li>
              <li className={style.list__item}>
                <p>Native name</p>
                <span className={style.list__item_txt}>{data.nativeName}</span>
              </li>
              <li className={style.list__item}>
                <p>Gini</p>
                <span className={style.list__item_txt}>{data.gini}</span>
              </li>
            </ul>
            <p>Neighbouring Countries</p>
            <div className={style.list_flag}>
              {borders.length > 0
                ? borders.map((item) => (
                    <div className={style.flag__item}>
                      <img src={item.flag} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
