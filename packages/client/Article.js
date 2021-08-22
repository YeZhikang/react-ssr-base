import React from 'react';
import { useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams();

  return (
    <div>Articles: it is: {id}</div>
  )
}
