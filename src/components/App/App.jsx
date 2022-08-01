import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import From from '../From/From';
import To from '../To/To';
import { fetch } from '../../redux/Api';
import { getRate } from '../../redux/selectors';         //, getUsdForUah, getEurForUah
import s from './App.module.css'

export const App = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('UAH');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('')

  const exchangeResult = useSelector((state) => state.data.result); 

  const value = {
    from,
    to,   
    amount
  };

  useEffect(() =>{
    setAmount(toAmount || fromAmount)
  }, [toAmount, fromAmount])

  // const reverseValue = {
  //   from: to, 
  //   to: from,
  //   amount: toAmount,
  // };

  // const usd = {to:'UAH', from:'USD', amount: 1};
  // const eur = {to:'UAH', from:'EUR', amount: 1};

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetch(usd));
  //   dispatch(fetch(eur)); 
  // }, []);


  useEffect(() => {
    if(from !== '' && to !== '' & amount !== ''){
      dispatch(fetch(value));
    }
    if(exchangeResult){
      setResult(exchangeResult);
    }
  }, [value]);


  const handleChangeToAmount = (toAmount) => {
    setFromAmount(result);
    setToAmount(toAmount);
  }

  const handleChangeTo = (to) => {
    setFromAmount(result);
    setTo(to);
  }

  const handleChangeFromAmount = (fromAmount) => {
    setToAmount(result);
    setFromAmount(fromAmount);
  }

  const handleChangeFrom = (from) => {
    setToAmount(result);
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
