'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchData } from '../../features/data/dataSlice';
import { increment } from '../../features/counter/counterSlice';

export default function About() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(items)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};