import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import bg from "../images/4.jpg";
import { db } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";
import logo from "../images/logo.png";

// Additional functions
// Log-Out
function logOut() {
  signOut(auth);
}

// rgb to hex
function rgbToHex(q) {
  let a = q.split("(")[1].split(")")[0];
  a = a.split(", ");
  let b = a.map(function (x) {
    x = parseInt(x).toString(16);
    return x.length == 1 ? "0" + x : x;
  });
  return "#" + b.join("");
}

// avoid White
function avoidWhite(r) {
  let a = r.split("(")[1].split(")")[0];
  a = a.split(", ");
  if (parseInt(a[0]) >= 220 && parseInt(a[1]) >= 200 && parseInt(a[2]) >= 200) {
    return false;
  } else {
    return true;
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Main function
function Profile({ user, setUser }) {
  //User instance
  let u = user;

  // Update the value of the colors inputs
  useEffect(() => {
    document.querySelector("#color_1").value =
      user.customize.color_1.substring(1);
    document.querySelector("#color_2").value =
      user.customize.color_2.substring(1);
  }, [user]);

  // Toggle appear of inputbox
  function change(q) {
    if (q == "google-u") {
      q = "username";
    } else if (q == "google-p") {
      q = "profilepic";
    }
    let e = document.querySelector("#" + q);
    e.classList.toggle("appear");
  }

  // Set user details
  function set(q) {
    let username;
    let profilepic;
    let wallpaper;
    if (q == "username") {
      username = document.querySelector("#username input").value;
      document.querySelector(".username p").innerText = username;
    } else if (q == "profilepic") {
      profilepic = document.querySelector("#profilepic input").value;
      document.querySelector(".profilepic img").src = profilepic;
    } else if (q == "wallpaper") {
      wallpaper = document.querySelector("#wallpaper input").value;
      document.querySelector(".wallpaper-container img").src = wallpaper;
    } else if (q == "google-u") {
      username = auth.currentUser.displayName;
      document.querySelector(".username p").innerText = username;
    } else if (q == "google-p") {
      profilepic = auth.currentUser.photoURL;
      document.querySelector(".profilepic img").src = profilepic;
    }
    if (username == "" || profilepic == "" || wallpaper == "") {
      alert("Value cannot be empty.");
    } else {
      change(q);
    }
  }

  // Change color
  function colorChanger(id) {
    const color = document.querySelector("#color_" + id).value;
    if (color.length == 6) {
      document.querySelector(".color-" + id).style.background = "#" + color;
    }
  }

  // onDefault
  function onDefault() {
    const wallpaper = bg;
    const color_1 = "#222222";
    const color_2 = "#fe9c26";
    document.querySelector(".wallpaper-container img").src = wallpaper;
    document.querySelector("#color_1").value = color_1.substring(1);
    document.querySelector("#color_2").value = color_2.substring(1);
    colorChanger(1);
    colorChanger(2);
  }

  // onSave
  function onSave() {
    u.username = document.querySelector(".username p").innerText;

    u.profilepic = document.querySelector(".profilepic img").src;

    u.customize.wallpaper = document.querySelector(
      ".wallpaper-container img"
    ).src;

    u.customize.color_1 = window
      .getComputedStyle(document.querySelector(".color-1"), null)
      .getPropertyValue("background-color");

    u.customize.color_2 = window
      .getComputedStyle(document.querySelector(".color-2"), null)
      .getPropertyValue("background-color");

    if (avoidWhite(u.customize.color_1) && avoidWhite(u.customize.color_2)) {
      u.customize.color_1 = rgbToHex(u.customize.color_1);
      u.customize.color_2 = rgbToHex(u.customize.color_2);

      const updateUser = async (u) => {
        const update = await setDoc(doc(db, "Users", u.id), u);
      };
      updateUser(u).then(() => {
        setUser(u);
        window.location.reload(false);
        console.log(user);
      });
    } else {
      alert("The selected color supposed to have a value lower than 'DCDCDC'.");
    }
  }

  return (
    <UserStyleComponent>
      <main>
        {/* BG-image */}
        <img src={user.customize.wallpaper} alt="" id="user-bg" />
        {/* Conatiner-small */}
        <div className="profile-container-small">
          {/* User-details */}
          <div className="user-details">
            {/* Profile-pic */}
            <div className="profilepic">
              <p>
                No Image <br />
                Found.
              </p>
              <img src={user.profilepic} alt="" srcSet="" />
              <div
                className="edit-profilepic"
                onClick={() => change("profilepic")}
              >
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
                  <title>Change Profilepic</title>
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Username */}
            <div className="username">
              <p>{user.username}</p>
              <div className="edit-username" onClick={() => change("username")}>
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
                  <title>Change Username</title>
                  <path
                    fill="currentColor"
                    d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <button onClick={logOut} id="log-out">
            LOG OUT
          </button>
        </div>

        {/*Container-big */}
        <div className="profile-container-big">
          {/* Wallpaper-container */}
          <div className="wallpaper-container">
            <p>
              No Image <br />
              Found.
            </p>
            <img src={user.customize.wallpaper} alt="" srcSet="" />
            <div
              className="change-wallpaper"
              onClick={() => change("wallpaper")}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="exchange-alt"
                class="svg-inline--fa fa-exchange-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <title>Change Wallpaper</title>
                <path
                  fill="currentColor"
                  d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                ></path>
              </svg>
            </div>
          </div>
          {/* Customize-colors */}
          <div className="customize-colors">
            <div className="color-container">
              <div className="color-1"></div>
              <input
                id="color_1"
                type="text"
                onChange={() => colorChanger("1")}
              />
            </div>
            <div className="color-container">
              <div className="color-2"></div>
              <input
                id="color_2"
                type="text"
                onChange={() => colorChanger("2")}
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="customize-buttons">
            <a target="_blank" href="https://aniumbott.github.io/Rangeen/">
              <div className="customize-generate-button">
                <p>GENERATE</p>
              </div>
            </a>
            <div
              className="customize-default-button"
              onClick={() => onDefault()}
            >
              <img
                id="redo-bg"
                src={logo}
                alt=""
                title="Set to ChatUp-Default"
                srcset=""
              />
            </div>
            <button className="customize-save-button" onClick={() => onSave()}>
              SAVE
            </button>
          </div>
        </div>

        {/* Pop-ups */}
        {/* Profilepic pop-up */}
        <div className="edit-container" id="profilepic">
          <div className="popup-textbox">
            <input type="text" placeholder="Paste the source (profilepic)" />
            <button className="check" onClick={() => set("google-p")}>
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
            <button className="check" onClick={() => set("profilepic")}>
              &#10003;
            </button>
          </div>
        </div>

        {/* Username pop-up */}
        <div className="edit-container" id="username">
          <div className="popup-textbox">
            <input type="text" placeholder="Enter new Username" />
            <button className="check" onClick={() => set("google-u")}>
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
            <button className="check" onClick={() => set("username")}>
              &#10003;
            </button>
          </div>
        </div>

        {/* Wallpaper pop-up */}
        <div className="edit-container" id="wallpaper">
          <div className="popup-textbox">
            <input type="text" placeholder="Enter the source (wallpaper)" />
            <button className="check" onClick={() => set("wallpaper")}>
              &#10003;
            </button>
          </div>
        </div>
      </main>
    </UserStyleComponent>
  );
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Styled Componets
const UserStyleComponent = styled.div`
  padding: 5rem 1rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  height: 100vh;
  main {
    width: 70%;
    #user-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    display: flex;
    margin: 0 auto;
    .profile-container-small {
      min-height: 100%;
      width: 30%;
      box-shadow: 5px 5px 30px 0px #11111155;
      background: ${(props) => props.theme.color_2};
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      .user-details {
        padding: 2rem;
        width: 100%;
        background: #ffffff;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        .profilepic {
          margin: 1rem;
          border-radius: 50%;
          height: 10rem;
          width: 10rem;
          background: ${(props) => props.theme.color_2};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: solid 5px ${(props) => props.theme.color_2};
          position: relative;
          display: flex;
          p {
            color: #ffffff;
            font-size: 1.05rem;
            font-weight: 600;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
          .edit-profilepic {
            cursor: pointer;
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
                fill: #ffffff;
              }
            }
            &:hover {
              opacity: 1;
            }
          }
          img {
            z-index: 1;
            height: 10rem;
          }
        }

        .username {
          color: ${(props) => props.theme.color_2};
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          text-align: center;
          .edit-username {
            display: none;
            padding: 0 1rem;
            height: 1.5rem;
            svg {
              cursor: pointer;
              height: 100%;
              path {
                fill: ${(props) => props.theme.color_2};
              }
            }
          }
          &:hover {
            .edit-username {
              display: block;
            }
            p {
              text-decoration: underline;
            }
          }
        }
      }
      #log-out {
        cursor: pointer;
        height: 3rem;
        width: 7rem;
        border: none;
        border-radius: 10px;
        margin: 3rem;
        font-size: 0.8rem;
        background: #ffffff;
        color: ${(props) => props.theme.color_2};
        transition: all 0.3s ease;
        &:hover {
          background: ${(props) => props.theme.color_2};
          color: white;
          border: solid 3px #ffffff;
        }
      }
    }

    /* Second container */
    .profile-container-big {
      padding: 3rem 7rem;
      min-height: 100%;
      width: 70%;
      box-shadow: 5px 5px 30px 0px #11111155;
      background: ${(props) => props.theme.color_1};
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .wallpaper-container {
        margin-bottom: 1rem;
        width: 100%;
        min-height: calc(100% * 9 / 16);
        border: 10px solid ${(props) => props.theme.color_2};
        background: ${(props) => props.theme.color_2};
        border-radius: 10px;
        position: relative;
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          font-size: 2rem;
          text-align: center;
          color: #ffffff;
        }
        img {
          position: absolute;
          top: 0;
          z-index: 2;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .change-wallpaper {
          cursor: pointer;
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
            height: 30%;
            path {
              fill: #ffffff;
            }
          }
          &:hover {
            opacity: 1;
          }
        }
      }
      .customize-colors {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .color-container {
          margin-top: 1rem;
          padding: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          input {
            text-transform: uppercase !important;
            text-align: center;
            margin-left: 1rem;
            width: 100%;
            text-transform: lowercase;
            font-size: 1.1rem;
            padding: 1rem;
            height: 3rem;
            width: 100%;
            border: none;
            border-radius: 5px;
          }
          .color-1,
          .color-2 {
            min-height: 3rem;
            min-width: 3rem;
            border-radius: 5px;
            border: solid 3px #ffffff;
            background: ${(props) => props.theme.color_1};
          }
          .color-2 {
            background: ${(props) => props.theme.color_2};
          }
        }
      }
      .customize-buttons {
        margin: 2rem 0;
        margin-bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .customize-generate-button,
        button {
          cursor: pointer;
          border: none;
          font-size: 0.8rem;
          height: 3rem;
          width: 7rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: ${(props) => props.theme.color_2};
          transition: all 0.3s ease;
          &:hover {
            background: ${(props) => props.theme.color_2};
            color: white;
          }
        }
        .customize-default-button {
          height: 3rem;
          cursor: pointer;
          #redo-bg {
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .edit-container {
      margin-left: 4rem;
      height: 5rem;
      position: fixed;
      top: 0;
      left: 0;
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
        box-shadow: 0px 0px 20px 0px #11111155;
        background: ${(props) => props.theme.color_2};
        border-radius: 10px;
        margin: 0.5rem auto;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          color: white;
          border: none;
          height: 95%;
          padding: 0.5rem 1rem;
          width: 90%;
          font-size: 1.1rem;
          background: transparent;
          ::placeholder {
            color: #ffffff;
          }
        }
        .check {
          cursor: pointer;
          width: 10%;
          height: 100%;
          border: none;
          background: ${(props) => props.theme.color_1};
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
  }
`;
export default Profile;
