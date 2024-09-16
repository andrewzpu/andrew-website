"use client"

import Image from "next/image";
import { Roboto } from "next/font/google";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";
import HomeListElement from "@/components/HomeListElement";

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ["latin"], variable: '--font-roboto', style: ['normal', 'italic'] });

export default function Home() {

    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    let pageClass = "flex justify-center"
    let containerClass = "border-2 border-black"
    let pfpClass = ""
    let rightClass = ""
    let textClass = ""
    let listClass = ""
    let listElementClass = ""

    if (isMobile) {
        pageClass += " h-auto w-screen"
        containerClass += " items-center justify-center flex flex-col";
        pfpClass += " relative mt-20 rounded-full overflow-hidden w-60 h-60 grow"
        rightClass += " mt-16 flex items-center"
        textClass += ` ${roboto.variable} font-roboto text-4xl font-light text-center`
        listClass += " my-2 flex flex-col"
        listElementClass += " m-1 text-2xl font-light text-center"
    } else if (isTablet) {
        pageClass += " h-auto w-screen"
        containerClass += " items-center justify-center flex flex-col";
        pfpClass += " relative mt-24 rounded-full overflow-hidden w-80 h-80"
        rightClass += " relative mt-20 flex items-center"
        textClass += ` ${roboto.variable} font-roboto text-6xl font-light text-center`
        listClass += "my-4 flex flex-col"
        listElementClass += "m-1 text-2xl font-light text-center"
    } else {
        pageClass += " h-screen w-screen"
        containerClass = " items-center justify-center flex flex-row"
        pfpClass += " relative top-0 rounded-full overflow-hidden w-80 h-80"
        rightClass += " h-80 flex items-center pl-32"
        textClass += `${roboto.variable} font-roboto text-6xl font-light`
        listClass += "my-4 flex flex-col"
        listElementClass += "m-2 text-3xl font-light text-center"
    }

    return (
        <main className={pageClass}>
            <div className={containerClass}>
                <div id="pfp" className={pfpClass}>
                    <Image
                        src="/AndrewPuPFP_Square.jpg"
                        width={320}
                        height={320}
                        alt="Profile Pic"
                    />
                </div>
                <div id="right" className={rightClass}>
                    <div className="flex flex-col">
                        <h1 className={textClass}>Hi, I'm Andrew Pu</h1>
                        <div className={listClass}>
                            <HomeListElement text="About Me" url="/about" className={listElementClass} />
                            <HomeListElement text="Projects" url="https://www.google.com" className={listElementClass} />
                            <HomeListElement text="Github" url="https://www.github.com/andrewzpu" className={listElementClass} />
                            <HomeListElement text="LinkedIn" url="https://www.linkedin.com/in/andrewzpu" className={listElementClass} />
                            <HomeListElement text="andrewzpu@gmail.com" url="mailto: andrewzpu@gmail.com" className={listElementClass} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
