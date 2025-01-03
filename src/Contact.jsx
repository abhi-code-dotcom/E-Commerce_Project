import { useAuth0, User } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const {isAuthenticated,user}= useAuth0();
  return (
    <Wrapper>
      <h2 className="common-heading">Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28093.160686137504!2d77.30533527428715!3d28.33934050283707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb98e43a52c7%3A0xa3688094e68c35b2!2sBallabhgarh%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1734768795679!5m2!1sen!2sin"
        width="100%"
        height="450"
        title=""
        style={{border:0, marginTop:-20}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xannweev" method="post" className="contact-inputs">
            <input type="text" placeholder="Enter Your UserName" name="Enter Your username" value={isAuthenticated ? user.name :""} autoComplete="off" required />
            <input type="email" name="Email" placeholder="Enter Your Email" value={isAuthenticated ? user.email :""} autoComplete="off" required />

            <textarea placeholder="Enter Your message" name="message" cols="30" rows="10" autoComplete="off"></textarea>
            <input type="Submit" name="" id="" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};


  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
