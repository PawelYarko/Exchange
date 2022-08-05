import { useState, useEffect } from 'react';
import axios from 'axios';
import s from '../App/App.module.css';

const Header = () =>{
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() =>{
      axios.get('https://v6.exchangerate-api.com/v6/d986c35b178b810600ee8be0/pair/USD/UAH')
      .then(response => {
        setUsd(response.data.conversion_rate)
      })
  }, [])
  useEffect(() =>{
    axios.get('https://v6.exchangerate-api.com/v6/d986c35b178b810600ee8be0/pair/EUR/UAH')
    .then(response => {
      setEur(response.data.conversion_rate)
    })
}, [])

    return(
        <>
    <header className={s.header}>
      <h1 className={s.title}>Exchange</h1>
      <div className={s.rates}>
        <p className={s.rate}>
          <img src="https://countryflagsapi.com/png/us" alt="The United States Of America flag" className={s.flag}/>
          <span>USD {usd} ₴</span></p>
        <p className={s.rate}>
          <img src="https://countryflagsapi.com/png/eu" alt="European Union flag" className={s.flag}/>
          <span className={s.label}>EUR {eur} ₴</span></p>
      </div>
    </header>
        </>
    );
}

export default Header;