import Image from 'next/image';
import React from 'react'
import styles  from '../components/Navbar.module.css'
import { ActiveLink } from './ActiveLink'
const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
        {
            menuItems.map( ({text,href}) => (
                <ActiveLink key={text} href={href} text={text}/>
            ))
        }
        {/* imagen de pexels */}
        {/* <Image width={400} height={400} src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/> */}
        {/* <ActiveLink href="/" text="Home"></ActiveLink>
        <ActiveLink href="/about" text="About"></ActiveLink>
        <ActiveLink href="/contact" text="Contact"></ActiveLink> */}
    </nav>
  )
}
