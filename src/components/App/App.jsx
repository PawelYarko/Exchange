import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../../redux/Api';
import { getExchangeResult, getUsdForUah, getEurForUah } from '../../redux/selectors';

export const App = () => {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [toAmount, setToAmount] = useState(null);
  const [fromAmount, setFromAmount] = useState(null);

  const value = {to, from, amount: toAmount ?? fromAmount}
  const usd = {to:'UAH', from:'USD', toAmount: 1};
  const eur = {to:'UAH', from:'EUR', toAmount: 1};

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetch(usd));
  //   dispatch(fetch(eur)); 
  // }, []);
 


  const addValueForForm = e =>{
    e.preventDefault();
    dispatch(fetch(value))            
  }
  
  const handleChangeTo = e => setTo(e.target.value);

  const handleChangeFrom = e => setFrom(e.target.value);

  const handleChangeToAmount = e => setToAmount(e.target.value);

  const handleChangeFromAmount = e => setFromAmount(e.target.value);

  const exchangeResult = useSelector(getExchangeResult); 
  const usdExchangeRate = useSelector(getUsdForUah);
  const eurExchangeRate = useSelector(getEurForUah);

  console.log(exchangeResult);

  // if(exchangeResult === String){
  //   setFromAmount(exchangeResult)
  // }

  

  return (
    <>
    <header>
  <p>USD {usdExchangeRate} {usd.to}</p>
      <p>EUR {eurExchangeRate} {eur.to}</p>
    </header>
    <form onSubmit={addValueForForm}>
      <select name="to" id="selectTo" onChange={handleChangeTo}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <input type="text" onChange={handleChangeToAmount}/>
      <select name="from" id="selectFrom" onChange={handleChangeFrom}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <input type="text" onChange={handleChangeFromAmount} value={fromAmount}/>
      <button type="submit">Send</button>
      </form>
    </>
  );
};
