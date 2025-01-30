'use client';

import { createContext , useState } from 'react';
import CounterDisplay from '../components/CounterDisplay';
import CounterButton from '../components/CounterButton';

export const DataContext = createContext<any>(undefined);

export default function SharePage() {
    const [counter, setCounter] = useState(0);

    return (
        <DataContext.Provider value={{ counter, setCounter }}>
            <div>
                <CounterDisplay />
                <CounterButton />
            </div>
        </DataContext.Provider>
    );
}


