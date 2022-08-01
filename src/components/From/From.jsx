import s from '../App/App.module.css';

const From = ({handleChangeFromAmount, handleChangeFrom, from, fromAmount}) =>{
    return(
        <>
        <div className={s.from}>
        <input type="number" value={fromAmount} onChange={e => handleChangeFromAmount(e.target.value)} className={s.input}/>
        <select value={from} name="from" id="selectFrom" onChange={e => handleChangeFrom(e.target.value)} className={s.select} >
          <option value="UAH">UAH</option>
          <option value="USD" selected>USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
        </>
    );
}

export default From;