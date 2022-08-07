import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../styles/SendMail.scss";

const SendMail = () =>{

    return(
        <div className="SendEmail">
			<div className="form-container">
				<Image src="./logos/logo_yard_sale.svg" alt="logo" className="logo" width={25} height={25}/>
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<Image src="./icons/email.svg" alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>¿No recibiste el correo?</span>
					<Link href="/">Re enviar</Link>
				</p>
			</div>
		</div>
    );
};

export default SendMail;