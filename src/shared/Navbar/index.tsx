"use client";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdCall, IoMdArrowDropdown } from 'react-icons/io';
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
        { title: "Resources", link: "/resources", isDropdown: true },
    ];

    const rightNav = [
        { title: "Trek by Days", items: ["5 Days Trek", "10 Days Trek", "15 Days Trek"] },
        { title: "Trip by Days", items: ["5 Days Trip", "10 Days Trip", "15 Days Trip"] },
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
                    {/* Left side of navbar */}
                    {nav.map((item, index) => (
                        item.isDropdown ? (
                            <Dropdown key={index } className='bg-primary/90 text-white rounded-sm ' placement='bottom-start'>
                                <DropdownTrigger>
                                    <div className="group relative cursor-pointer font-medium tracking-wide flex items-center gap-2">
                                        <p>{item.title}</p>
                                        <IoMdArrowDropdown size={18} />
                                        <span
                                            className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                                                isActive(item.link) ? 'w-[90%]' : 'w-0'
                                            } group-hover:w-4/5`}
                                        ></span>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Resources Menu"  variant='light'>
                                    <DropdownItem key="contact-us">
                                        <Link href="/contact-us">Contact Us</Link>
                                    </DropdownItem>
                                    <DropdownItem key="about-us">
                                        <Link href="/about-us">About Us</Link>
                                    </DropdownItem>
                                    <DropdownItem key="travel-blogs">
                                        <Link href="/travel-blogs">Travel Blogs</Link>
                                    </DropdownItem>
                                    <DropdownItem key="travel-guides">
                                        <Link href="/travel-guides">Travel Guides</Link>
                                    </DropdownItem>
                                    <DropdownItem key="faqs">
                                        <Link href="/faqs">FAQs</Link>
                                    </DropdownItem>
                                    <DropdownItem key="travel-permits">
                                        <Link href="/travel-permits">Travel Permits</Link>
                                    </DropdownItem>
                                    <DropdownItem key="terms-conditions">
                                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
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
                        )
                    ))}

                    {/* Right side of navbar */}
                    <div className="ml-auto flex gap-8">
                        {rightNav.map((item, index) => (
                            <Dropdown key={index} className='min-w-[150px] bg-primary/90 text-white rounded-sm ' placement='bottom-start'>
                                <DropdownTrigger>
                                    <div className="group relative cursor-pointer font-medium tracking-wide flex items-center gap-2">
                                        <p>{item.title}</p>
                                        <IoMdArrowDropdown size={18} />
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label={`${item.title} Menu`} variant='light'>
                                    {item.items.map((subItem, subIndex) => (
                                        <DropdownItem key={subIndex}>
                                            <Link href={`/${item.title.toLowerCase().replace(/ /g, "-")}-${subItem.toLowerCase().replace(/ /g, "-")}`}>{subItem}</Link>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ))}
                    </div>
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
                    item.isDropdown ? (
                        <Dropdown key={index} className='bg-primary/90 text-white rounded-sm ' placement='bottom-start' >
                            <DropdownTrigger>
                                <div className="group relative cursor-pointer font-medium tracking-wide flex items-center gap-2">
                                        <p>{item.title}</p>
                                        <IoMdArrowDropdown size={18} />
                                        <span
                                            className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                                                isActive(item.link) ? 'w-full' : 'w-0'
                                            } group-hover:w-4/5`}
                                        ></span>
                                    </div>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Resources Menu"  variant='light'>
                                <DropdownItem key="contact-us">
                                    <Link href="/contact-us">Contact Us</Link>
                                </DropdownItem>
                                <DropdownItem key="about-us">
                                    <Link href="/about-us">About Us</Link>
                                </DropdownItem>
                                <DropdownItem key="travel-blogs">
                                    <Link href="/travel-blogs">Travel Blogs</Link>
                                </DropdownItem>
                                <DropdownItem key="travel-guides">
                                    <Link href="/travel-guides">Travel Guides</Link>
                                </DropdownItem>
                                <DropdownItem key="faqs">
                                    <Link href="/faqs">FAQs</Link>
                                </DropdownItem>
                                <DropdownItem key="travel-permits">
                                    <Link href="/travel-permits">Travel Permits</Link>
                                </DropdownItem>
                                <DropdownItem key="terms-conditions">
                                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
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
                    )
                ))}
                <div className="ml-auto flex gap-8">
                        {rightNav.map((item, index) => (
                            <Dropdown key={index} className=' min-w-[150px] bg-primary/90 text-white rounded-sm ' placement='bottom-start' >
                                <DropdownTrigger>
                                    <div className="group relative cursor-pointer font-medium tracking-wide flex items-center gap-2">
                                        <p>{item.title}</p>
                                        <IoMdArrowDropdown size={18} />
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label={`${item.title} Menu`}  variant='light'>
                                    {item.items.map((subItem, subIndex) => (
                                        <DropdownItem key={subIndex}>
                                            <Link href={`/${item.title.toLowerCase().replace(/ /g, "-")}-${subItem.toLowerCase().replace(/ /g, "-")}`}>{subItem}</Link>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ))}
                    </div>
            </section>
        </main>
    );
};

export default Navbar;
