import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from "next/image";


import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContex from "@context/AppContext";

import menu from '@icons/icon_menu.svg';
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

import styles from "@styles/Header.module.scss";

const Header = ()=>{

    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const { state } = useContext(AppContex);

    const handleToggle = ()=>{
        setToggle(!toggle);
    };

    return(
        <nav className={styles.nav}>
            <img src={menu.src} alt="menu" className={styles.menu} />    
            <div className={styles['navbar-left']}>
                <Link href="/">
                    <Image src={logo} alt="logo"  className={styles['nav-logo']}/> 
                </Link>
                <ul>
                    <li>
                        <Link href="/">Todas</Link>
                    </li>
                    <li>
                        <Link href="/">Ropa</Link>
                    </li>
                    <li>
                        <Link href="/">Electronicos</Link>
                    </li>
                    <li>
                        <Link href="/">Muebles</Link>
                    </li>
                    <li>
                        <Link href="/">Juguetes</Link>
                    </li>
                    <li>
                        <Link href="/">Otros</Link>
                    </li>
                </ul>      
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li className={styles['navbar-email']} onClick={handleToggle}  role="presentation">
                        camilayukoo@gmail.comm
                    </li>
                    <li className={styles['navbar-shopping-cart']} onClick={()=>{setToggleOrders(!toggleOrders);}} role="presentation">
                    <Image src={shoppingCart} alt="shopping cart" />
                     { state.cart.length > 0 ? <div>{state.cart.length}</div> : null } 
                </li>
                </ul>
            </div>
            { toggle && <Menu /> }
            { toggleOrders && <MyOrder /> }
            
        </nav>
    );
};

export default Header;