import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ["latin"], variable: '--font-roboto', style: ['normal', 'italic'] });

export default function HeaderBar() {

    const pages = [
        {
            title: "Home",
            url: "/home"
        },
        {
            title: "About Me",
            url: "/about"
        },
    ];

    return (
        <div className="relative w-full h-full flex flex-row justify-center">
            {pages.map((page) => (
                <a
                    key={page.title + "Link"}
                    href={page.url}
                    className={`${roboto.variable} font-roboto font-light text-xl bg-transparent w-32 h-16 text-center content-center capitalize transition hover:shadow-[0_10px_60px_-10px_rgba(0,0,0,0.3)] hover:scale-110 hover:cursor-pointer`}
                >
                    {page.title}
                </a>
            ))}
        </div>
    )
}