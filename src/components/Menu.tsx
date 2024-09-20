"use client"

import React, { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import Image from 'next/image'
import { Roboto } from "next/font/google";
import "../app/globals.css";

const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ["latin"], variable: '--font-roboto', style: ['normal', 'italic'] });



export default function Menu({ first = false }) {

    const [firstOpened, setFirstOpened] = useState(first);
    const [isOpened, setIsOpened] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        if (!isOpened) {
            setIsOpened(true);
        }
    };

    const handleBackClick = () => {
        if (isOpened) {
            setIsOpened(false);
        }

        const tipMessage = document.getElementById("tipMessage")

        if (tipMessage != null) {
            tipMessage.style.opacity = "100"
            tipMessage.style.transitionDuration = "3s"
            tipMessage.style.transitionDelay = "5s"
        }
    }

    const handleHover = () => {
        const tipMessage = document.getElementById("navMessage")

        if (tipMessage != null) {
            tipMessage.style.opacity = "0"
            tipMessage.style.transitionDuration = "0.5s"
            tipMessage.style.transitionDelay = "0s"
        }
    }

    const handleUnhover = () => {
        const tipMessage = document.getElementById("tipMessage")

        if (tipMessage != null && !isOpened) {
            tipMessage.style.opacity = "100"
            tipMessage.style.transitionDuration = "3s"
            tipMessage.style.transitionDelay = "5s"
        }

    }

    const inactiveClass = 'w-8 duration-100 hover:w-24 h-8 hover:cursor-pointer hover:delay-0 delay-100'
    const activeClass = 'w-full h-24 duration-500'
    let menuClass = `group p-4 z-50 relative top-1 bg-white shadow-[0_0_5px_0px_rgba(0,0,0,0.5)] rounded-2xl transition-all ${isOpened ? activeClass : inactiveClass}`;

    let containerClass = `z-50 fixed top-0 left-0 w-screen p-4`
    let backgroundClass = `fixed bottom-0 left-0 w-screen h-screen ${isOpened ? 'backdrop-blur backdrop-brightness-75 block' : 'hidden'}`

    let buttonClass = `p-1.5 absolute top-0 left-0 h-8 flex flex-row ${isOpened ? 'opacity-0 duration-200' : 'opacity-100 duration-200 delay-300'}  transition-opacity`
    let innerClass = `absolute top-0 left-0 w-screen h-full p-4 ${isOpened ? 'opacity-100 duration-200 delay-300' : 'duration-100 opacity-0 pointer-events-none'}  transition-opacity`
    let menuTextClass = ` ${roboto.variable} font-roboto font-normal relative p-[2.5px] left-2 leading-4 z-50 opacity-0 duration-200 group-hover:opacity-100 group-hover:delay-100 transition-opacity`


    return (
        <div id="container" className={containerClass}>
            <div id="menu" className={menuClass} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleUnhover}>
                <div className={buttonClass}>
                    <Image
                        src="/Icons/MenuIcon.png"
                        width={20}
                        height={20}
                        alt="Menu Icon"
                    />
                    <p className={menuTextClass}>Menu</p>
                </div>
                <div id="innerClass" className={innerClass}>
                    <HeaderBar />
                </div>
            </div>
            <div id="background" className={backgroundClass} onClick={handleBackClick} />
        </div >
    )
}