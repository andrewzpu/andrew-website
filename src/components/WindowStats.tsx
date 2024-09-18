"use client"

import useIsMobile from "@/hooks/useIsMobile";
import useIsTablet from "@/hooks/useIsTablet";
import useScrollY from "@/hooks/useScrollY";

export default function WindowStats() {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const scrollY = useScrollY();

    return (
        <div className="fixed bottom-0 left-0">
            <p>Mobile: {isMobile.toString()}</p>
            <p>Tablet: {isTablet.toString()}</p>
            <p>ScrollY: {scrollY.toString()}</p>
        </div>
    )
}