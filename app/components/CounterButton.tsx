'use client';

import { useContext } from "react";
import { DataContext } from "../share/page";

export default function CounterDisplay() {
    const { counter, setCounter } = useContext(DataContext);

    const handleIncrement = () => setCounter(counter + 1);

    return <button onClick={handleIncrement}>Increment Count</button>
}