// 创建一个 Provider 组件，用于提供 Context 的值

import { ReactNode,createContext,useState } from 'react';

interface PinyinContextValue {
    shengmuSelect: string;
    yunmuSelect: string;
    shendiaoSelect: number;
    updateContext: (value: string,value2: string,value3: number) => void;
}

// 创建一个 Context 对象
export const PinyinContext = createContext<PinyinContextValue>({
    shengmuSelect: '',
    yunmuSelect: '',
    shendiaoSelect: 0,
    updateContext: () => { },
});

export default function PinyinProvider({ children }: { children: ReactNode }) {
    const [shengmuSelect,setShengmu] = useState('');
    const [yunmuSelect,setYunmu] = useState('');
    const [shendiaoSelect,setShendiao] = useState(0);

    // 定义一个函数，用于更新 Context 的值
    const updateContext = (newShengmu: string,newYunmu: string,newShendiao: number) => {
        setShengmu(newShengmu);
        setYunmu(newYunmu);
        setShendiao(newShendiao);
    };

    return (
        <PinyinContext.Provider value={{ shengmuSelect,yunmuSelect,shendiaoSelect,updateContext }}>
            {children}
        </PinyinContext.Provider>
    );
}
