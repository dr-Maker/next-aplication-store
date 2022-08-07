import React, {  useContext } from 'react';
import Image from 'next/image';
import AppContext from "@context/AppContext";
import styles from "@styles/PorductItem.module.scss";
import addToCartIcon from "@icons/bt_add_to_cart.svg";
import defaultImg from "@public/default.png";

const ProductItem = ({ product })=>{
    const {addToCart} = useContext(AppContext);

    const handleClick = (item)=>{
        addToCart(item);
    };

    return(
        <div className={styles.ProductItem}>
            <Image src={product.images[0] != "Photo0904.jpg" &&  product.images[0] != undefined &&  product.images[0] != '["https://placeimg.com/640/480/any"]'  ? product.images[0] : defaultImg} alt={product.title} width={240} height={240}  />
                <div className={styles['product-info']}>
                    <div>
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                    </div>
                    <figure onClick={()=>handleClick(product)}    role="presentation"/>
                    <figure onClick={()=>handleClick(product)}   role="presentation">
                        <Image src={addToCartIcon} width={25} height={25}  alt="agregar a compra"></Image>
                    </figure>
            </div>
        </div>
    );
};


export default ProductItem;