import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import business from "../images/servers/business.jpg";
import entertainment from "../images/servers/entertainment.jpg";
import health from "../images/servers/health.jpg";
import politics from "../images/servers/politics.jpg";
import sports from "../images/servers/sports.jpg";
import technology from "../images/servers/technology.jpg";

function Servers({ user }) {
  return (
    <ServersStyleComponent>
      <div class="bg">
        <img src={user.customize.wallpaper} alt="" srcset="" />
        <div className="bg-ovrerlay"></div>
      </div>

      {/* SERVERS */}
      <h1>SERVERS</h1>
      <div className="servers">
        <Link title="Business" to="/servers/business">
          <Server>
            <img src={business} alt="" srcset="" />
            <div className="cover">
              <p>Business</p>
            </div>
          </Server>
        </Link>
        <Link title="Entertainment" to="/servers/entertainment">
          <Server>
            <img src={entertainment} alt="" srcset="" />
            <div className="cover">
              <p>Entertainment</p>
            </div>
          </Server>
        </Link>
        <Link title="Health" to="/servers/health">
          <Server>
            <img src={health} alt="" srcset="" />
            <div className="cover">
              <p>Health</p>
            </div>
          </Server>
        </Link>
        <Link title="Politics" to="/servers/politics">
          <Server>
            <img src={politics} alt="" srcset="" />
            <div className="cover">
              <p>Politics</p>
            </div>
          </Server>
        </Link>
        <Link title="Sports" to="/servers/sports">
          <Server>
            <img src={sports} alt="" srcset="" />
            <div className="cover">
              <p>Sports</p>
            </div>
          </Server>
        </Link>
        <Link title="Technology" to="/servers/technology">
          <Server>
            <img src={technology} alt="" srcset="" />
            <div className="cover">
              <p>Technology</p>
            </div>
          </Server>
        </Link>
      </div>
    </ServersStyleComponent>
  );
}

// Styled Componets
const ServersStyleComponent = styled.div`
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
    .bg-ovrerlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: #11111199;
    }
  }
  h1 {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: ${(props) => props.theme.color_2};
    font-size: 2rem;
    padding: 0.6rem 2rem;
    border-radius: 0 0 20px 20px;
    font-weight: 700;
    background: ${(props) => props.theme.color_1};
  }
  .servers {
    margin: 10rem auto;
    width: 90%;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: auto auto auto;
    z-index: 2;
  }
`;

const Server = styled.div`
  height: 13.5rem;
  width: 24rem;
  position: relative;
  border-radius: 10px;
  border: 5px solid ${(props) => props.theme.color_2};
  overflow: hidden;
  z-index: 3;
  transition: all 0.2s ease;
  img {
    width: 100%;
    object-fit: cover;
  }
  .cover {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    background: #111111ee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    transition: all 0.2s ease;
    p {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      color: ${(props) => props.theme.color_2};
      pointer-events: none;
    }
    &:hover {
      opacity: 1;
    }
  }
  &:hover {
    border: none;
    /* border-top: 2px solid ${(props) => props.theme.color_2};
    border-right: 2px solid ${(props) => props.theme.color_2}; */

    box-shadow: 0 0 20px 3px ${(props) => props.theme.color_2};
  }
`;
export default Servers;
