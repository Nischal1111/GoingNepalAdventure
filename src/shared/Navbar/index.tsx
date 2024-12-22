"use client";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Accordion, AccordionItem } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoMdCall, IoMdArrowDropdown } from 'react-icons/io';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    
    const nav = [
        { title: "Home", link: "/" },
        { title: "Trekking", link: "/trekking" },
        { title: "Tours", link: "/tours" },
        { title: "Wellness", link: "/wellness" },
        { title: "Activities", link: "/activities" },
        { 
            title: "Destinations", 
            isDropdown: true,
            items: [
                { title: "Nepal", href: "/destinations/nepal" },
                { title: "Bhutan", href: "/destinations/bhutan" },
                { title: "Tibet", href: "/destinations/tibet" }
            ]
        },
        { 
            title: "Resources", 
            isDropdown: true,
            items: [
                { title: "Contact Us", href: "/contact-us" },
                { title: "About Us", href: "/about-us" },
                { title: "Travel Blogs", href: "/blogs" },
                { title: "FAQs", href: "/faqs" },
                { title: "Travel Permits", href: "/travel-permits" },
                { title: "Terms & Conditions", href: "/terms-and-conditions" },
                { title: "Privacy Policy", href: "/privacy-policy" }
            ]
        },
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

    const renderNavItems = () => nav.map((item, index) => (
        item.isDropdown ? (
            <Dropdown key={index} className='bg-primary/90 text-white rounded-sm' placement='bottom-start'>
                <DropdownTrigger>
                    <div className="group relative cursor-pointer font-medium tracking-wide flex items-center gap-2">
                        <p>{item.title}</p>
                        <IoMdArrowDropdown size={18} />
                        <span
                            className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all w-0 group-hover:w-4/5`}
                        ></span>
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label={`${item.title} Menu`} variant='light'>
                    {item.items.map((subItem, subIndex) => (
                        <DropdownItem key={subIndex} href={subItem.href}>
                            {subItem.title}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        ) : (
            <Link key={index} href={item.link!}>
                <div className="group relative">
                    <p>{item.title}</p>
                    <span
                        className={`absolute -bottom-0 left-0 h-[2px] bg-white transition-all ${
                            isActive(item.link!) ? 'w-full' : 'w-0'
                        } group-hover:w-full`}
                    ></span>
                </div>
            </Link>
        )
    ));

    const renderMobileNavItems = () => {
        const dropdownItems = nav.filter(item => item.isDropdown);
        const regularLinks = nav.filter(item => !item.isDropdown);

        return (
            <div className="flex flex-col space-y-2">
                {regularLinks.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.link!}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`block py-2 text-lg ${isActive(item.link!) ? 'font-semibold' : ''} hover:text-gray-200 transition-colors`}
                    >
                        {item.title}
                    </Link>
                ))}

                <Accordion 
                    selectionMode="multiple" 
                    className="px-0 text-white"
                    itemClasses={{
                        base: "border-b-0 px-0",
                        title: "font-semibold text-white text-lg",
                        trigger: "px-0 py-2",
                        content: "text-white"
                    }}
                >
                    {dropdownItems.map((item, index) => (
                        <AccordionItem key={index} title={item.title}>
                            <div className="flex flex-col space-y-2 pl-4">
                                {item?.items?.map((subItem, subIndex) => (
                                    <Link 
                                        key={subIndex} 
                                        href={subItem.href}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className="text-gray-200 hover:text-white py-1 transition-colors"
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        );
    };

    return (
        <main className="w-full">
            {/* Fixed Mobile Header */}
            <div className="fixed top-0 left-0 right-0 z-[9999999] bg-white shadow-md lg:hidden">
                <section className="flex items-center justify-between py-2 px-4">
                    <Link href={"/"}>
                        <Image src={"/assets/logo.png"} alt="GoingNepalLogo" height={1000} width={1000} className="object-contain h-12 w-20" />
                    </Link>
                    <button onClick={() => setIsSidebarOpen(true)}>
                        <RiMenu3Line size={24} />
                    </button>
                </section>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-[99999999] lg:hidden transition-opacity duration-300 ${
                    isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-72 bg-primary z-[999999999] lg:hidden transform transition-transform duration-300 ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-end">
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <RiCloseLine size={24} className="text-white" />
                    </button>
                </div>
                <div className="px-4 text-white overflow-y-auto h-[calc(100%-120px)]">
                    {renderMobileNavItems()}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
                    <Link href="/plan-trip" onClick={() => setIsSidebarOpen(false)}>
                        <Button className="w-full rounded-md bg-white text-primary">
                            Plan Trip
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
                <div className={`fixed top-0 left-0 right-0 transition-transform z-[9999999] duration-300 ease-in-out ${
                    isScrolled ? 'translate-y-0' : '-translate-y-full'
                }`}>
                    <section className={`px-4 lg:px-16 py-3 bg-primary text-white flex justify-between lg:justify-start gap-8 items-center z-[9999999] font-semibold tracking-wide transition-opacity duration-300 ease-in-out ${
                        isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <div className="lg:hidden">
                            <button onClick={() => setIsSidebarOpen(true)}>
                                <RiMenu3Line size={24} />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-8">
                            {renderNavItems()}
                        </div>
                    </section>
                </div>

                {!isScrolled && (
                    <section className="flex items-center justify-between py-2 px-4 lg:px-12 z-[9999999]">
                        <div className="flex gap-4 lg:gap-10 items-center">
                            <Link href={"/"}>
                                <Image src={"/assets/logo.png"} alt="GoingNepalLogo" height={1000} width={1000} className="object-contain h-12 w-20 lg:h-16 lg:w-28" />
                            </Link>
                            <div className="hidden lg:flex gap-2 items-center">
                                <IoMdCall size={18} />
                                <p className="font-semibold">+977 9867429313</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="lg:hidden">
                                <button onClick={() => setIsSidebarOpen(true)}>
                                    <RiMenu3Line size={24} />
                                </button>
                            </div>
                            <Link href={"/plan-trip"} className="hidden lg:block">
                                <Button className="rounded-md bg-primary text-white px-12">Plan trip</Button>
                            </Link>
                        </div>
                    </section>
                )}

                <section className={`px-4 lg:px-16 py-3 bg-primary text-white flex justify-between lg:justify-start gap-8 items-center font-semibold tracking-wide z-[9999999] transition-opacity duration-300 ease-in-out ${
                    isScrolled ? 'opacity-0' : 'opacity-100'
                }`}>
                    <div className="lg:hidden">
                        <button onClick={() => setIsSidebarOpen(true)}>
                            <RiMenu3Line size={24} />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-8">
                        {renderNavItems()}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Navbar;