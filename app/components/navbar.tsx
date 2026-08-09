"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/algorithms", label: "Algorithms" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className={"flex gap-6 items-center px-6 py-4 border-b sticky top-0 bg-white"}>
            <span className={"text-lg font-bold"}>Javiz Home</span>

            {/*desktop link*/}
            <div className={"ml-auto gap-6 hidden md:flex"}>
                {/*<Link className={"text-sm text-gray-600 transition-colors hover:text-black"}
                    href="/">Home</Link>
                <Link className={"text-sm text-gray-600 transition-colors hover:text-black"}
                    href="/algorithms">Algorithms</Link>
                <Link className={"text-sm text-gray-600 transition-colors hover:text-black"}
                    href="/blog">Blog</Link>
                <Link className={"text-sm text-gray-600 transition-colors hover:text-black"}
                    href="/about">About</Link>*/}
                {links.map((link) => (
                    <Link className={"text-sm text-gray-600 transition-colors hover:text-black"}
                        key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className={"relative ml-auto md:hidden"}>
                {/*Mobile links*/}
                <button
                    className={"ml-auto md:hidden"}
                    aria-label="Open Menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X className={"h-5 w-5"} /> : <Menu className={"h-5 w-5"} />}
                </button>

                {/* Mobile dropwown menu */}
                {
                    open && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg flex flex-col gap-2 p-4 z-50">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-gray-600 hover:text-black transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )
                }
            </div>
        </nav >
    )
}