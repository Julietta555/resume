import React from "react";
import Link from "@mui/material/Link";
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import "../styles/About.css";

function About() {
  return (
    <div className="container">
			<div className="about">
                <h1 className="title-1">CREATIVE WEB — DEVELOPER</h1>
					<div className="experience">
                        <p>My name is Julia and I'm a Full Stack Creative Web Developer & Software Engineer based in Minsk,Belarus. Now I am a 2nd year student of Mechanics and Mathematics faculty of BSU. Specialty "Mathematical and software mobile devices". </p>
                        <p>I have a passion for crafting exceptional web experiences and developing innovative software solutions. With a strong foundation in both front-end and back-end development, I offer a comprehensive range of services to meet your project needs.</p>
                        <p>I specialize in creating dynamic and responsive user interfaces using modern front-end technologies such as HTML5, CSS3, and JavaScript. I have expertise in front-end frameworks like React, Node.js, allowing me to build interactive and intuitive web applications.</p>
                        <p>I believe in tailoring solutions to meet your specific requirements. Whether you need a custom CMS, an e-commerce platform, or a web-based application, I can create acustomized solution that aligns with your business goals and user needs. I follow best practices in coding standards, security, and performance optimization to deliver high-quality and efficient web applications.</p>
                        <p>I believe in fostering strong client relationships and effective communication. I work closely with my clients to understand their vision and requirements, providing regular updates and seeking feedback throughout the development process. I value collaboration and strive to deliver solutions that exceed expectations.</p>
                        <p>If you're looking for a dedicated and experienced Full Stack Creative Web Developer & Software Engineer for your next project, I'm here to help. Let's collaborate and bring your ideas to life with cutting-edge technology and exceptional craftsmanship.</p>
                        <p>You can see some of my recent UX/UI design projects:</p>
				    </div> 
                    <div className="photos-experience">
                      <Link href="https://www.behance.net/gallery/185255377/Citrus-Fight-Branding-and-Presentation">
                        <img src={project1} className="photo-experience"/>
                      </Link>
                      <Link href="https://www.behance.net/gallery/174318461/Mobile-app-for-students">
                        <img src={project2} className="photo-experience"/>
                      </Link>
                      <Link href="https://www.behance.net/gallery/167995301/Billie-Eilish-Landing-Page">
                        <img src={project3} className="photo-experience"/>
                      </Link>
                    </div>     
			</div>
		</div>
  );
}

export default About;
