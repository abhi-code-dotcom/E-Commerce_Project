import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { Link } from 'react-router-dom';
import { FaDiscord, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready To get Started?</h3>
                        <h3>Talk to us today</h3>
                    </div>
                    <Button>
                        <Link to="/contact">
                            Get Started
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Main Footer */}
            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3 className='follow'>Smart Cart</h3>
                        <p>Smart Cartis an E-Commerce Site where You can purchase your favourite products.</p>
                    </div>

                    <div className="footer-subscribe">
                        <h3 className='follow'>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" placeholder='Eneter your Email' id="" readOnly/>
                            <input type="Submit" value="subscribe" readOnly/>
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3 className='follow'>follow us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaInstagram className='icons' />
                            </div>
                            <div>
                                <FaFacebook className='icons' />
                            </div>
                            <div>
                                <FaWhatsapp className='icons' />
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3 className='follow'>Call-us</h3>
                        <a href=""><h3 className='follow'>+91 9999888823</h3></a>
                    </div>
                </div>
                {/* bottom footer section */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className='container grid grid-two-column'>
                        <p>@{new Date().getFullYear()} SmartCart.All Rights Reserved</p>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>

                </div>
            </footer>

        </Wrapper>
    )
}

const Wrapper = styled.section`
 
    .contact-short{
        width:60vw;
        background-color:${({ theme }) => theme.colors.bg};
        padding:5rem 10rem;
        margin:auto;
        border-radius:1rem;
        transform:translateY(50%);
        box-shadow:${({ theme }) => theme.colors.shadowSupport};
        
        .grid div:last-child{
            justify-self:end;
            align-items:center;
        }
    }
    footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .follow{
   text-align:center;
  }
  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  form{
    text-align:center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin:4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }
   
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-social--icons{
        margin-left:33%;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
  `;
export default Footer
