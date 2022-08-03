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
    <header>
      <p>USD {usd}</p>
      <p>EUR {eur}</p>
    </header>
        </>
    );
}

export default Header;