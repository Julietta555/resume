import React from "react";
import Link from "@mui/material/Link";
import email from '../images/email.svg';
import telegram from '../images/telegram.svg';
import linkedIn from '../images/linkedin.svg';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="user-contacts">
				<h2>Interested in working together?</h2>
				<div className="contacts">
					<div className="contact">
						<Link href="mailto:vilchinskaya.jul5@gmail.com">
						   <img src={email} className="icons"/>
						</Link>
						<Link href="mailto:vilchinskaya.jul5@gmail.com"
						sx={{
							color: 'black',
						   textDecoration: 'none',
						  }}>
						  <h4>vilchinskaya.jul5@gmail.com</h4>
						</Link>
					</div>
					<div className="contact">
						<Link href="https://t.me/moo_na_mii">
						  <img src={telegram} className="icons"/>
						</Link>
						<Link href="https://t.me/moo_na_mii"
						sx={{
							color: 'black',
						   textDecoration: 'none',
						  }}>
						  <h4>moo_na_mii</h4>						</Link>
						</div>
					<div className="contact">
						<Link href="https://www.linkedin.com/in/julia-vilchinskaya-9a763526b/">
						  <img src={linkedIn} className="icons"/>
						</Link>
						<Link href="https://www.linkedin.com/in/julia-vilchinskaya-9a763526b/"
						sx={{
							color: 'black',
						   textDecoration: 'none',
						  }}>
						  <h4>Vilchinskaya Julia</h4>
						</Link>
					</div>
				</div>
		</div>
		<div className="footer-p">
			<p>&copy; All CopyRights Reserved 2023</p>
			<p>Privacy Policy</p>
		</div>
    </div>
  );
}

export default Footer;