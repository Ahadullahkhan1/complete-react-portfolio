import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/banner-image.jpg';
import About from './images/Banner2-image.png';
import { Typewriter } from 'react-simple-typewriter'
import CV from './CV/Ahadullah CV.pdf'
import Card from 'react-bootstrap/Card';
import 'bootstrap/js/dist/tab'
import Button from 'react-bootstrap/Button';
import Project01 from './images/Project 01.webp'
import Project02 from './images/Project 02.webp'
import Project03 from './images/Project 03.webp'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




export default class App extends Component {
  render() {

    return (
      <div>
        <Navbar expand="lg" className="Header fixed-top" >
          <Container>
            <Navbar.Brand href="#home" style={{ fontFamily: 'Audiowide', }}>Ahadullah developer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto links">
                <Nav.Link href="#home" className='link' >Home</Nav.Link>
                <Nav.Link href="#about" className='link' >About</Nav.Link>
                <Nav.Link href="#Resume" className='link' >Resume</Nav.Link>
                <Nav.Link href="#Contact" className='link' >Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container id='home'>
          <Row>
            <Col className='main1' sm>
              <h5 className='heading1'>
                Hi 👋
              </h5>
              <h1 className='heading3'>
                I'm {' '}
                <span style={{ color: '#DD0505', fontWeight: 'bold' }}>
                  { }
                  <Typewriter
                    words={['Front End Developer', 'Wordpress Developer', 'UI/UX Desinger']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={200}
                    deleteSpeed={200}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className='para'>
                Front-End Developer: You craft the visual elements and user experience of websites, using languages like HTML, CSS, JavaScript and React.js. WordPress Developer: You specialize in building websites with WordPress, a popular platform, often customizing themes and plugins.
              </p>
              <div className='main-buttons'>
                <a download={CV} href={CV} style={{ textDecoration: 'none', color: 'white' }}><button>
                  <b>Download CV</b>
                </button></a>
                <a href="mailto:ahadullahkhanzai@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>  <button className='main-button'>
                  <b>Hire Me</b>
                </button></a>

              </div>

            </Col>
            <Col className='main2' sm>
              <img className='banner1' src={logo} alt="Logo" />
            </Col>
          </Row>
        </Container>
        <div className='about' id='about'>
          <h1>About</h1>

          <div className='About2'>
            <Row>
              <Col sm className='about3'>
                <h2>Front End Developer & WordPress Developer</h2>
                <p>
                  With 1.5 years of experience in front-end development and WordPress, I am passionate about creating visually appealing and user-friendly websites. I recently completed my matriculation with a score of 72% and have been dedicated to enhancing my skills and expertise in web development.
                  One of my recent projects, <a href="https:akimpression.com" target='_black'>AK Impression</a> , showcases my ability to design and develop functional and attractive websites using WordPress. I take pride in delivering high-quality work that meets client expectations and enhances user experience.
                </p>
                <h2>Professional Goals</h2>
                <p>
                  I aim to leverage my skills in front-end and WordPress development to contribute to innovative web projects. I am committed to continuous learning and staying updated with the latest industry trends and technologies to provide the best solutions for my clients.
                </p>
              </Col>
              <Col sm>

                <div className='banner-2'>
                  <img className='banner2' src={About} alt="Logo" />
                </div>

              </Col>
            </Row>
          </div>
        </div>

        <div className='resume' id='Resume'>
          <h1>My Resume</h1>
          <ul className='nav nav-pills mb-3' id='pills-tab' role='tablis'>
            <li className='nav-item' role='presentation'>
              <button className='nav-link  button20 active' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>Experience</button>

            </li>
            <li className='nav-item' role='presentation'>
              <button className='nav-link  button20' id='pills-Skills-tab' data-bs-toggle='pill' data-bs-target='#pills-Skills' type='button' role='tab' aria-controls='pills-Skills' aria-selected='false'>Skills</button>

            </li>
            <li className='nav-item' role='presentation'>
              <button className='nav-link button20' id='pills-Projects-tab' data-bs-toggle='pill' data-bs-target='#pills-Projects' type='button' role='tab' aria-controls='pills-Projects' aria-selected='false'>Projects</button>

            </li>
          </ul>
          <div className='tab-content' id='pills-tabContent'>
            <div className='tab-pane fade show active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
              <Container>
                <Row>
                  <Col sm className='Experence'>
                    <Card className='card1' >
                      <Card.Body>
                        <Card.Title style={{ fontSize: "28px" }}>Front-End Developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "15px" }}>Techicoder (May,2024-Jun,2024)</Card.Subtitle>
                        <Card.Text style={{ fontSize: "14px", lineHeight: "32px" }}>
                          At Techicoder, I developed responsive web pages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility. I built dynamic user interfaces with React and collaborated with the design team to implement UI/UX designs. I optimized website performance, reducing load times by 20%, and integrated front-end components with back-end services while conducting code reviews for maintainability. Additionally, I participated in agile development processes, contributing to sprint planning and daily stand-ups.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm className='Experence'>
                    <Card className='card1 card2'>
                      <Card.Body>
                        <Card.Title style={{ fontSize: "28px", }}>WordPress Developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "15px" }}>MartensDigitals (Jun,2024-Present)</Card.Subtitle>
                        <Card.Text style={{ fontSize: "14px", lineHeight: "32px" }}>
                          At MartensDigitals, I am responsible for developing and maintaining WordPress websites to meet client requirements. My work includes customizing themes, building custom plugins, and ensuring website functionality and performance. I collaborate with the design team to implement visually appealing and user-friendly web pages. Additionally, I troubleshoot and resolve website issues, ensuring a seamless user experience. I also stay updated with the latest WordPress trends and best practices to deliver high-quality web solutions.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className='tab-pane fade show' id='pills-Skills' role='tabpanel' aria-labelledby='pills-Skills-tab'>

              <Container>
                <div className="container2">
                  <div className="skill-box">
                    <span className="title">HTML</span>
                    <div className="skill-bar">
                      <span className="skill-per html">
                        <span className="tooltip">95%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">CSS</span>
                    <div className="skill-bar">
                      <span className="skill-per css">
                        <span className="tooltip">80%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">JavaScript</span>
                    <div className="skill-bar">
                      <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">jQuery</span>
                    <div className="skill-bar">
                      <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">ReactJS</span>
                    <div className="skill-bar">
                      <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">TailwindCss</span>
                    <div className="skill-bar">
                      <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">SQL</span>
                    <div className="skill-bar">
                      <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">Figma</span>
                    <div className="skill-bar">
                      <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">GitHub</span>
                    <div className="skill-bar">
                      <span className="skill-per css">
                        <span className="tooltip">80%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">Wordpress</span>
                    <div className="skill-bar">
                      <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title">Bootstrap</span>
                    <div className="skill-bar">
                      <span className="skill-per css">
                        <span className="tooltip">80%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Container>

            </div>
            <div className='tab-pane fade show' id='pills-Projects' role='tabpanel' aria-labelledby='pills-Projects-tab'>

              <Container>

                <Row>
                  <Col sm className='project'>
                    <Card className='sub-project'>
                      <Card.Img variant="top" src={Project01} />
                      <Card.Body>
                        <Card.Title style={{ fontSize: '23px', textAlign: 'center' }}>Bitcoin Website</Card.Title>
                        <Card.Text style={{ fontSize: '16px', lineHeight: '24px', textAlign: 'center' }}>
                          Discover Bitcoin.org, your reliable resource for Bitcoin information and secure wallet options. Stay informed with expert insights and up-to-date news.
                        </Card.Text>
                        <a href="https://664d1f45f8af83462a3246e3--celebrated-bienenstitch-ad8799.netlify.app/" target='_blank'><Button >Visit Site</Button></a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm className='project'>
                    <Card className='sub-project subproject2'>
                      <Card.Img variant="top" src={Project02} />
                      <Card.Body>
                        <Card.Title style={{ fontSize: '23px', textAlign: 'center' }}>Ecommerce Website</Card.Title>
                        <Card.Text style={{ fontSize: '16px', lineHeight: '24px', textAlign: 'center' }}>
                          Discover the latest fashion trends with our e-commerce site, offering stylish apparel and accessories. Enjoy exclusive deals and fast shipping on your favorite brands.
                        </Card.Text>
                        <a href="https://66490704d445910b5e95f1b5--willowy-jelly-588e63.netlify.app/" target='_blank'> <Button >Visit Site</Button></a>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm className='project'>
                    <Card className='sub-project sub-project3'>
                      <Card.Img variant="top" src={Project03} />
                      <Card.Body>
                        <Card.Title style={{ fontSize: '23px', textAlign: 'center' }}>Restaurant Website</Card.Title>
                        <Card.Text style={{ fontSize: '16px', lineHeight: '24px', textAlign: 'center' }}>
                          Delight in gourmet dishes and a warm atmosphere. Experience exceptional flavors and friendly service in every visit.
                        </Card.Text>
                        <a href="https://6648d685abb34af6c7c6e40b--resplendent-kelpie-ab47fb.netlify.app/" target='_blank'> <Button >Visit Site</Button></a>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        <div className='contact' id='Contact'>
          <h1>Contact</h1>
          <Container className='sub-contact'>
            <Row>
              <Col sm>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d516.5795011344359!2d67.04406355999997!3d24.89652025225956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722846123313!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ height: '400px', width: '100%' }} ></iframe>
              </Col>
              <Col sm>
                <div className='contact-form'>
                  <Form>
                    <Form.Group className="mb-3" controlId="formGrouptext">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Label>Massage</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '150px' }}
                      />
                    </FloatingLabel>
                    <button class="button">
                      Submit
                      <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                        <path
                          clip-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>

                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <footer>
          <Container>
            <Row>
              <Col sm>
                <h1>Contact</h1>
                <a className='dd' href="mailto:ahadullahkhanzai@gmail.com">Email: ahadullahkhanzai@gmail.com</a><br></br>
                <a className='dd' href="tel:+923196326657">Phone: +923196346657</a>
                <p className='dd'>Address: Liaquatabad,Karachi</p>
              </Col>
              <Col sm>
                <h1>Quick Links</h1>
                <Nav.Link href="#home" className='quick-link' >Home</Nav.Link>
                <Nav.Link href="#about" className='quick-link' >About</Nav.Link>
                <Nav.Link href="#Resume" className='quick-link' >Resume</Nav.Link>
                <Nav.Link href="#Contact" className='quick-link' >Contact</Nav.Link>

              </Col>
              <Col sm>
                <h1>Follow On</h1>
                <div className='icon'>
                  <div className='icons facebook'>
                    <FaFacebook />
                  </div>
                  <div className='icons facebook'>
                    <FaTwitter />
                  </div>
                  <div className='icons facebook'>
                    <FaLinkedin />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <hr></hr>
          <h2>© Ahadullah, All Right Reseved.</h2>
        </footer>









      </div>
    )
  }
}
