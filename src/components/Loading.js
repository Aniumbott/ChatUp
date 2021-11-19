import React from "react";
import styled from "styled-components";
import loading from "../gifs/loading.gif";

function Loading() {
  return (
    <LoadingContainer>
      <div className="unloaded">
        <div className="img-container">
          {" "}
          <img src={loading}></img>
        </div>
      </div>
    </LoadingContainer>
  );
}

// Styled Components
const LoadingContainer = styled.div`
  .img-container {
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  .unloaded {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: calc(100vw - 4rem);
    background: #fe9c26;
    opacity: 0;
    pointer-events: none;
    z-index: -10;
    transition: all 0.2s ease-in-out;
  }
  .loaded {
    transition: none;
    z-index: 10;
    opacity: 1;
  }
`;
export default Loading;
