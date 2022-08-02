import s from '../App/App.module.css';

const From = ({handleChangeFromAmount, handleChangeFrom, select, amount}) =>{
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