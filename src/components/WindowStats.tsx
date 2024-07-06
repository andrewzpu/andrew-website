"use client"

import useWindowSize from "@/hooks/useWindowSize";
import useIsMobile from "@/hooks/useIsMobile";
import useIsTablet from "@/hooks/useIsTablet";

export default function WindowStats() {
    const { width, height } = useWindowSize();
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    return (
        <div className="absolute bottom-0 left-0">
            <p>Width: {width}</p>
            <p>Height: {height}</p>
            <p>Mobile: {isMobile.toString()}</p>
            <p>Tablet: {isTablet.toString()}</p>
        </div>
    )
}