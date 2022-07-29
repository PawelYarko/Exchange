import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../../redux/Api';
import { getExchangeResult } from '../../redux/selectors';

export const App = () => {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromAmount, setFromAmount] = useState('');

  const value = {to, from, toAmount}

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch(value));
  }, [value]);

  // const addValueForForm = e =>{
  //   e.preventDefault();
  //   dispatch(addNewTodo(info))            onChange={addValueForForm}
  // }
  
  const handleChangeTo = e => setTo(e.target.value);

  const handleChangeFrom = e => setFrom(e.target.value);

  const handleChangeToAmount = e => setToAmount(e.target.value);

  const handleChangeFromAmount = e => setFromAmount(e.target.value);

  const exchangeResult = useSelector(getExchangeResult); 

  console.log(exchangeResult);

  // if(exchangeResult === String){
  //   setFromAmount(exchangeResult)
  // }

  

  return (
    <>
    <form >
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
      </form>
    </>
  );
};
