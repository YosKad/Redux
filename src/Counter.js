import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/counterSlice';

export const Counter = () => {
  const value =  useSelector((state => state.counter.value))
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decremrnt())}> decremrnt </button>
    </div>
  )
}


export default Counter;