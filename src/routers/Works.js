import React from "react";
import Link from "@mui/material/Link";
import albums from '../images/albums.gif'
import lamoda from '../images/lamoda.gif'
import name from '../images/name.gif'
import todo from '../images/todo.gif'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import "../styles/Works.css";

function Works() {
  return (
    <div className="container">
			<div className="start-info">
				<div className="text-info">
					<div className="text">
						<h1 className="title-1">MY RECENT WORKS</h1>
                    </div>
                </div>
            </div>
			<div className="projects1">
				<div className="projects-list">
					<div className="project">
						<div className="project-description">
              <Link href="https://z88d2j.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>Album</h2>
              </Link>
              <Link href="https://z88d2j.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>Multi-page application. When creating it, external API technologies and the react-router-domain library were used.
							List of technologies: React, JS.</p>
              </Link>
						</div>
            <Link href="https://z88d2j.csb.app/">
              <img src={albums} className="projects-img"/>
            </Link>				
					</div>
					<div className="project">
						<div className="project-description">
              <Link href="https://lqvtvl.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>Lamoda</h2>
              </Link>
              <Link href="https://lqvtvl.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>An online store with the ability to filter and sort
									products.
								List of technologies: React, JS.</p>	
              </Link>
						</div>
            <Link href="https://lqvtvl.csb.app/">
              <img src={lamoda} className="projects-img"/>
            </Link>
					</div>
					<div className="project">
						<div className="project-description">
              <Link href="https://p8zxds.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>Name</h2>
              </Link>
              <Link href="https://p8zxds.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}              >
                <p>The first work I have done using react. Shows how to work with state correctly.
								List of technologies: React, JS.</p>
              </Link>
						</div>
            <Link href="https://p8zxds.csb.app/">
              <img src={name} className="projects-img"/>
            </Link>
					</div>
					<div className="project">
						<div className="project-description">
              <Link href="https://www.behance.net/gallery/167995301/billie-eilish-landing-page"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>To do</h2>
              </Link>
              <Link href="https://www.behance.net/gallery/167995301/billie-eilish-landing-page"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>Allows you to create and work with a to do sheet. Helps to cope with a lot of cases.
								List of technologies: React, JS.</p>
              </Link>					    
						</div>
            <Link href="https://www.behance.net/gallery/167995301/billie-eilish-landing-page">
              <img src={todo} className="projects-img"/>
            </Link>					
					</div>
                    <div className="project">
						<div className="project-description">
              <Link href="https://www.behance.net/gallery/185255377/Citrus-Fight-Branding-and-Presentation"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>Citrus Fight</h2>
              </Link>
              <Link href="https://www.behance.net/gallery/185255377/Citrus-Fight-Branding-and-Presentation"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>Presentation of "Citrus Fight" and branding.
								List of programs: Figma.</p>
              </Link>						    
						</div>
            <Link href="https://www.behance.net/gallery/185255377/Citrus-Fight-Branding-and-Presentation">
              <img src={project1} className="projects-img"/>
            </Link>						
					</div>
                    <div className="project">
						<div className="project-description">
              <Link href="https://www.behance.net/gallery/174318461/Mobile-app-for-students"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>Mobile app for students</h2>
              </Link>
              <Link href="https://www.behance.net/gallery/174318461/Mobile-app-for-students"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>UX/UI design for mobile app for students. Researches and branding.
                                    List of programs: Figma.</p>
              </Link>			    
						</div>
            <Link href="https://www.behance.net/gallery/174318461/Mobile-app-for-students">
              <img src={project2} className="projects-img"/>
            </Link>					
					</div>
                    <div className="project">
						<div className="project-description">
              <Link href="https://www.behance.net/gallery/167995301/billie-eilish-landing-page"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>Landing page</h2>
              </Link>
              <Link href="https://www.behance.net/gallery/167995301/billie-eilish-landing-page"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>UX/UI design landing page for Billie Eilish's consert.
                                    List of programs: Figma.</p>
              </Link>						    
						</div>
            <Link href="https://www.behance.net/gallery/167995301/billie-eilish-landing-page">
              <img src={project3} className="projects-img"/>
            </Link>				
					</div>
				</div>
			</div>
		</div>
  );
}

export default Works;
