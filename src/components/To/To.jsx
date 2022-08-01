import s from '../App/App.module.css';

const To = ({handleChangeToAmount, handleChangeTo, toAmount, to}) =>{
    return(
        <>
        <div className={s.to}>
        <input type="number" value={toAmount} onChange={e => handleChangeToAmount(e.target.value)} className={s.input}/>
        <select value={to} name="to" id="selectTo" onChange={e =>handleChangeTo(e.target.value)} className={s.select} >
          <option value="UAH" selected>UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
        </>
    );
}

export default To;