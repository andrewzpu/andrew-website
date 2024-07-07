"use client"

import React, { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import Image from 'next/image'

export default function Menu() {

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
    }


    const inactiveClass = 'w-8 duration-300 hover:w-24 h-8 hover:cursor-pointer hover:delay-0 delay-200'
    const activeClass = 'w-full h-24'
    let menuClass = `group p-4 z-50 relative top-1 bg-white shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] rounded-2xl transition-all duration-500 ${isOpened ? activeClass : inactiveClass}`;

    let containerClass = `z-50 fixed top-0 left-0 w-full p-4`

    let backgroundClass = `fixed bottom-0 left-0 w-screen h-screen ${isOpened ? 'backdrop-blur backdrop-brightness-75 block' : 'hidden'}`

    let buttonClass = `p-1.5 absolute top-0 left-0 h-8 flex flex-row ${isOpened ? 'opacity-0 duration-200' : 'opacity-100 duration-200 delay-500'}  transition-opacity`
    let innerClass = `absolute top-0 left-0 w-full h-full p-4 ${isOpened ? 'opacity-100 duration-200 delay-500' : 'duration-200 opacity-0'}  transition-opacity`
    let menuTextClass = 'relative p-0.5 left-2 leading-4 z-50 opacity-0 delay-100 duration-200 group-hover:opacity-100 transition-opacity'

    return (
        <div id="container" className={containerClass}>
            <div id="menu" className={menuClass} onClick={handleClick}>
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
        </div >
    )
}