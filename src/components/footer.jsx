import React from "react";
import Link from "next/link";

const footerItems = [
    { name: 'Mission Statement', href: '/statement/' },
    { name: 'Code of Conduct', href: '/code/'},
    { name: 'Branding', href: 'https://wiki.rhinolinux.org/dev/brand' },
    { name: 'Unicorn', href: '/unicorn/' }
];

const organisationalItems = [
    { name: 'Source Code', href: 'https://github.com/rhino-linux' },
    { name: 'Discord', href: 'https://discord.com/invite/reSvc8Ztk3' },
    { name: 'Donate', href: 'https://ko-fi.com/rhinolinux' },
]

function Footer() {
    return(
        <footer className="p-8">
            <hr className="md:w-[85%] h-1 mx-auto my-4 bg-site-300 border-0 rounded" />
            <p className="mb-2 text-center text-off-white text-lg">
                {footerItems.map((item, index) => (
                <span key={index}>
                    <Link href={item.href} className="text-rhino-purple">
                        {item.name}
                    </Link>
                    {index < footerItems.length - 1 && ' | '}
                </span>
                ))}
            </p>
            <p className="text-center text-off-white text-lg">
                {organisationalItems.map((item, index) => (
                    <span key={index}>
                        <Link href={item.href} className="text-rhino-purple">
                            {item.name}
                        </Link>
                        {index < organisationalItems.length - 1 && ' | '}
                    </span>
                ))}
            </p>
        </footer>
    );
}

export default Footer;