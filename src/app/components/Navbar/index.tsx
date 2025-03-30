import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu,  MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";


interface NavbarProps {
  darkMode: boolean;
  handleToggleDarkMode: () => void; // ✅ Define the function type explicitly
}

const Navbar: React.FC<NavbarProps> = ({handleToggleDarkMode, darkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  
  return (
    <Nav>
      <NavbarContainer className='border-b border-gray-600'>
        {/* <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo> */}
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <ButtonContainer><button onClick={handleToggleDarkMode} className=' text-purple-800 p-4 rounded-full text-4xl'>{darkMode ? <FaMoon />:<IoIosSunny />}

        </button></ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            <button onClick={handleToggleDarkMode} className=' text-purple-800 p-4 rounded-full text-3xl'>{darkMode ? <FaMoon />:<IoIosSunny />}</button>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar