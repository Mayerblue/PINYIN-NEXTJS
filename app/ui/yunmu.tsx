
"use client"
import { useState } from 'react';
import { yunmu,complexYunmu,singleYunmu,frontNasalYunmu,backNasalYunmu } from '@/app/lib/yunmu';
import PinyinLine from './pinyin-line';
export default function Yunmu({ setYunmu }: { setYunmu: (key: string) => void }) {
    const [highlightedKey,setHighlightedKey] = useState('');

    const handleClick = (key: string) => {
        setHighlightedKey(key);
        //传值到父组件
        setYunmu(key);
    };
    return (
        <>
            <YunmuCategory category="单韵母" items={singleYunmu} handleClick={handleClick} highlightedKey={highlightedKey} />
            <YunmuCategory category="复韵母" items={complexYunmu} handleClick={handleClick} highlightedKey={highlightedKey} />
            <YunmuCategory category="前鼻韵母" items={frontNasalYunmu} handleClick={handleClick} highlightedKey={highlightedKey} />
            <YunmuCategory category="后鼻韵母" items={backNasalYunmu} handleClick={handleClick} highlightedKey={highlightedKey} />
            <YunmuCategory category="三拼" items={yunmu} handleClick={handleClick} highlightedKey={highlightedKey} />
        </>
    );
}

const YunmuCategory = ({ category,items,handleClick,highlightedKey }: { category: string,items: string[],handleClick: (item: string) => void,highlightedKey: string }) => {
    return (
        <>
            <div className="font-bold text-2xl text-center text-lime-500">{category}</div>
            <div className="flex flex-wrap">
                {items.map((item) => (
                    <div
                        key={item}
                        className={`py-2 flex items-center justify-center cursor-pointer text-4xl font-bold ${highlightedKey === item ? 'bg-lime-400 rounded-lg' : ''}`}
                        onClick={() => handleClick(item)}
                    >
                        <PinyinLine> {item}</PinyinLine>
                    </div>
                ))}
            </div>
        </>
    );
};
