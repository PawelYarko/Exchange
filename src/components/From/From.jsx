import * as React from 'react';
import PropTypes from 'prop-types';
import s from '../App/App.module.css';

const From = ({handleChangeFromAmount, handleChangeFrom, select, amount}) =>{
  const currencies = [
    { label: 'USD', icon: '$' },
    { label: 'UAH', icon: '₴' },
    { label: 'EUR', icon: '€' },
    { label: 'PLN', icon: 'Zł' },
  ];
    return(
        <>
        <div className={s.from}>
        <input type="number" value={amount} onChange={e => handleChangeFromAmount(e.target.value)} className={s.input}/>
        <select value={select} name="from" id="selectFrom" onChange={e => handleChangeFrom(e.target.value)} className={s.select} >
        {currencies.map(({label, icon}) => 
            <option key={label} value={label}>{label} {icon}</option>
          )}
        </select>
      </div>
        </>
    );
}

export default From;

From.propTypes = {
  select: PropTypes.string.isRequired,
  handleChangeFrom: PropTypes.func.isRequired,
  handleChangeFromAmount: PropTypes.func.isRequired,
}