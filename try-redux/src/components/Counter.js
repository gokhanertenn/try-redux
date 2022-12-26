import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Actions from '../redux/actions';
function Counter() {

    const count = useSelector(state=>state.countReducer);
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(Actions.sayiAksiyon.sayiArtir(1))}>Artır(+)</button>
      <button onClick={() => dispatch(Actions.sayiAksiyon.sayiAzalt(1))}>Azalt(-)</button>
      <p>{count}</p>
    </div>
  )
}

export default Counter
