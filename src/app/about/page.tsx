"use client"

import Image from "next/image";
import { Roboto } from "next/font/google";
import useIsTablet from "@/hooks/useIsTablet";
import useIsMobile from "@/hooks/useIsMobile";

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ["latin"], variable: '--font-roboto', style: ['normal', 'italic'] });

export default function Home() {

    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    let pageClass = ""
    let containerClass = ""
    let splitDivClass = ""
    let pfpClass = ""
    let headerClass = ""
    let textDivClass = ""
    let imageClass = ""

    if (isMobile) {
        pageClass += " h-auto w-screen"
        containerClass += " items-center justify-center flex flex-col";
    } else if (isTablet) {
        pageClass += " h-auto w-screen"
        containerClass += " items-center justify-center flex flex-col";
    } else {
        pageClass += " h-screen w-screen"
        containerClass += " items-center flex flex-col gap-20 p-40";
        splitDivClass += " flex flex-row items-center"
        headerClass += ` ${roboto.variable} font-roboto text-4xl font-bold text-center pb-12`
        pfpClass += " rounded-full overflow-hidden w-80 h-80"
        textDivClass += ` p-12 flex-1 max-w-2xl ${roboto.variable} font-roboto text-2xl font-light text-center text-wrap flex flex-col`
        imageClass += " rounded-[40px] overflow-hidden"

    }

    return (
        <main className={pageClass}>
            <div className={containerClass}>
                <div className={splitDivClass}>
                    <div className={pfpClass}>
                        <Image
                            src="/Images/AndrewPuPFP2.png"
                            width={320}
                            height={320}
                            alt="Profile Pic"
                        />
                    </div>
                    <div className={textDivClass}>
                        <h1 className={headerClass}>About Me</h1>
                        <p>My name is <b>Andrew Pu</b>. I'm a Junior at <b>UCSD</b> studying <b>Computer Science</b>. I have a passion for software engineering, and I love tackling complex problems through a technological lens.</p>
                    </div>
                </div>
                <div className={splitDivClass}>
                    <div className={textDivClass}>
                        <h1 className={headerClass}>Experiences</h1>
                        <p>University of California, San Diego</p>
                        <p>September 2022 - June 2026</p>
                    </div>
                    <div className={imageClass}>
                        <Image
                            src="/Images/GeiselLibrary.jpg"
                            width={320}
                            height={320}
                            alt="Profile Pic"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
