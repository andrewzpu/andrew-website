"use client"

import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ['300', '500', '700'], subsets: ["latin"], variable: '--font-roboto', style: ['normal', 'italic'] });

export default function Home() {

    const timelineData = [
        {
            date: "09/24 - Present",
            role: "CSE Tutor",
            company: "UCSD",
            description: "Developing user-friendly applications and leading a team of developers."
        },
        {
            date: "06/24 - 08/24",
            role: "Software Engineering Intern",
            company: "General Atomics",
            description: "Assisted in building features for the main application."
        },
        {
            date: "12/22 - 02/24",
            role: "Research Volunteer",
            company: "The Knight Lab UCSD",
            description: "Worked on various projects, improving skills in React and Node.js."
        },
        {
            date: "12/22 - 02/24",
            role: "Research Volunteer",
            company: "The Knight Lab UCSD",
            description: "Worked on various projects, improving skills in React and Node.js."
        },
        {
            date: "06/21 - 11/21",
            role: "Researcher",
            company: "National Graphene Research and Development Center",
            description: "Worked on various projects, improving skills in React and Node.js."
        },
    ];

    const iconsData = [
        {
            title: "Languages",
            icons: [
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                    desc: "Java"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                    desc: "Python"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
                    desc: "C++"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
                    desc: "C"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                    desc: "JavaScript"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                    desc: "TypeScript"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
                    desc: "Bash"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg",
                    desc: "Haskell"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/labview/labview-original.svg",
                    desc: "LabVIEW"
                },
            ]
        },
        {
            title: "Web Dev",
            icons: [
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    desc: "HTML"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                    desc: "CSS"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                    desc: "MongoDB"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                    desc: "Express"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    desc: "React"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                    desc: "Tailwind"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                    desc: "Django"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
                    desc: "Svelte"
                },
            ]
        },
        {
            title: "Tools",
            icons: [
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                    desc: "Git"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                    desc: "GitHub"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
                    desc: "VS Code"
                }
            ]
        }
    ]

    const interestsData = [
        {
            title: "Fintech and Trading",
            description: "I'm fascinated by the intersection of finance and trading, and I want to learn more about the new technologies that have reshaped the financial services industry. In particular, I'm interested in learning how mathematics, statistics, and programming can all be combined to develop data-driven trading strategies, and I’m eager to explore how these algorithms can analyze market trends and optimize investment decisions."
        },
        {
            title: "AR / VR",
            description: "Virtual and augmented reality have changed the way we interact with digital environments, and I want to explore their applications in aspects of our everyday lives, like education, gaming, and remote collaboration. I'm excited to learn more about how AR and VR can help us push the boundaries of reality."
        },
        {
            title: "Game Development",
            description: "I've always enjoyed playing video games, and I love learning about the technology and creative processes that go into building them. I’m particularly interested in how to program the mechanics that drive engaging gameplay, such as physics simulation, CPU behavior, and player interactions."
        },
        {
            title: "Web Development",
            description: "Web development gives me the unique opportunity to combine artistic creativity with technical skill. After working on several web development projects in the past, I've found that I really enjoy creating dynamic pages that are catered to user and client requests."
        }
    ]

    let robotoClass = ` ${roboto.variable} font-roboto`

    return (
        <main className="h-auto w-screen border-black border-2">
            <header className="w-screen bg-navy items-center flex flex-col p-6 gap-2 lg:p-12">
                <div className="rounded-full overflow-hidden w-32 h-32 my-4 lg:w-60 lg:h-60">
                    <Image
                        src="/Images/AndrewPuPFP2.png"
                        width={320}
                        height={320}
                        alt="Profile Pic"
                    />
                </div>
                <p className={robotoClass + " text-white font-roboto text-3xl lg:text-4xl font-bold"}>Andrew Pu</p>
                <p className={robotoClass + " text-white font-roboto text-lg md:text-lg lg:text-xl font-light"}>Computer Science @ UCSD</p>
            </header>
            <div className="bg-grey_1 items-center flex flex-col gap-12 p-20">
                <h1 className={robotoClass + " text-4xl font-bold text-center"}>About Me</h1>
                <div className={robotoClass + " flex-2 max-w-2xl text-xl font-light text-wrap flex flex-col"}>
                    <p>Hello! I'm Andrew Pu, a junior at UCSD studying Computer Science.
                        I have a passion for solving challenging problems and puzzles, as well as crafting innovative software solutions.
                        I thrive on tackling complex issues and turning ideas into reality through coding and creativity.
                        I’m excited to explore new technologies and contribute to projects that make a meaningful impact.
                    </p>
                </div>
                <h1 className={robotoClass + " text-4xl font-bold text-center pt-12"}>Experience</h1>
                <div className="flex flex-row">
                    <div className={robotoClass + " text-xl font-light text-wrap flex flex-col"}>
                        <div className="relative">
                            {timelineData.map((item, index) => (
                                <div key={"experience" + index} className="mb-8">
                                    <div className="absolute left-0 top-0 h-full border-l-2 border-gray-400"></div>
                                    <div className="ml-8">
                                        <h2 className="text-xl font-semibold">{item.date}</h2>
                                        <h3 className="text-lg font-medium">{item.role} at {item.company}</h3>
                                        <p className="text-base">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h1 className={robotoClass + " text-4xl font-bold text-center pt-12"}>Technologies</h1>
                <div className={robotoClass + " flex-2 text-lg font-light text-wrap flex flex-col items-center lg:items-start"}>
                    {iconsData.map((item, index) => (
                        <div key={item.title + "Section"} className="flex flex-col lg:flex-row items-center gap-4 p-12 m-4 w-full rounded-2xl bg-grey_2">
                            <p className="pb-8 lg:pb-0 px-8 w-52 flex-none text-center text-3xl lg:text-2xl"><b>{item.title}</b></p>
                            <div className="flex flex-row flex-wrap justify-center gap-4 items-center gap-y-12">
                                {item.icons.map((icon) => (
                                    <div key={icon.desc + "Icon"} className="relative group flex-0 min-w-20">
                                        <Image
                                            key={icon.desc + "Icon"}
                                            src={icon.src}
                                            width={80}
                                            height={80}
                                            alt={icon.desc}
                                            className="group-hover:scale-110 transition hover:cursor-pointer"
                                        />
                                        <p className="absolute w-full text-center top-[90px] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">{icon.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className={robotoClass + " text-4xl font-bold text-center pt-12"}>Interests</h1>
                <div className={robotoClass + " flex-2 max-w-2xl text-lg font-light text-wrap"}>
                    <ul className="list-disc pl-8 list-outside space-y-4">
                        {interestsData.map((item, index) => (
                            <li key={"interest" + index}>
                                <b>{item.title}</b> - {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <h1 className={robotoClass + " text-4xl font-bold text-center pt-12"}>Organizations</h1>
                <div className="flex flex-row gap-12 w-auto max-w-screen">
                    <div className={robotoClass + " flex-1 min-w-0 max-w-3xl text-xl font-light text-wrap flex flex-col items-center border-black border-2"}>
                        <p>Triton Software Engineering</p>
                    </div>
                    <div className={robotoClass + " flex-1 min-w-0 max-w-3xl text-xl font-light text-wrap flex flex-col items-center border-black border-2"}>
                        <p>HKN</p>
                        <p>test</p>
                        <p>fdsafdsfdsfdsaf</p>
                        <p>gfsgfdsgfdsgfdsgsfdgfdsgdsgfgdsgfdsg</p>
                    </div>
                    <div className={robotoClass + " flex-1 min-w-0 max-w-3xl text-xl font-light text-wrap flex flex-col items-center border-black border-2"}>
                        <p>Triton Consulting Group</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
