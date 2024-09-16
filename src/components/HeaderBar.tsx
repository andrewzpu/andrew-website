import WindowStats from "./WindowStats";

export default function HeaderBar() {

    const pages = ["Home", "About Me"];
    const linkMap = new Map();
    linkMap.set("Home", "/home")
    linkMap.set("About Me", "/about")

    let tabClass = ""
    tabClass += " bg-transparent w-32 h-16 text-center content-center capitalize transition hover:shadow-[0_10px_60px_-10px_rgba(0,0,0,0.3)] hover:scale-110 hover:cursor-pointer";

    return (
        <div className="relative w-full h-full flex flex-row justify-center">
            {pages.map((page) => (
                <a href={linkMap.get(page)} className={tabClass}>{page}</a>
            ))}
        </div>
    )
}