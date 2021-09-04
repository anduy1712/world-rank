import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Home.module.css';
import ListWorld from './ListWorld';
const Home = () => {
  const [world, setWorld] = useState([]);
  const [data, setData] = useState([]);

  //Fetch Api
  const FetchData = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const data = await response.data;
    setWorld(data);
    setData(data);
  };
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    const newData = world.filter((item) => {
      return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    setData(newData);
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className={style.content}>
      <div className="container">
        <div className={style.search}>
          <p className={style.search__title}>Found 250 countries</p>
          <div className={style.search__input}>
            <FiSearch />
            <input
              type="text"
              placeholder="Filter by Name, Region or SubRegion"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.list}>
          <div className={style.list__title}>
            <p className={style.list__item}>Name</p>
            <p className={style.list__item}>Population</p>
            <p className={style.list__item}>Area</p>
            <p className={style.list__item}>Gini</p>
          </div>
          <ul className={style.list__worlds}>
            {data.length > 0
              ? data.map((item, index) => {
                  return (
                    <ListWorld
                      key={index}
                      shortName={item.alpha3Code}
                      img={item.flag}
                      name={item.name}
                      population={item.population}
                      area={item.area}
                      gini={item.gini}
                    />
                  );
                })
              : ''}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
