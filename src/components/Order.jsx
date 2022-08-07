import React from 'react';
import Image from 'next/image';
import flechita from "@icons//flechita.svg";

import styles from "@styles/Order.module.scss";

const Order = ()=>{
    return(
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articulos</span>
            </p>
                <p>$560.000</p>
                <Image src={flechita} alt="arrow" />
        </div>
    );
};

export default Order;
