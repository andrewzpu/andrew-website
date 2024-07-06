import WindowStats from "./WindowStats";

export default function HeaderBar() {

    const tabs = ["first", "second", "third"];

    const tabClass = "w-32 h-16 text-center content-center border-black border-2 capitalize";

    return (
        <div className="bg-white">
            <div className="relative bottom-0 flex flex-row border-blue border-2 justify-center">
                {tabs.map((tab) => (
                    <p className={tabClass}>{tab}</p>
                ))}
            </div>
            <WindowStats />
        </div>
    )
}