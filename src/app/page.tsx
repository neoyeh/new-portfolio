'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchData } from '../features/data/dataSlice';
import { increment } from '../features/counter/counterSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const { items } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};