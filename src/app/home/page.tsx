"use client"

import Image from "next/image";
import { Roboto } from "next/font/google";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ["latin"], variable: '--font-roboto', style: ['normal', 'italic'] });

export default function Home() {

    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    let pageClass = "h-screen w-screen flex justify-center"
    let containerClass = ""
    let pfpClass = ""
    let rightClass = ""
    let textClass = ""

    if (isMobile) {
        containerClass += " items-center justify-center flex flex-col";
        pfpClass += " relative top-0 rounded-full overflow-hidden w-60 h-60"
        rightClass += " pt-16 flex items-center"
        textClass += ` ${roboto.variable} font-roboto text-4xl font-light`
    } else if (isTablet) {
        containerClass += " items-center justify-center flex flex-col";
        pfpClass += " relative top-0 rounded-full overflow-hidden w-80 h-80"
        rightClass += " pt-24 flex items-center"
        textClass += ` ${roboto.variable} font-roboto text-6xl font-light`
    } else {
        containerClass = " items-center justify-center flex flex-row"
        pfpClass += " relative top-0 rounded-full overflow-hidden w-80 h-80"
        rightClass += " h-80 flex items-center pl-32"
        textClass += `${roboto.variable} font-roboto text-6xl font-light`
    }

    return (
        <main className={pageClass}>
            <div className={containerClass}>
                <div id="pfp" className={pfpClass}>
                    <Image
                        src="/AndrewPuPFP_Square.JPG"
                        width={320}
                        height={320}
                        alt="Profile Pic"
                    />
                </div>
                <div id="right" className={rightClass}>
                    <h1 className={textClass}>Hi, I'm Andrew Pu</h1>
                </div>
            </div>
        </main>
    );
}
