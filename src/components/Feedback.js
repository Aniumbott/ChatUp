import React from "react";
import styled from "styled-components";

function Feedback() {
  return <FeedbackStyleComponent></FeedbackStyleComponent>;
}

// Styled Componets
const FeedbackStyleComponent = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 4rem;
  color: black;
`;
export default Feedback;
