import React from "react"
import Link from "@mui/material/Link";
import me from '../images/me.jpg'
import albums from '../images/albums.gif'
import lamoda from '../images/lamoda.gif'
import name from '../images/name.gif'
import todo from '../images/todo.gif'
import "../styles/Home.css";

function Home() {
  const handlePrintPDF =() => {
    console.log("Нажата кнопка")
    const fileURL = `${process.env.PUBLIC_URL}/resume.pdf`;
    const link = document.createElement("resume");
    window.open(fileURL, "_blank");
  };

  return (
    <div className="container">
			<div className="start-info">
        <img src={me} alt="Me" className="me_img"/>
				<div className="text-info">
					<div className="text">
						<h1 className="title-1">CREATIVE WEB</h1>
						<h1 className="title-2">— DEVELOPER</h1>
						<p>I'm a Full Stack Creative Web Developer & Software Engineer based in Minsk,Belarus. Providing the best development services for your next projects.</p>
						<div className="buttons">
							<button>
                <Link to="/about" className="button_text" 
                sx={{
                      color: 'white',
                     textDecoration: 'none',
                }}>
                  About me →
                </Link>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="about-info">
				<h2>About me</h2>
				<div className="info">
					<div className="education">
						<h3>Education</h3>
						<p>Now I am a 2nd year student of Mechanics and Mathematics faculty of BSU. Specialty "Mathematical and software mobile devices".</p>
					</div>
					<div className="skills">
						<h3>My skills</h3>
						<p>• JavaScript</p>
						<p>• React</p>
						<p>• HTML, CSS</p>
						<p>• Figma</p>
						<p>• Node.js</p>
					</div>
					<div className="languages">
						<h3>Languages</h3>
						<p>• Russian - native</p>
						<p>• English - B2</p>
					</div>
				</div>
			</div>
			<div className="projects">
				<div className="projects-title">
					<h2>Take a look at my recent projects</h2>
					<button>
            <Link to="/about" className="button_text"
            sx={{
              color: 'white',
             textDecoration: 'none',
            }}>
                  Brows all →
            </Link>
					</button>
				</div>
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
            <Link href="https://z88d2j.csb.app/"
            sx={{
              color: 'white',
             textDecoration: 'none',
            }}>
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
            <Link href="https://lqvtvl.csb.app/"
            sx={{
              color: 'white',
             textDecoration: 'none',
            }}>
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
              }}>
                <p>The first work I have done using react. Shows how to work with state correctly.
								List of technologies: React, JS.</p>
              </Link>						    
						</div>
            <Link href="https://p8zxds.csb.app/"
            sx={{
              color: 'white',
             textDecoration: 'none',
            }}>
              <img src={name} className="projects-img"/>
            </Link>
					</div>
					<div className="project">
						<div className="project-description">
              <Link href="https://wrn5y6.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <h2>To do</h2>
              </Link>
              <Link href="https://wrn5y6.csb.app/"
              sx={{
                color: 'white',
               textDecoration: 'none',
              }}>
                <p>Allows you to create and work with a to do sheet. Helps to cope with a lot of cases.
								List of technologies: React, JS.</p>
              </Link>						    
						</div>
            <Link href="https://wrn5y6.csb.app/"
            sx={{
              color: 'white',
             textDecoration: 'none',
            }}>
              <img src={todo} className="projects-img"/>
            </Link>					
					</div>
				</div>
			</div>
			<div className="offers">
				<h2>What I offer</h2>
				<div className="offers-list">
					<div className="offer">
						<h3>Web Development</h3>
						<p>Professional, custom website development tailored to your unique business needs. Expert front-end development using HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces</p>
					</div>
					<div className="offer">
						<h3>UX/UI designing</h3>
						<p>Create intuitive and user-centered designs that enhance usability and satisfaction. Design visually appealing user interfaces with a focus on aesthetics and branding</p>
					</div>
					<div className="offer">
						<h3>Branding design</h3>
						<p>Design a memorable and visually appealing logo that represents your brand's essence.
							Develop a cohesive visual identity system, including color palettes, typography, and graphic elements</p>
					</div>
				</div>
			</div>
      <div className="download">
        <h2>You can open my resume in PDF</h2>
        <button onClick={handlePrintPDF} className="button-pdf">
          Open PDF
        </button>
        
      </div>
			
		</div>
  );
}

export default Home;
