import React, {useEffect, useState} from 'react';
import { ADD_COUNT } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

const Home = props => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    const t = setInterval(() => {
      dispatch({ type: ADD_COUNT });
    }, 1000)

    return () => clearInterval(t)
  }, [count])

  return (
    <h1>Hello { props.name }, { count }</h1>
  )
}

export default () => {
  return (
    <Home name={'Sammy'} />
  )
}
