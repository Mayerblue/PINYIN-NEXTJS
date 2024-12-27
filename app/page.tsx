"use client"
import Shengmu from '@/app/ui/shengmu';
import Yunmu from '@/app/ui/yunmu';
import Shendiao from '@/app/ui/shendiao';
import Pinyin from '@/app/ui/pinyin';
import PinyinProvider from '@/app/hooks/PinyinProvider'
export default function Page() {
    return (
        <>
            <PinyinProvider
            >
                <div className="grid grid-cols-10 gap-4 ">

                    <div className="border border-teal-500  col-span-3 bg-teal-50 bg-opacity-50 p-4 rounded-lg shadow-md">
                        <div className="font-bold text-3xl text-center text-teal-500">声母</div>

                        <Shengmu ></Shengmu>

                    </div>
                    <div className=" justify-center  col-span-3 ">
                        <Shendiao></Shendiao>

                        <div className="text-3xl text-center text-pink-500">拼读</div>

                        <Pinyin></Pinyin>

                    </div>
                    <div className="  border border-lime-500 col-span-4 bg-lime-50 bg-opacity-50 p-4 rounded-lg shadow-md">
                        <Yunmu></Yunmu>
                    </div>

                </div>
            </PinyinProvider>
        </>
    );
}
