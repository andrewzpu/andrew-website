"use client"

import React, { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import Image from 'next/image'


import "../app/globals.css";

export type MenuProps = {
    first: boolean;
}

Menu.defaultProps = {
    first: false
};

export default function Menu(props: MenuProps) {

    const firstTime = props.first

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
        const tipMessage = document.getElementById("tipMessage")

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

    const inactiveClass = 'w-8 duration-300 hover:w-24 h-8 hover:cursor-pointer hover:delay-0 delay-200'
    const activeClass = 'w-full h-24'
    let menuClass = `group p-4 z-50 relative top-1 bg-white shadow-[0_0_5px_0px_rgba(0,0,0,0.5)] rounded-2xl transition-all duration-500 ${isOpened ? activeClass : inactiveClass}`;

    let containerClass = `z-50 fixed top-0 left-0 w-screen p-4`

    let backgroundClass = `fixed bottom-0 left-0 w-screen h-screen ${isOpened ? 'backdrop-blur backdrop-brightness-75 block' : 'hidden'}`

    let buttonClass = `p-1.5 absolute top-0 left-0 h-8 flex flex-row ${isOpened ? 'opacity-0 duration-200' : 'opacity-100 duration-200 delay-500'}  transition-opacity`
    let innerClass = `absolute top-0 left-0 w-full h-full p-4 ${isOpened ? 'opacity-100 duration-200 delay-500' : 'duration-200 opacity-0'}  transition-opacity`
    let menuTextClass = 'relative p-0.5 left-2 leading-4 z-50 opacity-0 delay-100 duration-200 group-hover:opacity-100 group-hover:delay-200 transition-opacity'

    let messageClass = `absolute top-6 left-16 flex flex-row gap-1 text-grey opacity-100 transition-opacity animate-side-bounce`

    return (
        <div id="container" className={containerClass}>
            <div id="menu" className={menuClass} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleUnhover}>
                <div className={buttonClass}>
                    <Image
                        src="/MenuIcon.png"
                        width={20}
                        height={20}
                        alt="Menu Icon"
                    />
                    <p className={menuTextClass}>Menu</p>
                </div>
                <div className={innerClass}>
                    <HeaderBar />
                </div>
            </div>
            <div id="background" className={backgroundClass} onClick={handleBackClick} />
            {firstTime &&
                <div id="tipMessage" className={messageClass}>
                    <div className="w-5 h-5 m-0.5">
                        <Image
                            src="/Left.png"
                            width={20}
                            height={20}
                            alt="Left Arrow"
                        />
                    </div>
                    <p>Click Here</p>
                </div>
            }
        </div >
    )
}