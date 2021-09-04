import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router';
import style from './Detail.module.css';
const Detail = () => {
  const [data, setData] = useState([]);

  const { slug } = useParams();
  //Fetch Api
  const FetchData = async () => {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${slug.toLowerCase()}`
    );
    const data = await response.data;
    setData(data);
  };
  // const { borders } = data;
  // if (borders) {
  //   const test = borders.map(async (item) => {
  //     return await axios.get(
  //       `https://restcountries.eu/rest/v2/alpha/${item.toLowerCase()}`
  //     );
  //   });
  // }
  useEffect(() => {
    FetchData();
  }, []);
  if (data.length === 0) return <div>data is not found</div>;
  return (
    <div className={style.detail}>
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
              <div className={style.flag__item}>
                <img src="https://restcountries.eu/data/irn.svg" alt="" />
                <h3>Iran (Islamic Republic of)</h3>
              </div>
              <div className={style.flag__item}>
                <img src="https://restcountries.eu/data/irn.svg" alt="" />
                <h3>Iran (Islamic Republic of)</h3>
              </div>
              <div className={style.flag__item}>
                <img src="https://restcountries.eu/data/irn.svg" alt="" />
                <h3>Iran (Islamic Republic of)</h3>
              </div>
              <div className={style.flag__item}>
                <img src="https://restcountries.eu/data/irn.svg" alt="" />
                <h3>Iran (Islamic Republic of)</h3>
              </div>
              <div className={style.flag__item}>
                <img src="https://restcountries.eu/data/irn.svg" alt="" />
                <h3>Iran (Islamic Republic of)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
