import React from "react";
import styled from "styled-components";

function Customize({ user, setUser }) {
  return (
    <CustomizeStyledComponent>
      <img src={user.customize.wallpaper} alt="" id="user-bg" />
      {/* Add a valid hex checker */}

      <form className="customization">
        <div className="customization-fields">
          <div className="wallpaper-container">
            <img src={user.customize.wallpaper}></img>
          </div>
          <div className="customize-colors">
            <div className="color-container">
              <div className="color-1"></div>
              <input
                id="color-1"
                type="text"
                defaultValue={user.customize.color_1}
              />
            </div>
            <div className="color-container">
              <div className="color-2"></div>
              <input
                id="color-2"
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
          <button className="customize-submit-button" type="submit">
            SAVE
          </button>
        </div>
      </form>
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
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
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
      padding: 3rem;
      button {
        border: none;
        margin: 0 2rem;
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
`;
export default Customize;
