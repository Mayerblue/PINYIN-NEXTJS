"use client"
import { useState,useContext } from 'react';
import { PinyinContext } from '@/app/hooks/PinyinProvider'
export default function Shendiao() {
    const shengdiao = ['*','ˉ','ˊ','ˇ','ˋ'];
    const [highlightedKey,setHighlightedKey] = useState(0);
    const { shengmuSelect,yunmuSelect,updateContext } = useContext(PinyinContext);

    const handleClick = (key: number) => {
        setHighlightedKey(key);
        updateContext(shengmuSelect,yunmuSelect,key)

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

