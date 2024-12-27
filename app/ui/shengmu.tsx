"use client"
import { useState,useContext } from 'react';
import { shengmu } from '@/app/lib/shengmu';
import PinyinLine from './pinyin-line';
import { PinyinContext } from '@/app/hooks/PinyinProvider'

export default function Shengmu() {
    const [highlightedKey,setHighlightedKey] = useState('');

    const { yunmuSelect,shendiaoSelect,updateContext } = useContext(PinyinContext);
    const handleClick = (key: string) => {
        //更改useContext(PinyinContext)[0]的值
        setHighlightedKey(key);
        updateContext(key,yunmuSelect,shendiaoSelect);
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