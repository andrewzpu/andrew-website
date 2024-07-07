import WindowStats from "./WindowStats";

export default function HeaderBar() {

    const tabs = ["first", "second", "third"];

    let tabClass = ""
    tabClass += " bg-white w-32 h-16 text-center content-center capitalize transition hover:shadow-[0_10px_60px_-10px_rgba(0,0,0,0.3)] hover:scale-110 hover:cursor-pointer";

    return (
        <div className="relative w-full h-full flex flex-row justify-center">
            {tabs.map((tab) => (
                <p className={tabClass}>{tab}</p>
            ))}
        </div>
    )
}