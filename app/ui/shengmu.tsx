"use client"
import { useState } from 'react';
import { shengmu } from '@/app/lib/shengmu.json';
import PinyinLine from './pinyin-line';

export default function Shengmu({ setShengmu }: { setShengmu: (key: string) => void }) {
    const [highlightedKey,setHighlightedKey] = useState('');
    const handleClick = (key: string) => {
        setHighlightedKey(key);
        setShengmu(key);
    };
    return (
        <div className="flex flex-wrap ">
            {shengmu.map((item) => (
                <div
                    key={item}
                    className={`py-2  flex items-center justify-center cursor-pointer  ${highlightedKey === item ? 'bg-teal-400 rounded-lg' : ''}`}
                    onClick={() => handleClick(item)}

                >
                    <PinyinLine> {item}</PinyinLine>
                </div>
            ))}
        </div>
    );
}