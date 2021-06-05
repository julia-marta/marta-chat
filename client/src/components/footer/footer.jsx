import React from 'react';
import {RiAliensFill} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {SiSocketDotIo} from "react-icons/si";
import './footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>made with <RiAliensFill className="footer__icon" /> by <b>Julia Nabiulina</b></p>
        <p>&#169; 2021</p>
      </div>
      <div className="footer__created">
        <p>created with:</p>
        <FaNodeJs className="footer__icon" /><FaReact className="footer__icon" /><SiSocketDotIo className="footer__icon" />
      </div>
    </footer>
  );
}

export default Footer;
