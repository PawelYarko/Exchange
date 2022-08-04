import * as React from 'react';
import s from '../App/App.module.css';

const From = ({handleChangeFromAmount, handleChangeFrom, select, amount}) =>{
    // const options = [
    //     { code: 'UA', label: 'UAH' },
    //     { code: 'US', label: 'USD' },
    //     { code: 'EU', label: 'EUR' },
    //     { code: 'PL', label: 'ZL' },
    // ]
    return(
        <>
        <div className={s.from}>
        <input type="number" value={amount} onChange={e => handleChangeFromAmount(e.target.value)} className={s.input}/>
        <select value={select} name="from" id="selectFrom" onChange={e => handleChangeFrom(e.target.value)} className={s.select} >
          <option value="UAH">UAH</option>
          <option value="USD" selected>USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
        </>
    );
}

export default From;