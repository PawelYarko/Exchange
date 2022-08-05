import PropTypes from 'prop-types';
import s from '../App/App.module.css';

const To = ({handleChangeToAmount, handleChangeTo, amount, select}) =>{
  const currencies = [
    { label: 'UAH', icon: '₴' },
    { label: 'USD', icon: '$' },
    { label: 'EUR', icon: '€' },
    { label: 'PLN', icon: 'Zł' },
  ];

    return(
        <>
        <div className={s.to}>
        <input type="number" value={amount} onChange={e => handleChangeToAmount(e.target.value)} className={s.input}/>
        <select value={select} name="to" id="selectTo" onChange={e =>handleChangeTo(e.target.value)} className={s.select} >
          {currencies.map(({label, icon}) => 
            <option key={label} value={label}>{label} {icon}</option>
          )}
          
        </select>
      </div>
        </>
    );
}

export default To;

To.propTypes = {
  select: PropTypes.string.isRequired,
  handleChangeTo: PropTypes.func.isRequired,
  handleChangeToAmount: PropTypes.func.isRequired,
}