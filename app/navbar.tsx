import { Text, Link, Button } from "@radix-ui/themes";
import React from 'react';
import localFont from 'next/font/local'
 
const myFont = localFont({ src: './mooxy.ttf' })


const nav = () => {
    const links = [
        { label: 'Dashboard', href:'/'},
        { label: 'Attendance', href:'/attendance'},
        { label: 'Services', href:'/services'},
        { label: 'Contact Us', href:'/contact'},
    ]
    

  return (
    <nav className='h-20 border-b-1 shadow-transparent bg-transparent flex justify-between items-center px-5'>
        <div className={myFont.className}>
            <div className="flex flex-col items-center">
                <Text as="p" size="6" weight="bold" color="blue" highContrast
                style={{ letterSpacing: "0.8px", lineHeight: "1.1" }}
                >
                    Focus Point
                </Text>
                <Text as="p" size="5" color="blue"
                style={{ letterSpacing: "0.3px", lineHeight: "1.0" }}
                >
                    Driving School
                </Text>
            </div>
        </div>
        <ul className=' gap-4 hidden md:flex' >
            {links.map( link =>
                <Link
                key={link.href} 
                href={link.href}
                weight="medium"
                underline="hover"
                highContrast
                >
                    {link.label}
                </Link>
            )}
        </ul>
        <div className='w-[122] md:flex justify-end hidden'>
            <Button color="blue" highContrast>Login</Button>
        </div>
        <div className="md:hidden">
            hamburger
        </div>
    </nav>
  )
}

export default nav