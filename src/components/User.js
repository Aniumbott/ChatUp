import React from "react";
import styled from "styled-components";

function User() {
  return (
    <UserStyleComponent>
      <h1>YO BRO</h1>
    </UserStyleComponent>
  );
}

// Styled Componets
const UserStyleComponent = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 4rem;
  color: black;
`;
export default User;
