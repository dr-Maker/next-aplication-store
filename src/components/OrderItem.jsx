import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from "@context/AppContext";
import close from "@icons/icon_close.png";
import defaultImg from "@public/default.png";

import styles from "@styles/OrderItem.module.scss";

const OrderItem = ({ product })=>{
    const { removeToCart } = useContext(AppContext);

    const handleRemove = ( item )=>{
        removeToCart(item);
    };

    return(
        <div className={styles.OrderItem}>
            <figure>
                <Image src={product?.images[0] && product?.images[0] != "Photo0904.jpg" &&  product?.images[0] != undefined &&  product.images[0] != '["https://placeimg.com/640/480/any"]'  ? product.images[0] : defaultImg} alt={product?.title} width={240} height={240}/>
            </figure>
            <p>{product?.title}</p>
            <p>$ {product?.price}</p>
            <Image src={close} alt="close" onClick={()=>handleRemove(product)}/>
        </div>
    );
};

export default OrderItem;