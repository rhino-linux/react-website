import React from "react";
import Link from "next/link";
import Image from 'next/image';

let state = 0;

function toggleMegaMenu(menuid) {
    const menu = document.getElementById(menuid);
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
        state = 1;
    } else {
        menu.classList.remove('block');
        menu.classList.add('hidden');
        state = 0;
    }
}

const baritems = [
    {
        link: "/",
        goto: "Home"
    },
    {
        link: "/download",
        goto: "Download"
    },
    {
        link: "https://blog.rhinolinux.org",
        goto: "Blog"
    },
    {
        link: "https://wiki.rhinolinux.org",
        goto: "Wiki"
    },
    {
        link: "https://discord.com/invite/reSvc8Ztk3",
        goto: "Discord"
    }
]

function NavBar() {
    return (
        <div>
            <nav className="w-full m-auto flex items-center justify-between">
                <div className="p-4">
                    <a href="/">
                        <Image src="/img/logo.png" alt="" width="200" height="200" className="w-[5vw]" />
                    </a>
                </div>
                <div className="p-2 px-4 text-center m-4 rounded-lg md:flex lg:gap-8 md:gap-4 hidden md:block">
                        {baritems.map((item) => (
                            <p><a href={item.link} key={item.link} className="text-xl text-white hover:text-rhino-purple transition-all">{item.goto}</a></p>
                        ))}
                </div>
                <div
                    className="p-2 px-4 cursor-pointer md:hidden"
                    onClick={() => toggleMegaMenu('mega-menu')}
                >
                    <h1 className="text-4xl text-white">☰</h1>
                </div>
            </nav>
            <div className="hidden transition-all w-full p-2" id="mega-menu">
                <div className="w-full m-auto">
                    <div className="text-2xl bg-site-300 rounded-lg p-8">
                        {baritems.map((item) => (
                            <li className="list-none p-4" key={item.link}>
                                <Link href={item.link}>
                                    <span className="text-white" onClick={(e) => e.stopPropagation()}>{item.goto}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NavBar;
