import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <InfoStyleComponent>
      <ul>
        <lh>What is it ?</lh>
        <li>It is a server based chat application.</li>
        <li>
          Where you can hang out with differen people of different tastes,
          belieaf and opinions.
        </li>
        <li>You can debate on a topic or just discuss about it.</li>
        <li></li>
        <lh>Features :</lh>
        <li>Simple, Fast and easy to use.</li>
        <li>Modern UI.</li>
        <li>Customisable theme. (as everyone has own taste.)</li>
      </ul>
    </InfoStyleComponent>
  );
}

// Styled Componets
const InfoStyleComponent = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 4rem;
  color: black;
`;
export default Info;
