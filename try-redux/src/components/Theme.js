import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Actions from '../redux/actions';

function Theme() {

  const theme = useSelector(state=>state.themeReducer);
    const dispatch = useDispatch()
  return (
    <div style={theme}>
       <button onClick={() => dispatch(Actions.temaGrup.temaKoyu())}>Koyu(+)</button>
       <button onClick={() => dispatch(Actions.temaGrup.temaAçık())}>Açık(+)</button>
    </div>
  )
}

export default Theme;
