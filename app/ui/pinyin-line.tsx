"use client"
import React,{ useRef,useEffect,useState } from "react";

export default function PinyinLine({ children }: { children: React.ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [canvasWidth,setCanvasWidth] = useState(0)
    const canvasHeight = 60

    //获取children中文字的长度
    const text = (children as React.ReactNode[])[1]

    useEffect(() => {
        const textLength = text?.toString().length;
        if (!textLength) return;
        const getCurrentWidth = textLength * 20 + 40;
        setCanvasWidth(getCurrentWidth)

        setTimeout(() => {
            drawLine(text.toString(),getCurrentWidth);
        },100)
    },[text]);


    const drawLine = (text: string,canvasWidth: number) => {

        //获取ctx
        const ctx = canvasRef.current?.getContext('2d')
        if (!ctx) return;
        //清空
        ctx.clearRect(0,0,canvasWidth,canvasHeight)
        //设置字体
        ctx.font = "48px serif";
        ctx.fillStyle = 'black'
        // 绘制文本
        ctx.fillText(text,20,42);
        //开始绘制四线格
        ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0,0 + 1);
        ctx.lineTo(canvasWidth,0 + 1);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([6,6]);
        ctx.moveTo(0,canvasHeight / 3);
        ctx.lineTo(canvasWidth,canvasHeight / 3);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([6,6]);
        ctx.moveTo(0,canvasHeight * 2 / 3);
        ctx.lineTo(canvasWidth,canvasHeight * 2 / 3);
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.moveTo(0,canvasHeight - 1);
        ctx.lineTo(canvasWidth,canvasHeight - 1);
        ctx.stroke();
    }

    return <>
        <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef}></canvas>
    </>;
}
