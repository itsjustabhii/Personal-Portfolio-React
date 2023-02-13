import {useState, useEffect} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-Icon1.svg'
import navIcon2 from '../assets/img/nav-Icon2.svg'
import navIcon3 from '../assets/img/nav-Icon3.svg'


export const NavBar = () => {
    const [activateLink, setActivateLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scroll > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActivateLink = (value) => {
        setActivateLink(value)
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggle-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('skills')}>Skills</Nav.Link>          
          <Nav.Link href="#projects" className={activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivateLink('projects')}>Projects</Nav.Link>  
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('Connect')}><span>Let's Connect!</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}