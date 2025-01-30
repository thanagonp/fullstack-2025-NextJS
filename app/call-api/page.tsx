'use client';

import axios from "axios";

export default function CallApi() {
    const doPost = async () => {
        const payload = {
            id: 1,
            name: 'Oat'
        };
        await axios.post('https://localhost:3001', payload);
    };

    const doGet = async () => {
        const response = await axios.get('https://localhost:3001');
    }

    const doPut = async () => {
        const payload = {
            id: 1,
            name: 'Oat'
        };
        await axios.put('https://localhost:3001', payload);
    };

    const doDelete = async () => {
        await axios.delete('https://localhost:3001');
    };

    return (
        <div>
            <button onClick={doPost}>POST</button>
            <button onClick={doGet}>GET</button>
            <button onClick={doPut}>PUT</button>
            <button onClick={doDelete}>DELETE</button>
        </div>
    );
}