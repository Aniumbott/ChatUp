import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import bg from "../images/sign-in-bg-3.jpg";

function User({ user, setUser }) {
  function logOut() {
    auth.signOut();
  }

  function changeUsername() {
    let e = document.querySelector("#username");
    e.classList.toggle("appear");
  }

  function setUsername() {
    let u = user;
    u.username = document.querySelector("#username input").value;
    setUser(u);
    document.querySelector(".username p").innerText = u.username;
    changeUsername();
  }

  function setGUsername() {
    let u = user;
    u.username = auth.currentUser.displayName;
    setUser(u);
    document.querySelector(".username p").innerText = u.username;
    changeUsername();
  }

  function changeProfilepic() {
    let e = document.querySelector("#profilepic");
    e.classList.toggle("appear");
  }

  function setProfilepic() {
    let u = user;
    u.profilepic = document.querySelector("#profilepic input").value;
    setUser(u);
    document.querySelector(".profilepic img").src = u.profilepic;
    changeProfilepic();
  }

  function setGProfilepic() {
    let u = user;
    u.profilepic = auth.currentUser.photoURL;
    setUser(u);
    document.querySelector(".profilepic img").src = u.profilepic;
    changeProfilepic();
  }

  return (
    <UserStyleComponent>
      <img src={bg} alt="" id="user-bg" />
      <div className="user-details">
        <div className="profilepic">
          <img src={user.profilepic} alt="" srcset="" />
          <div className="edit-profilepic" onClick={changeProfilepic}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-edit"
              class="svg-inline--fa fa-user-edit fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="username">
          <p>{user.username}</p>
          <div className="edit-username" onClick={changeUsername}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="edit"
              class="svg-inline--fa fa-edit fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="edit-container" id="username">
        <div className="popup-textbox">
          <input type="text" defaultValue="Enter new Username" />
          <button id="check" onClick={setGUsername}>
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
          </button>
          <button id="check" onClick={setUsername}>
            &#10003;
          </button>
        </div>
      </div>
      <div className="edit-container" id="profilepic">
        <div className="popup-textbox">
          <input type="text" defaultValue="Paste the source" />
          <button id="check" onClick={setGProfilepic}>
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
          </button>
          <button id="check" onClick={setProfilepic}>
            &#10003;
          </button>
        </div>
      </div>
      <button onClick={logOut} id="log-out">
        LOG OUT
      </button>
    </UserStyleComponent>
  );
}

// Styled Componets
const UserStyleComponent = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 4rem;
  color: black;
  #user-bg {
    pointer-events: none;
    z-index: -1;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  .user-details {
    display: flex;
    align-items: center;
    .profilepic {
      margin: 3rem;
      border-radius: 50%;
      height: 10rem;
      width: 10rem;
      background: #fe9c26;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: solid 5px #fe9c26;
      position: relative;
      display: flex;
      .edit-profilepic {
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
      img {
        height: 10rem;
      }
    }
    .username {
      font-size: 2rem;
      display: flex;
      align-items: center;
      .edit-username {
        opacity: 0;
        padding: 0 1rem;
        height: 2rem;
        svg {
          height: 100%;
          path {
            fill: #000000;
          }
        }
      }
      &:hover {
        .edit-username {
          opacity: 1;
        }
        p {
          text-decoration: underline;
        }
      }
    }
  }
  .edit-container {
    height: 5rem;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    transform: translateY(-150%);
    .popup-textbox {
      position: absolute;
      top: 0;
      display: none;
      height: 3rem;
      width: 30rem;
      background: #fe9c26;
      border-radius: 10px;
      margin: 0.5rem auto;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        border: none;
        height: 95%;
        padding: 0.5rem 1rem;
        width: 90%;
        font-size: 1.1rem;
        background: transparent;
        color: black;
      }
      #check {
        cursor: pointer;
        width: 10%;
        height: 100%;
        border: none;
        background: black;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        svg {
          padding: 0.5rem;
          height: 100%;
          width: 100%;
          background: whitesmoke;
        }
      }
    }
  }
  .appear {
    transform: translateY(0%);
  }
  #log-out {
    height: 3rem;
    width: 7rem;
    border: none;
    border-radius: 10px;
    margin: 0 4.5rem;
    font-size: 0.8rem;
    background: #e1e1e1;
    color: #000000;
    transition: all 0.3s ease;
    &:hover {
      background: #fe9c26;
      color: white;
    }
  }
`;
export default User;
