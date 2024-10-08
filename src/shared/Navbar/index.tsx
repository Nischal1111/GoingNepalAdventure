"use client";
import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdCall } from 'react-icons/io';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const nav = [
        { title: "Home", link: "/" },
        { title: "Trekking", link: "/trekking" },
        { title: "Tours", link: "/tours" },
        { title: "Activities", link: "/activities" },
        { title: "Destinations", link: "/destinations" },
        { title: "Contact Us", link: "/contact-us" },
        { title: "About Us", link: "/about-us" }
    ];

    const isActive = (path: string) => pathname === path;

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="w-full">
            <div className={`fixed top-0 left-0 right-0 transition-transform z-[9999999] duration-300 ease-in-out ${
                isScrolled ? 'translate-y-0' : '-translate-y-full'
            }`}>
                <section className={`px-16 py-3 bg-primary text-white flex gap-8 items-center z-[9999999] font-semibold tracking-wide transition-opacity duration-300 ease-in-out ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                }`}>
                    {nav.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <div className="group relative">
                                <p>{item.title}</p>
                                <span
                                    className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                                        isActive(item.link) ? 'w-full' : 'w-0'
                                    } group-hover:w-full`}
                                ></span>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>

            {!isScrolled && (
                <section className="flex items-center justify-between py-2 px-12 z-[9999999]">
                    <div className="flex gap-10 items-center">
                        <Link href={"/"}>
                            <Image src={"/assets/logo.png"} alt="GoingNepalLogo" height={1000} width={1000} className="object-contain h-16 w-28" />
                        </Link>
                        <div className="flex gap-2 items-center">
                            <IoMdCall size={18} />
                            <p className="font-semibold">+977 9867429313</p>
                        </div>
                    </div>
                    <Button className="rounded-md bg-primary text-white px-12">Plan trip</Button>
                </section>
            )}

            <section className={`px-16 py-3 bg-primary text-white flex gap-8 items-center font-semibold tracking-wide z-[9999999] transition-opacity duration-300 ease-in-out ${
                isScrolled ? 'opacity-0' : 'opacity-100'
            }`}>
                {nav.map((item, index) => (
                    <Link key={index} href={item.link}>
                        <div className="group relative">
                            <p>{item.title}</p>
                            <span
                                className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                                    isActive(item.link) ? 'w-full' : 'w-0'
                                } group-hover:w-full`}
                            ></span>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default Navbar;