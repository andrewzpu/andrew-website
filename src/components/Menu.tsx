"use client"

import React, { useEffect, useState } from 'react';

export default function Menu() {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        console.log("clicked")
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

    const inactiveClass = 'w-8 hover:w-16 h-8 hover:cursor-pointer'
    const activeClass = 'w-full hover:w-{menuWidth} h-32'

    let menuClass = 'z-50 relative bg-white shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] rounded-[16px]';
    menuClass += ` transition-all ${isOpened ? activeClass : inactiveClass}`;

    let containerClass = `z-50 fixed top-0 left-0 w-full p-4`

    let backgroundClass = `fixed bottom-0 left-0 w-screen h-screen ${isOpened ? 'backdrop-blur backdrop-brightness-50 block' : 'hidden'}`

    return (
        <div id="container" className={containerClass}>
            <div id="menu" className={menuClass} onClick={handleClick}>

            </div>
            <div id="background" className={backgroundClass} onClick={handleBackClick} />
        </div >
    )
}