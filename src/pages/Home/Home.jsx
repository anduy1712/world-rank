import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiChevronUp } from 'react-icons/fi';
import style from './Home.module.css';
import ListWorld from './ListWorld';
const Home = ({ theme }) => {
  const [world, setWorld] = useState([]);
  const [data, setData] = useState([]);
  const [test, setTest] = useState(0);

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
  const handleSort = (value) => {
    const cloneData = [...data];
    if (value === 'desc') {
      const newData = cloneData.sort((a, b) => (a.name > b.name ? -1 : 1));
      setData(newData);
    }
    if (value === 'asc') {
      const newData = cloneData.sort((a, b) => (a.name > b.name ? 1 : -1));
      setData(newData);
    }
    if (value === 'population') {
      const newData = cloneData.sort((a, b) =>
        a.population > b.population ? 1 : -1
      );
      setData(newData);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className={`${style.content} ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="container">
        <div className={style.search}>
          <p className={style.search__title}>
            {data.length > 0
              ? `Found ${data.length} countries`
              : `Found 0 countries`}
          </p>
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
            <p className={style.list__item} onClick={() => handleSort('desc')}>
              Name
            </p>
            <p
              className={style.list__item}
              onClick={() => handleSort('population')}
            >
              Population
            </p>
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
