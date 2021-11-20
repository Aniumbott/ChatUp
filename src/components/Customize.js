import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Customize({ user, setUser }) {
  const navigate = useNavigate();

  function onSave() {
    let u = user;

    const color1 = document.querySelector("#color_1").value;
    const color2 = document.querySelector("#color_2").value;

    console.log(color1, color2);
    const isColor1 = /^#([0-9A-F]{6}){1,2}$/i.test(color1);
    const isColor2 = /^#([0-9A-F]{6}){1,2}$/i.test(color2);

    if (isColor1 && isColor2) {
      if (color1 == "#ffffff" || color2 == "#ffffff") {
        alert("The color can not be White.");
      } else {
        u.customize.color_1 = color1;
        u.customize.color_2 = color2;
        setUser(u);
        signOut(auth);
      }
    } else {
      alert("Enter the Value Correctly, ie. '#abcabc'");
    }
  }

  return (
    <CustomizeStyledComponent>
      <img src={user.customize.wallpaper} alt="" id="user-bg" />
      {/* Add a valid hex checker */}

      <div className="customization">
        <div className="customization-fields">
          <div className="wallpaper-container">
            <img src={user.customize.wallpaper}></img>
            <div className="change-wallpaper" onClick={wallpaperChange}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus-square"
                class="svg-inline--fa fa-plus-square fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="customize-colors">
            <div className="color-container">
              <div className="color-1"></div>
              <input
                id="color_1"
                type="text"
                defaultValue={user.customize.color_1}
              />
            </div>
            <div className="color-container">
              <div className="color-2"></div>
              <input
                id="color_2"
                type="text"
                defaultValue={user.customize.color_2}
              />
            </div>
            <a target="_blank" href="https://aniumbott.github.io/Rangeen/">
              <div>
                <p>CREATE</p>
              </div>
            </a>
          </div>
        </div>
        <div className="customize-buttons">
          <button className="default-button">DEFAULT</button>
          <button className="customize-submit-button" onClick={onSave}>
            SAVE
          </button>
        </div>
      </div>
    </CustomizeStyledComponent>
  );
}

// Styled components
const CustomizeStyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  padding: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .customization {
    width: 100%;
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .customization-fields {
      padding: 0rem 2rem;
      height: 18rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wallpaper-container {
        margin: 0 2rem;
        height: 270px;
        width: 480px;
        border: 10px solid ${(props) => props.theme.color_2};
        background: ${(props) => props.theme.color_2};
        border-radius: 10px;
        position: relative;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .change-wallpaper {
          z-index: 2;
          opacity: 0;
          height: 100%;
          width: 100%;
          background: #22222299;
          position: absolute;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          svg {
            height: 40%;
            path {
              fill: #e1e1e1;
            }
          }
          &:hover {
            opacity: 1;
          }
        }
      }
      .customize-colors {
        height: 100%;
        width: 50%;
        padding: 0rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .color-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          input {
            text-transform: lowercase;
            font-size: 1.1rem;
            padding: 1rem;
            height: 3rem;
            width: 30%;
            border: none;
            border-radius: 5px;
          }
          .color-1 {
            height: 3rem;
            width: 3rem;
            border-radius: 5px;
            margin: 1rem;
            background: ${(props) => props.theme.color_1};
          }
          .color-2 {
            height: 3rem;
            width: 3rem;
            border-radius: 5px;
            margin: 1rem;
            background: ${(props) => props.theme.color_2};
          }
        }
        a {
          div {
            height: 3rem;
            width: 7rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e1e1e1;
            color: ${(props) => props.theme.color_1};
            transition: all 0.3s ease;
            &:hover {
              background: ${(props) => props.theme.color_2};
              color: white;
            }
          }
        }
      }
    }
    .customize-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 7rem;
      button {
        border: none;
        margin: 0 1rem;
        height: 3rem;
        width: 5rem;
        border-radius: 10px;
        background: #e1e1e1;
        color: ${(props) => props.theme.color_1};
        transition: all 0.3s ease;
        &:hover {
          background: ${(props) => props.theme.color_2};
          color: white;
        }
      }
    }
  }
`;
export default Customize;
