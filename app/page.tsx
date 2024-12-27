"use client"
import { useState } from 'react';
import Shengmu from '@/app/ui/shengmu';
import Yunmu from '@/app/ui/yunmu';
import Shendiao from '@/app/ui/shendiao';
import Pinyin from '@/app/ui/pinyin';
export default function Page() {
    const [shengmu,setShengmu] = useState('b');
    const [yunmu,setYunmu] = useState('a');
    const [shendiao,setShendiao] = useState(0);
    return (
        <>
            <div className="grid grid-cols-10 gap-4 ">

                <div className="border border-teal-500  col-span-3 bg-teal-50 bg-opacity-50 p-4 rounded-lg shadow-md">
                    <div className="font-bold text-3xl text-center text-teal-500">声母</div>

                    <Shengmu setShengmu={setShengmu} ></Shengmu>

                </div>
                <div className=" justify-center  col-span-3 ">
                    <Shendiao setShendiao={setShendiao}></Shendiao>

                    <div className="text-3xl text-center text-pink-500">拼一拼，读一读吧！</div>

                    <Pinyin shengmu={shengmu} yunmu={yunmu} shendiao={shendiao}></Pinyin>

                </div>
                <div className="  border border-lime-500 col-span-4 bg-lime-50 bg-opacity-50 p-4 rounded-lg shadow-md">
                    <Yunmu setYunmu={setYunmu} ></Yunmu>
                </div>

            </div>

        </>
    );
}
