import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@logos/logo_yard_sale.svg";
import styles from '@styles/Login.module.scss';


const Login = () =>{

const form = useRef(null);

const handleSubmit = ()=>{
    const formData = new FormData(form.current);
    console.log("formData", formData);
    const data = {
        username : formData.get("email"),
        password : formData.get("password")
    };
    console.log("data", data);   
};

return(
    <div className={styles.Login}>
        <div className={styles['Login-container']}>
            <Image src={logo} alt="logo" className={styles.logo} width={25} height={25} />
            <form action="/" className={styles.form} ref={form}>
                <label htmlFor="email" className={styles.label} >Email address</label>
                <input type="text" id="email" name="email" placeholder="platzi@example.cm" className={styles['input', 'input-email']} />
                <label htmlFor="password" className={styles.label}>Password</label>
                <input type="password" id="password" name="password" placeholder="*********" className={styles['input','input-password']} />
                <button type="button" className={styles['primary-button','login-button']}  onClick={handleSubmit}>
                    Log in
                </button>
                <Link href="/">Forgot my password</Link>
            </form>
            <button className={styles['secondary-button','signup-button']}>Sign up</button>
        </div>
    </div>
);};


export default Login;