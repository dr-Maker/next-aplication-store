import React from 'react';
import Image from 'next/image';
import "../styles/ProductInfo.scss";

const ProductInfo = ()=>{
    return(
        <>
            <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bicicleta"  width={25} height={25}/>
            <div className="productInfo">
                <p>$120.000</p>
                <p>Bicicleta</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis est in nemo esse? Inventore, soluta nihil non harum error quia itaque perspiciatis voluptate maiores cupiditate.</p>
                <button className="primary-button add-to-cart-button">
                <Image src="./icons/bt_add_to_cart.svg" alt="agregar a compra"  width={25} height={25}/>
                    Agregar a comprar
                </button>
            </div>
        </>
    );
};

export default ProductInfo;

