"use client"
import { useState,useEffect,useRef } from 'react';
import PinyinLine from './pinyin-line';
import { pyInfos } from '@/app/lib/pymp3';

function queryPinYin(sm: string,ym: string,sd: number) {
    // 空数组存放符合条件的拼音结果
    const rets: { py: string; mp3: string }[] = [];
    // 循环遍历 pyInfos 对象中的每一个拼音信息
    for (const key in pyInfos) {
        if (Object.prototype.hasOwnProperty.call(pyInfos,key)) {
            const pyinfo = pyInfos[key]
            if ((sm === "") || (sm === (pyinfo.sm))) {
                if ((ym === "") || (ym === pyinfo.ym)) {
                    if ((sd === 0) || (sd === pyinfo.sd)) {
                        // 符合条件的拼音信息添加到 rets
                        rets.push({ py: key,mp3: pyinfo.mp3 });
                        // 如果 rets 数组长度大于等于10,则返回结果,终止循环遍历
                        if (rets.length >= 10) {
                            return rets;
                        }
                    }
                }
            }
        }
    }
    return rets;
}



interface Pinyinmp3 {
    mp3: string,
    py: string
}

export default function Pinyin({ shengmu,yunmu,shendiao }: { shengmu: string; yunmu: string; shendiao: number }) {
    //results存放符合条件的拼音结果和对应的mp3结果
    const [results,setResults] = useState<Pinyinmp3[]>([]);

    const [mp3auido,setMp3audio] = useState('')
    const audioRef = useRef<HTMLAudioElement>(null);

    const shengdiaoChat = ['*','ˉ','ˊ','ˇ','ˋ'];

    //在shengmu、yunmu、shendiao发生变化时调用handleSearch函数
    useEffect(() => {
        const rets = queryPinYin(shengmu,yunmu,shendiao);
        setResults(rets);
        setMp3audio('')
    },[shengmu,yunmu,shendiao]);

    useEffect(() => {
        // 检查 audioRef 是否存在
        if (audioRef.current) {
            const audioElement = audioRef.current;
            // 定义一个名为 handleCanPlay 的函数，用于处理音频可以播放的事件
            const handleCanPlay = () => {
                // 调用 togglePlay 函数来播放或暂停音频
                togglePlay();
            };
            // 为 audioRef.current 添加 'canplay' 事件监听器，当音频可以播放时调用 handleCanPlay 函数
            audioElement.addEventListener('canplay',handleCanPlay);
            // 返回一个清理函数，用于在组件卸载或重新渲染时移除事件监听器
            return () => {
                // 使用可选链操作符 ?. 来确保 audioRef.current 存在后再调用 removeEventListener
                audioElement?.removeEventListener('canplay',handleCanPlay);
            };
        }

    },[mp3auido])
    const togglePlay = () => {
        if (audioRef.current) {
            const currentAudio = audioRef.current;
            currentAudio.play();

        }
    };

    return (
        <>
            <div
                className={`pt-8 cursor-pointer text-4xl font-bold`} style={{ fontFamily: 'serif' }}
            >
                <div className='text-center'>
                    {shengmu}+{yunmu} &nbsp;  &nbsp; {shengdiaoChat[shendiao]}
                    {results.length === 0 ? ' ❌ ' : ''}
                </div>
                <div className='flex flex-wrap'>
                    {results.map((result,index) => (
                        <div key={index}
                            className={`py-2 flex items-center justify-center ${mp3auido === result.mp3 ? 'bg-violet-300 rounded-lg' : ''}`}
                            onClick={() => { setMp3audio(result.mp3) }}
                        >
                            <PinyinLine> {result.py}</PinyinLine>
                            {/* 添加对应的result的发音媒体audio */}

                        </div>
                    ))}
                </div>
                <audio ref={audioRef} controls controlsList="nodownload" src={`https://www.purpleculture.net/mp3/${mp3auido}.mp3`} style={{ display: 'none' }}>
                </audio>
            </div >
        </>
    )
}