import React from 'react';
import Link from 'next/link';
import styles from "@styles/Menu.module.scss";


const Menu = ()=>{
    return(
        <div className={styles.Menu}>
            <ul>
                <li>
                    <Link href="/" className="title" >Mis ordenes</Link>
                </li>
                <li>
                    <Link href="/" >Mi cuenta</Link>
                </li>
                <li>
                    <Link href="/" >Cerrar</Link>
                </li>
            </ul>
        </div>
    );

};

export default Menu;