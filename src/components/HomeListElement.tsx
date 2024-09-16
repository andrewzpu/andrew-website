import React, { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import Image from 'next/image'


import "../app/globals.css";

export type HomeListElementProps = {
    text: string;
    url: string;
    className?: string;
}

export default function HomeListElement(props: HomeListElementProps) {

    let outerClass = "relative group w-auto";
    let boxClass = "absolute t-0 bg-black w-0 h-full group-hover:w-full transition-width duration-100";
    let textClass = "relative z-10 group-hover:text-white";

    if (props.className) {
        outerClass += " " + props.className;
    }

    const text = props.text;
    const url = props.url;

    return (
        <div className={outerClass}>
            <div>
                <div className={boxClass} />
                <a href={url} className={textClass}>{text}</a>
            </div>
        </div>
    )
}