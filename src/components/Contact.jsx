import React from 'react'
import {FaInstagram} from 'react-icons/fa';
import {CiFacebook} from 'react-icons/ci';
import {CiLinkedin} from 'react-icons/ci';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import {SiGmail} from 'react-icons/si';

const Contact = () => {
  return (
    <div>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
         data-aod-duration="1000"
        >
        <a href='https://www.instagram.com' target='_blank' className="items"><FaInstagram className='icons'/></a>
        {/* <a href='#' target='_blank' className="items"><CiFacebook className='icons'/></a> */}
        <a href='https://www.linkedin.com/in/sohil-raza-92016231a/' target='_blank' className="items"><CiLinkedin className='icons'/></a>
        {/* <a href='#' target='_blank' className="items"><FaSquareXTwitter className='icons'/></a> */}
        <a href='https://github.com/sohilraza01' target='_blank' className="items"><FaGithubSquare className='icons'/></a>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmTwtfTZvppfMHxRnhFBnWLKVKFQzqBJqcmmClKRBpSTjGkfmTKCpMLjDPPknWcDWvlnLV' target='_blank' className="items"><SiGmail className='icons'/></a>
      </div>
      </div>
    </div>
  )
}

export default Contact
