import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Menu() {
  function Toggle() {
    let e = document.querySelector("main");
    e.classList.toggle("expand");
  }

  function activeRoute(e) {
    // console.log(e.target);
    document.querySelectorAll(".items a").forEach((a) => {
      a.style.background = "#000000";
    });

    e.target.style.background = "#fe9c26";
  }

  return (
    <MenuItems className="none">
      <main className="">
        {/* DETAILS */}
        <Details onClick={Toggle}>
          <img src={logo} alt="" srcset="" />
        </Details>

        <div className="items">
          {/* HOME */}
          <Link
            to="/"
            className="itemContainer"
            onClick={activeRoute}
            id="home"
          >
            <Sdivs>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48px"
                height="48px"
              >
                <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z" />
              </svg>
            </Sdivs>
            <p>HOME</p>
          </Link>

          {/* USER */}
          <Link
            to="/user"
            className="itemContainer"
            onClick={activeRoute}
            id="user"
          >
            <Sdivs>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0C13.4325 0 0 13.4325 0 30C0 46.5675 13.4325 60 30 60C46.5675 60 60 46.5675 60 30C60 13.4325 46.5675 0 30 0ZM49.3825 45.7625C48.73 44.2975 47.41 43.285 44.705 42.66C38.9725 41.3375 33.635 40.1775 36.2225 35.2975C44.085 20.4425 38.305 12.5 30 12.5C21.53 12.5 15.89 20.7475 23.7775 35.2975C26.4425 40.2075 20.9075 41.365 15.295 42.66C12.585 43.285 11.275 44.305 10.6275 45.775C7.115 41.4675 5 35.9775 5 30C5 16.215 16.215 5 30 5C43.785 5 55 16.215 55 30C55 35.9725 52.8875 41.4575 49.3825 45.7625Z"
                  fill="#E1E1E1"
                />
              </svg>
            </Sdivs>
            <p>USER</p>
          </Link>

          {/* SERVERS */}
          <Link
            to="/servers"
            className="itemContainer"
            onClick={activeRoute}
            id="servers"
          >
            <Sdivs>
              <svg
                width="48"
                height="42"
                viewBox="0 0 48 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 12H3C1.34316 12 0 10.6568 0 9V3C0 1.34316 1.34316 0 3 0H45C46.6568 0 48 1.34316 48 3V9C48 10.6568 46.6568 12 45 12ZM40.5 3.75C39.2573 3.75 38.25 4.75734 38.25 6C38.25 7.24266 39.2573 8.25 40.5 8.25C41.7427 8.25 42.75 7.24266 42.75 6C42.75 4.75734 41.7427 3.75 40.5 3.75ZM34.5 3.75C33.2573 3.75 32.25 4.75734 32.25 6C32.25 7.24266 33.2573 8.25 34.5 8.25C35.7427 8.25 36.75 7.24266 36.75 6C36.75 4.75734 35.7427 3.75 34.5 3.75ZM45 27H3C1.34316 27 0 25.6568 0 24V18C0 16.3432 1.34316 15 3 15H45C46.6568 15 48 16.3432 48 18V24C48 25.6568 46.6568 27 45 27ZM40.5 18.75C39.2573 18.75 38.25 19.7573 38.25 21C38.25 22.2427 39.2573 23.25 40.5 23.25C41.7427 23.25 42.75 22.2427 42.75 21C42.75 19.7573 41.7427 18.75 40.5 18.75ZM34.5 18.75C33.2573 18.75 32.25 19.7573 32.25 21C32.25 22.2427 33.2573 23.25 34.5 23.25C35.7427 23.25 36.75 22.2427 36.75 21C36.75 19.7573 35.7427 18.75 34.5 18.75ZM45 42H3C1.34316 42 0 40.6568 0 39V33C0 31.3432 1.34316 30 3 30H45C46.6568 30 48 31.3432 48 33V39C48 40.6568 46.6568 42 45 42ZM40.5 33.75C39.2573 33.75 38.25 34.7573 38.25 36C38.25 37.2427 39.2573 38.25 40.5 38.25C41.7427 38.25 42.75 37.2427 42.75 36C42.75 34.7573 41.7427 33.75 40.5 33.75ZM34.5 33.75C33.2573 33.75 32.25 34.7573 32.25 36C32.25 37.2427 33.2573 38.25 34.5 38.25C35.7427 38.25 36.75 37.2427 36.75 36C36.75 34.7573 35.7427 33.75 34.5 33.75Z"
                  fill="#E1E1E1"
                />
              </svg>
            </Sdivs>
            <p>SERVERS</p>
          </Link>

          {/* REQAS */}
          <Link
            to="/reqas"
            className="itemContainer"
            onClick={activeRoute}
            id="reqas"
          >
            <Sdivs>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0C13.4325 0 0 13.4325 0 30C0 46.5675 13.4325 60 30 60C46.5675 60 60 46.5675 60 30C60 13.4325 46.5675 0 30 0ZM45 32.5H32.5V45H27.5V32.5H15V27.5H27.5V15H32.5V27.5H45V32.5Z"
                  fill="#E1E1E1"
                />
              </svg>
            </Sdivs>
            <p>REQUEST A SERVER</p>
          </Link>

          {/* CUSTOMIZE */}
          <Link
            to="/customize"
            className="itemContainer"
            onClick={activeRoute}
            id="customise"
          >
            <Sdivs>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="palette"
                class="svg-inline--fa fa-palette fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                ></path>
              </svg>
            </Sdivs>
            <p>CUSTOMIZE</p>
          </Link>

          {/* INFO */}
          <Link
            to="/info"
            className="itemContainer"
            onClick={activeRoute}
            id="info"
          >
            <Sdivs>
              <svg
                width="387"
                height="387"
                viewBox="0 0 387 387"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M193.5 0C86.6404 0 0 86.6716 0 193.5C0 300.391 86.6404 387 193.5 387C300.36 387 387 300.391 387 193.5C387 86.6716 300.36 0 193.5 0ZM193.5 85.8266C211.598 85.8266 226.27 100.498 226.27 118.597C226.27 136.695 211.598 151.367 193.5 151.367C175.402 151.367 160.73 136.695 160.73 118.597C160.73 100.498 175.402 85.8266 193.5 85.8266ZM237.194 284.008C237.194 289.179 233.001 293.371 227.831 293.371H159.169C153.999 293.371 149.806 289.179 149.806 284.008V265.282C149.806 260.112 153.999 255.919 159.169 255.919H168.532V205.984H159.169C153.999 205.984 149.806 201.792 149.806 196.621V177.895C149.806 172.724 153.999 168.532 159.169 168.532H209.105C214.275 168.532 218.468 172.724 218.468 177.895V255.919H227.831C233.001 255.919 237.194 260.112 237.194 265.282V284.008Z"
                  fill="#E1E1E1"
                />
              </svg>
            </Sdivs>
            <p>INFO</p>
          </Link>

          {/* FEEDBACK */}
          <Link
            to="/feedback"
            className="itemContainer"
            onClick={activeRoute}
            id="feedback"
          >
            <Sdivs>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.5 0H7.5C3.36328 0 0 3.36308 0 7.49956V41.2476C0 45.3841 3.36328 48.7471 7.5 48.7471H18.75V58.5903C18.75 59.7387 20.0625 60.4066 20.9883 59.727L35.625 48.7471H52.5C56.6367 48.7471 60 45.3841 60 41.2476V7.49956C60 3.36308 56.6367 0 52.5 0Z"
                  fill="#E1E1E1"
                />
              </svg>
            </Sdivs>
            <p>FEEDBACK</p>
          </Link>
        </div>
      </main>
    </MenuItems>
  );
}

// Styled Components
const MenuItems = styled.div`
  width: auto;
  z-index: 10;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  .expand {
    width: 14rem;
  }

  main {
    overflow: hidden;
    height: 100vh;
    width: 4rem;
    background: #000000;
    display: block;
    transition: all 0.3s ease;

    .items {
      position: absolute;
      left: 0;
      #home {
        background: #fe9c26;
      }
    }

    .itemContainer {
      position: static;
      left: 0;
      text-decoration: none;
      width: 14rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      p {
        pointer-events: none;
        padding: 0rem 0.5rem;
        font-size: 0.8rem;
        text-decoration: none;
        color: white;
        font-weight: 600;
      }
    }
  }
`;

const Details = styled.div`
  cursor: pointer;
  max-height: 3rem;
  margin: 2rem auto 2rem auto;
  display: flex;
  justify-content: center;
  img {
    height: 3rem;
    width: 3rem;
    object-fit: cover;
  }
`;

const Sdivs = styled.div`
  pointer-events: none;
  max-height: 3rem;
  max-width: 3rem;
  margin: 0.5rem 0.3rem;
  padding: 0.5rem;
  svg {
    height: 100%;
    width: 100%;
    object-fit: cover;
    path {
      fill: #ffffff;
      transition: all 0.5s ease;
    }
  }
`;

export default Menu;
