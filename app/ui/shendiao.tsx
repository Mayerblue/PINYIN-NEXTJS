"use client"
import { useState } from 'react';
export default function Shendiao({ setShendiao }: { setShendiao: (key: number) => void }) {
    const shengdiao = ['*','ˉ','ˊ','ˇ','ˋ'];
    const [highlightedKey,setHighlightedKey] = useState(0);

    const handleClick = (key: number) => {
        setHighlightedKey(key);
        setShendiao(key)

    };
    return (
        <div className="flex flex-wrap  border border-yellow-500 px-4 bg-yellow-50 p-2 rounded-lg shadow-md">
            <span className="text-2xl font-bold "> </span>
            {shengdiao.map((item,index) => (
                <div
                    key={index}
                    className={`w-16  flex items-center justify-center cursor-pointer text-2xl font-bold ${highlightedKey === index ? 'bg-yellow-400 rounded-lg' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

