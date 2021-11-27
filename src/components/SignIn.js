// Additionals
import React from "react";
import styled from "styled-components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
// Coponents
import bg from "../images/5.jpg";
import logo from "../images/logo.png";

// Main function
function SignIn() {
  // Sign-In function
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch(() => {});
  }

  return (
    <SignInStyledComponent>
      <img src={bg} className="bg" />
      <SignInContainer>
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="" srcset="" />
          </div>
          <Link to="/" onClick={signInWithGoogle} className="g-sign-in">
            <div className="g-logo">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
            </div>
            <p>Sign-In with Google</p>
          </Link>
        </div>
        <div className="details">
          <div className="details-container">
            <p>Log-In to,</p>
            <h1>ChatUp</h1>
          </div>
          <div className="circle">
            <h2>A platform where you can put your opinions.</h2>
          </div>
        </div>
      </SignInContainer>
    </SignInStyledComponent>
  );
}

// StyledComponets
const SignInStyledComponent = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bg {
    /* z-index: -1; */
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const SignInContainer = styled.div`
  z-index: 3;
  margin: auto;
  background: transparent;
  height: 30rem;
  width: 40rem;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  box-shadow: 5px 5px 10px 5px #00000055;
  .container {
    height: 100%;
    width: 45%;
    background: #000000a5;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-container {
      margin-top: 5rem;
      width: 70%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .g-sign-in {
      cursor: pointer;
      margin-top: 5rem;
      height: 2.5rem;
      width: 70%;
      background: white;
      color: #4285f4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0px 0px 10px 3px #33333355;
      transition: all 0.3s ease;
      .g-logo {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        background: whitesmoke;
        svg {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      p {
        text-align: center;
        font-size: 0.8rem;
        padding: 0.5rem;
        font-weight: 500;
      }
      &:hover {
        background: #4285f4;
        color: white;
      }
    }
  }
  .details {
    height: 100%;
    width: 70%;
    background: #ffffff;
    position: relative;
    overflow: hidden;
    .details-container {
      padding-top: 5rem;
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      p {
        font-size: 1.2rem;
        font-weight: 600;
      }
      h1 {
        color: #ffd600;
        font-size: 5rem;
      }
    }
    .circle {
      position: absolute;
      bottom: 0;
      background: #2e2e2e;
      height: 20rem;
      width: 100%;
      border-radius: 0 30px;
      transform: translateY(50%);
      box-shadow: -3px -3px 0px 10px #ffd600;
      h2 {
        margin: 0 auto;
        padding-top: 3rem;
        width: 80%;
        color: #ffd600;
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }
`;

export default SignIn;
