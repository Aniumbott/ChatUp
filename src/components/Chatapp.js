import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function newsToggle() {
  let e = document.querySelector(".news");
  e.classList.toggle("expand");
}

function Chatapp({ user, server }) {
  return (
    <ChatappStyledComponent>
      <h1>{server.toUpperCase()}</h1>
      <div class="bg">
        <img src={user.customize.wallpaper} alt="" srcset="" />
      </div>
      <Link to="/servers">
        <div className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </div>
      </Link>
      <div className="news">
        <div className="lable" onClick={newsToggle}>
          <p>N</p>
          <p>E</p>
          <p>W</p>
          <p>S</p>
        </div>
        <div className="news-data"></div>
      </div>
    </ChatappStyledComponent>
  );
}

const ChatappStyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .back {
    position: absolute;
    top: 0%;
    left: 0%;
    margin: 1rem 2rem;
    z-index: 5;
    background: ${(props) => props.theme.color_1};
    height: 3rem;
    width: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: 100%;
      path {
        fill: ${(props) => props.theme.color_2};
      }
    }
    &:hover {
      background: ${(props) => props.theme.color_2};
      path {
        fill: #ffffff;
      }
    }
  }
  h1 {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    color: ${(props) => props.theme.color_2};
    font-size: 2rem;
    padding: 0.6rem 2rem;
    border-radius: 0 0 20px 20px;
    font-weight: 700;
    background: ${(props) => props.theme.color_1};
  }
  .news {
    position: absolute;
    top: 0;
    right: -30rem;
    height: 100%;
    width: 33rem;
    z-index: 5;
    display: flex;
    flex-direction: row;
    transition: all 0.5s ease;
    .lable {
      height: 8rem;
      width: 3rem;
      padding: 1rem;
      background: ${(props) => props.theme.color_1};
      text-align: center;
      color: ${(props) => props.theme.color_2};
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0 0 0 20px;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.color_2};
        color: #ffffff;
      }
    }
    .news-data {
      height: 100%;
      width: 100%;
      background: ${(props) => props.theme.color_1};
    }
  }
  .expand {
    right: 0;
  }
`;
export default Chatapp;
