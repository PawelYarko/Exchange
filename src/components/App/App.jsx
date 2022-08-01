import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import From from '../From/From';
import To from '../To/To';
import { fetch } from '../../redux/Api';
import { getRate } from '../../redux/selectors';         //, getUsdForUah, getEurForUah
import s from './App.module.css'

export const App = () => {
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('UAH');
  const [rate, setRate] = useState('')
  

  

  const value = {
    from: from,
    to: to,   
    amount: fromAmount,
  };

  const reverseValue = {
    from: to, 
    to: from,
    amount: toAmount,
  };

  // const usd = {to:'UAH', from:'USD', amount: 1};
  // const eur = {to:'UAH', from:'EUR', amount: 1};

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetch(usd));
  //   dispatch(fetch(eur)); 
  // }, []);


  useEffect(() => {
    dispatch(fetch(value));

    // setRate(exchangeResult)
  }, []);

  // const exchangeResult = useSelector((state) => state.data.info.rate); 
  // if(exchangeResult){
  //   setRate(exchangeResult);
  // }


  // useEffect(() => {
  //   dispatch(fetch(value));
  //   dispatch(fetch(reverseValue)); 
  //   setFromAmount(exchangeResult);
  //   setToAmount(exchangeResult);
  // }, [value, reverseValue]);
  

  // const addValueForForm = e =>{
  //   e.preventDefault();
  //   dispatch(fetch(value));
  //   dispatch(fetch(reverseValue));
  //   setFromAmount(exchangeResult);
  //   setToAmount(exchangeResult);   
  // }

  const handleChangeToAmount = (toAmount) => {
    setFromAmount(toAmount * rate / to);
    setToAmount(toAmount);
  }

  const handleChangeTo = (to) => {
    setFromAmount(toAmount * rate / to);
    setTo(to);
  }

  const handleChangeFromAmount = (fromAmount) => {
    setFromAmount(fromAmount * rate / from);
    setFromAmount(fromAmount);
  }

  const handleChangeFrom = (from) => {
    setFromAmount(fromAmount * rate / from);
    setFrom(from);
  }


  // const usdExchangeRate = useSelector(getUsdForUah);
  // const eurExchangeRate = useSelector(getEurForUah);

  return (
    <>
    {/* <header>
      <p>USD {usdExchangeRate} {usd.to}</p>
      <p>EUR {eurExchangeRate} {eur.to}</p>
    </header> */}
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
