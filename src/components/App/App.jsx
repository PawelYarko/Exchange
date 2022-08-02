import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import From from '../From/From';
import To from '../To/To';
import { fetch } from '../../redux/Api';
// import { getRate } from '../../redux/selectors';         //, getUsdForUah, getEurForUah
import s from './App.module.css'

export const App = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('UAH');
  const [rate, setRate] = useState('');
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  const currentRate = useSelector((state) => state.data.conversion_rate); 
  // const usdReq = {to:'USD', from:'UAH'};
  // const eurReq = {to:'EUR', from:'UAH'};

  // const usdExchangeRate = useSelector((state) => state.data.conversion_rate);
  // const eurExchangeRate = useSelector((state) => state.data.conversion_rate);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetch(usdReq));
  //   setUsd(usdExchangeRate)
  //   dispatch(fetch(eurReq));
  //   setEur(eurExchangeRate) 
  //   console.log(usd, eur)
  // }, []);


  useEffect(() => {
    dispatch(fetch({to, from}));
    setTo(to);
    setFrom(from);
  }, [to, from, toAmount, fromAmount]);

  useEffect(()=>{
    setRate(currentRate);
  },[ currentRate ])

  const formatResult = (number) =>{
    return number.toFixed(3)
  }

  const handleChangeFromAmount = (fromAmount) => {
    setToAmount(formatResult(Number(fromAmount) / rate));
    setFromAmount(Number(fromAmount));
  }

  const handleChangeFrom = (from) => {
    setToAmount(formatResult(Number(fromAmount) * rate));
    setFrom(from);
  }

  const handleChangeToAmount = (toAmount) => {
    setFromAmount(formatResult(Number(toAmount) * rate)); 
    setToAmount(Number(toAmount));
  }

  const handleChangeTo = (to) => {
    setFromAmount(formatResult(Number(toAmount) * rate));
    setTo(to);
  }

  return (
    <>
    <header>
      {/* <p>USD {usdExchangeRate}</p>
      <p>EUR {eurExchangeRate}</p> */}
    </header>
    <From
      handleChangeFromAmount = {handleChangeFromAmount}
      handleChangeFrom = {handleChangeFrom}
      amount = {fromAmount}
      select = {from}
    />
    <To
      handleChangeToAmount = {handleChangeToAmount}
      handleChangeTo = {handleChangeTo}
      amount = {toAmount}
      select = {to}
    />
    </>
  );
};
