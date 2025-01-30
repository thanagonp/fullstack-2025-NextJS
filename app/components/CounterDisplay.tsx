'use client';

import { useContext } from "react";
import { DataContext } from "../share/page";

export default function CounterDisplay() {
    const { counter } = useContext(DataContext);

    return <div>Counter: {counter}</div>;
}



